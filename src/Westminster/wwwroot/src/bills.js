var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", "model/BillContext", "model/Bill"], function (require, exports, BillContext_1, Bill_1) {
    var Bills = (function (_super) {
        __extends(Bills, _super);
        function Bills() {
            _super.apply(this, arguments);
        }
        Object.defineProperty(Bills.prototype, "bills", {
            get: function () {
                return this.state;
            },
            enumerable: true,
            configurable: true
        });
        Bills.prototype.addNewBill = function () {
            this.addBill(new Bill_1.Bill(3333, new Array()));
        };
        return Bills;
    })(BillContext_1.BillContext);
    exports.Bills = Bills;
});
//# sourceMappingURL=bills.js.map