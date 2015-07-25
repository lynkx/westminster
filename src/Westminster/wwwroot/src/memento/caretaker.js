var Memento;
(function (Memento) {
    var CareTaker = (function () {
        function CareTaker() {
            this.mementos = new Array();
        }
        CareTaker.prototype.addMemento = function (key, memento) {
            this.mementos[key] = memento;
        };
        CareTaker.prototype.getMemento = function (key) {
            return this.mementos[key];
        };
        return CareTaker;
    })();
    Memento.CareTaker = CareTaker;
    var UndoRedoManager = (function () {
        function UndoRedoManager() {
            this.undoStack = new Array();
        }
        return UndoRedoManager;
    })();
    Memento.UndoRedoManager = UndoRedoManager;
})(Memento || (Memento = {}));
//# sourceMappingURL=caretaker.js.map