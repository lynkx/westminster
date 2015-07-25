define(["require", "exports", 'immutable', "Bill", "BillItem", "Product"], function (require, exports, Immutable, Bill_1, BillItem_1, Product_1) {
    var BillContext = (function () {
        function BillContext() {
            this.generateTestData();
        }
        BillContext.prototype.generateTestData = function () {
            var bill1Items = new Array(new BillItem_1.BillItem(1, 2, new Array(new Product_1.Product("cheese"))));
            var bill1 = new Bill_1.Bill(1111, bill1Items);
            var bill2Items = new Array(new BillItem_1.BillItem(2, 1, new Array(new Product_1.Product("milk"))));
            var bill2 = new Bill_1.Bill(2222, bill2Items);
            var initialData = new Array(bill1, bill2, new Bill_1.Bill(333, new Array()));
            this.bills = Immutable.fromJS(initialData);
        };
        BillContext.prototype.addBill = function (bill) {
        };
        return BillContext;
    })();
    exports.BillContext = BillContext;
});
//# sourceMappingURL=BillContext.js.map