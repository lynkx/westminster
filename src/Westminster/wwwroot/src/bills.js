System.register(["model/BillContext", "model/Bill"], function(exports_1) {
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var BillContext_1, Bill_1;
    var Bills;
    return {
        setters:[
            function (BillContext_1_1) {
                BillContext_1 = BillContext_1_1;
            },
            function (Bill_1_1) {
                Bill_1 = Bill_1_1;
            }],
        execute: function() {
            Bills = (function (_super) {
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
            exports_1("Bills", Bills);
        }
    }
});
//# sourceMappingURL=bills.js.map