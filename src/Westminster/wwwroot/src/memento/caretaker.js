System.register(['immutable'], function(exports_1) {
    var Immutable;
    var Memento;
    return {
        setters:[
            function (Immutable_1) {
                Immutable = Immutable_1;
            }],
        execute: function() {
            //import {List} from "immutable";
            (function (Memento) {
                var CareTaker = (function () {
                    function CareTaker(defaultState) {
                        this.undoStack = new Array();
                        this.redoStack = new Array();
                        this.state = Immutable.fromJS(defaultState); //defaultState;
                    }
                    CareTaker.prototype.undo = function () {
                        if (this.undoReady()) {
                            var memento = this.undoStack.pop();
                            this.redoStack.push(this.state);
                            this.change(memento);
                        }
                    };
                    CareTaker.prototype.redo = function () {
                        if (this.redoReady()) {
                            var memento = this.redoStack.pop();
                            this.undoStack.push(this.state);
                            this.change(memento);
                        }
                    };
                    //public undo(): T {
                    //    if (this.undoReady()) {
                    //        var memento = this.undoStack.pop();
                    //        this.redoStack.push(Immutable.fromJS(this.state));
                    //        var undoed = memento.toJS();
                    //        this.change(undoed);
                    //        return undoed;
                    //    }
                    //    return null;
                    //}
                    //public redo(): T {
                    //    if (this.redoReady()) {
                    //        var memento = this.redoStack.pop();
                    //        this.undoStack.push(Immutable.fromJS(this.state));
                    //        var redoed = memento.toJS();
                    //        this.change(redoed);
                    //        return redoed;
                    //    }
                    //    return null;
                    //}
                    CareTaker.prototype.undoReady = function () {
                        return this.undoStack.length > 0;
                    };
                    Object.defineProperty(CareTaker.prototype, "canUndo", {
                        get: function () {
                            return this.undoReady();
                        },
                        enumerable: true,
                        configurable: true
                    });
                    CareTaker.prototype.redoReady = function () {
                        return this.redoStack.length > 0;
                    };
                    Object.defineProperty(CareTaker.prototype, "canRedo", {
                        get: function () {
                            return this.redoReady();
                        },
                        enumerable: true,
                        configurable: true
                    });
                    CareTaker.prototype.change = function (state) {
                        this.state = state;
                    };
                    return CareTaker;
                })();
                Memento.CareTaker = CareTaker;
            })(Memento = Memento || (Memento = {}));
            exports_1("Memento", Memento);
        }
    }
});
//# sourceMappingURL=caretaker.js.map