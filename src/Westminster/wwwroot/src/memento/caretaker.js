define(["require", "exports"], function (require, exports) {
    var Memento;
    (function (Memento) {
        var CareTaker = (function () {
            function CareTaker(defaultState) {
                this.undoStack = new Array();
                this.redoStack = new Array();
                this.state = defaultState;
            }
            CareTaker.prototype.undo = function () {
                if (this.undoReady()) {
                    var memento = this.undoStack.pop();
                    this.redoStack.push(JSON.stringify(this.state));
                    var undoed = JSON.parse(memento);
                    this.change(undoed);
                    return undoed;
                }
                return null;
            };
            CareTaker.prototype.redo = function () {
                if (this.redoReady()) {
                    var memento = this.redoStack.pop();
                    this.undoStack.push(JSON.stringify(this.state));
                    var redoed = JSON.parse(memento);
                    this.change(redoed);
                    return redoed;
                }
                return null;
            };
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
    })(Memento = exports.Memento || (exports.Memento = {}));
});
//# sourceMappingURL=caretaker.js.map