import Immutable = require('immutable');
import {Bill} from "Bill";
import {BillItem} from "BillItem";
import {Product} from "Product";

export class BillContext {
    undoStack: any[];
    reduStack: any[];
    bills: any[];

    constructor() {
        this.generateTestData();
    }

    private generateTestData(): void {
        var bill1Items = new Array(new BillItem(1, 2, new Array(new Product("cheese"))));
        var bill1 = new Bill(1111, bill1Items);
        var bill2Items = new Array(new BillItem(2, 1, new Array(new Product("milk"))));
        var bill2 = new Bill(2222, bill2Items);

        var initialData: Array<Bill> = new Array(bill1, bill2, new Bill(333, new Array()));
        

        this.bills = Immutable.fromJS(initialData);
    }

    public addBill(bill: Bill): void{
        this.bills.push(Immutable.fromJS(bill));
    }


    private changeBills(bill: Bill) {

    }
}