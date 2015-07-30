export var Memento;
(function (Memento) {
    class CareTaker {
        constructor(defaultState) {
            this.undoStack = new Array();
            this.redoStack = new Array();
            this.state = defaultState;
        }
        undo() {
            if (this.undoReady()) {
                var memento = this.undoStack.pop();
                this.redoStack.push(JSON.stringify(this.state));
                var undoed = JSON.parse(memento);
                this.change(undoed);
                return undoed;
            }
            return null;
        }
        redo() {
            if (this.redoReady()) {
                var memento = this.redoStack.pop();
                this.undoStack.push(JSON.stringify(this.state));
                var redoed = JSON.parse(memento);
                this.change(redoed);
                return redoed;
            }
            return null;
        }
        undoReady() {
            return this.undoStack.length > 0;
        }
        get canUndo() {
            return this.undoReady();
        }
        redoReady() {
            return this.redoStack.length > 0;
        }
        get canRedo() {
            return this.redoReady();
        }
        change(state) {
            this.state = state;
        }
    }
    Memento.CareTaker = CareTaker;
})(Memento || (Memento = {}));
//# sourceMappingURL=caretaker.js.map