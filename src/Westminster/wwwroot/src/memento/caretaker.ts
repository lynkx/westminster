export module Memento {
    export class CareTaker<T> {
        public undoStack = new Array<string>();
        public redoStack = new Array<string>();
        public state: T;

        constructor(defaultState?: T) {
            this.state = defaultState;
        }

        

        public undo(): T {
            if (this.undoReady()) {
                var memento = this.undoStack.pop();
                this.redoStack.push(JSON.stringify(this.state));
                var undoed = JSON.parse(memento);
                this.change(undoed);
                return undoed;
            }
            return null;
        }

        public redo(): T {
            if (this.redoReady()) {
                var memento = this.redoStack.pop();
                this.undoStack.push(JSON.stringify(this.state));
                var redoed = JSON.parse(memento);
                this.change(redoed);
                return redoed;
            }
            return null;
        }
        
        private undoReady() :boolean {
            return this.undoStack.length > 0;
        }
        get canUndo() :boolean {
            return this.undoReady();
        }

        private redoReady(): boolean {
            return this.redoStack.length > 0;
        }
        get canRedo(): boolean {
            return this.redoReady();
        }

        private change(state: T) {
            
            this.state = state;
        }
    }
}