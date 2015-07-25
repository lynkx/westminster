import {BillItem} from "BillItem";
export class Bill {
    public id: number;
    public items: Array<BillItem>;

    constructor(id: number, items: Array<BillItem>) {
        this.id = id;
        this.items = items;
    }
}
