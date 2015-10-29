System.register([], function(exports_1) {
    var BillItem;
    return {
        setters:[],
        execute: function() {
            BillItem = (function () {
                function BillItem(orderNumber, amount, products) {
                    this.orderNumber = orderNumber;
                    this.amount = amount;
                    this.products = products == null ? products : [];
                }
                return BillItem;
            })();
            exports_1("BillItem", BillItem);
        }
    }
});
//# sourceMappingURL=BillItem.js.map