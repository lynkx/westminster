define(["require", "exports"], function (require, exports) {
    var BillItem = (function () {
        function BillItem(orderNumber, amount, products) {
            this.orderNumber = orderNumber;
            this.amount = amount;
            this.products = products == null ? products : [];
        }
        return BillItem;
    })();
    exports.BillItem = BillItem;
});
//# sourceMappingURL=BillItem.js.map