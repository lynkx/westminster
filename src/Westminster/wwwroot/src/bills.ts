import {BillContext} from "model/BillContext"
import {Bill} from "model/Bill";

export class Bills extends BillContext{
   get bills(): Array<Bill> {
       return this.state;
    }

    public addNewBill() {
        this.addBill(new Bill(3333, new Array()));
    }
}