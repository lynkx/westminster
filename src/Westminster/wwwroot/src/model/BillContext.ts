//import Immutable = require('immutable');
import {Bill} from "./Bill";
import {BillItem} from "./BillItem";
import {Product} from "./Product";
import {Memento} from "Memento/caretaker";

export class BillContext extends Memento.CareTaker<Array<Bill>>{

    private generateTestData(): Array<Bill> {
        var bill1Items = new Array(new BillItem(1, 2, new Array(new Product("cheese"))));
        var bill1 = new Bill(1111, bill1Items);
        var bill2Items = new Array(new BillItem(2, 1, new Array(new Product("milk"))));
        var bill2 = new Bill(2222, bill2Items);

        var initialData: Array<Bill> = new Array(bill1, bill2);

        return initialData;
    }

    constructor() {
        var sampleData = this.generateTestData();
        super(sampleData);
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