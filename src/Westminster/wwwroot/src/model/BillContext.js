System.register(["./Bill", "./BillItem", "./Product", "Memento/caretaker", "immutable"], function(exports_1) {
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var Bill_1, BillItem_1, Product_1, caretaker_1, Immutable;
    var BillContext;
    return {
        setters:[
            function (Bill_1_1) {
                Bill_1 = Bill_1_1;
            },
            function (BillItem_1_1) {
                BillItem_1 = BillItem_1_1;
            },
            function (Product_1_1) {
                Product_1 = Product_1_1;
            },
            function (caretaker_1_1) {
                caretaker_1 = caretaker_1_1;
            },
            function (Immutable_1) {
                Immutable = Immutable_1;
            }],
        execute: function() {
            BillContext = (function (_super) {
                __extends(BillContext, _super);
                function BillContext() {
                    _super.call(this);
                    this.state = this.generateTestData();
                }
                BillContext.prototype.generateTestData = function () {
                    var initialData = new Array();
                    for (var i = 0; i < 10; i++) {
                        initialData.push(Immutable.fromJS(new Bill_1.Bill(i, new Array(new BillItem_1.BillItem(i, i, new Array(new Product_1.Product("someproduct1")))))));
                    }
                    return initialData;
                };
                BillContext.prototype.addBill = function (bill) {
                    var billIm = Immutable.fromJS(bill);
                    var newState = this.state.concat(billIm);
                    this.changeBills(newState);
                };
                BillContext.prototype.changeBills = function (bills) {
                    this.undoStack.push(this.state);
                    this.redoStack = []; //Immutable.List<Array<Bill>>();
                    this.state = bills;
                };
                return BillContext;
            })(caretaker_1.Memento.CareTaker);
            exports_1("BillContext", BillContext);
        }
    }
});
//# sourceMappingURL=BillContext.js.map