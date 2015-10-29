//import Immutable = require('immutable');
import {Bill} from "./Bill";
import {BillItem} from "./BillItem";
import {Product} from "./Product";
import {Memento} from "Memento/caretaker";
import * as Immutable from "immutable";

export class BillContext extends Memento.CareTaker<Array<Bill>>{

    private generateTestData(): Array<Bill> {
        var initialData = new Array<Bill>();
        for (var i = 0; i < 10; i++) {
            initialData.push(Immutable.fromJS(new Bill(i, new Array(new BillItem(i, i, new Array(new Product("someproduct1")))))));
        }

        return initialData;
    }

    constructor() {
        super();
        this.state = this.generateTestData();

    }

    public addBill(bill: Bill) {
        var billIm = Immutable.fromJS(bill);
        var newState = this.state.concat(billIm);
        this.changeBills(newState);
    }

    private changeBills(bills:Array<Bill>): void {
        this.undoStack.push(this.state);
        this.redoStack = []; //Immutable.List<Array<Bill>>();
        this.state = bills;
    }



}