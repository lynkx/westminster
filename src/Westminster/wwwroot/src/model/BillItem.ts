import {Product} from "Product";

export class BillItem {
    public orderNumber: number;
    public amount: number;
    public products: Array<Product>;

    constructor(orderNumber: number, amount: number, products?: Array<Product>) {
        this.orderNumber = orderNumber;
        this.amount = amount;
        this.products = products == null ? products : []; 
    }

    
}
