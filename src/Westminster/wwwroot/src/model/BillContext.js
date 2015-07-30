import { Bill } from "./Bill";
import { BillItem } from "./BillItem";
import { Product } from "./Product";
import { Memento } from "Memento/caretaker";
export class BillContext extends Memento.CareTaker {
    constructor() {
        super();
        this.state = this.generateTestData();
    }
    generateTestData() {
        var initialData = new Array();
        for (var i = 0; i < 10; i++) {
            initialData.push(new Bill(i, new Array(new BillItem(i, i, new Array(new Product("someproduct1"))))));
        }
        return initialData;
    }
    addBill(bill) {
        var newState = this.state.slice();
        newState.push(bill);
        this.changeBills(newState);
    }
    changeBills(bills) {
        this.undoStack.push(JSON.stringify(this.state));
        this.redoStack = [];
        this.state = bills;
    }
}
//# sourceMappingURL=BillContext.js.map