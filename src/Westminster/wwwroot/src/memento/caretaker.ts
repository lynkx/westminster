/// <reference path="../../jspm_packages/npm/immutable@3.7.5/dist/immutable.d.ts" />
//import Immutable = require('immutable');
import * as Immutable from "immutable";

export module Memento {
    export class CareTaker<T> {
        public undoStack = new Array<T>();
        public redoStack = new Array<T>();
        public state: T;


        constructor(defaultState?: T) {
            this.state = Immutable.fromJS(defaultState);//defaultState;
            
        }

        public undo():void {
            if (this.undoReady()) {
                var memento = this.undoStack.pop();
                this.redoStack.push(this.state);
                this.change(memento);
            }
        }

        public redo(): void {
            if (this.redoReady()) {
                var memento = this.redoStack.pop();
                this.undoStack.push(this.state);
                this.change(memento);
            }
        }

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

        private undoReady(): boolean {
            return this.undoStack.length > 0;
        }
        get canUndo(): boolean {
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