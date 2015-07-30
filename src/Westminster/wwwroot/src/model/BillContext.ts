//import Immutable = require('immutable');
import {Bill} from "./Bill";
import {BillItem} from "./BillItem";
import {Product} from "./Product";
import {Memento} from "Memento/caretaker";

export class BillContext extends Memento.CareTaker<Array<Bill>>{

    private generateTestData(): Array<Bill> {
        var initialData = new Array<Bill>();
        for (var i = 0; i < 10; i++) {
            initialData.push(new Bill(i, new Array(new BillItem(i, i, new Array(new Product("someproduct1"))))));
        }

        return initialData;
    }

    constructor() {
        super();
        this.state = this.generateTestData();
        
    }

    public addBill(bill: Bill) {
        var newState = this.state.slice();
        newState.push(bill);
        this.changeBills(newState);
    }

    private changeBills(bills: Array<Bill>): void {
        this.undoStack.push(JSON.stringify(this.state));
        this.redoStack = [];
        this.state = bills;
    }



}