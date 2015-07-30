import { BillContext } from "model/BillContext";
import { Bill } from "model/Bill";
export class Bills extends BillContext {
    get bills() {
        return this.state;
    }
    addNewBill() {
        this.addBill(new Bill(3333, new Array()));
    }
}
//# sourceMappingURL=bills.js.map