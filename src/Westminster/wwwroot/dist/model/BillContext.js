define(["require", "exports", 'immutable', "Bill"], function (require, exports, Immutable, Bill_1) {
    var BillContext = (function () {
        function BillContext() {
            this.generateTestData();
        }
        BillContext.prototype.generateTestData = function () {
            var initialData = new Array();
            initialData.push(new Bill_1.Bill());
            this.bills = Immutable.fromJS(initialData);
        };
        return BillContext;
    })();
    exports.BillContext = BillContext;
});
//# sourceMappingURL=../src/BillContext.js.map