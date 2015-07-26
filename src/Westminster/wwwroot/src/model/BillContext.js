var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", "./Bill", "./BillItem", "./Product", "Memento/caretaker"], function (require, exports, Bill_1, BillItem_1, Product_1, caretaker_1) {
    var BillContext = (function (_super) {
        __extends(BillContext, _super);
        function BillContext() {
            var sampleData = this.generateTestData();
            _super.call(this, sampleData);
        }
        BillContext.prototype.generateTestData = function () {
            var bill1Items = new Array(new BillItem_1.BillItem(1, 2, new Array(new Product_1.Product("cheese"))));
            var bill1 = new Bill_1.Bill(1111, bill1Items);
            var bill2Items = new Array(new BillItem_1.BillItem(2, 1, new Array(new Product_1.Product("milk"))));
            var bill2 = new Bill_1.Bill(2222, bill2Items);
            var initialData = new Array(bill1, bill2);
            return initialData;
        };
        BillContext.prototype.addBill = function (bill) {
            var newState = this.state.slice();
            newState.push(bill);
            this.changeBills(newState);
        };
        BillContext.prototype.changeBills = function (bills) {
            this.undoStack.push(JSON.stringify(this.state));
            this.redoStack = [];
            this.state = bills;
        };
        return BillContext;
    })(caretaker_1.Memento.CareTaker);
    exports.BillContext = BillContext;
});
//# sourceMappingURL=BillContext.js.map