module Memento {
    export class CareTaker<T> {
        mementos: Array<KeyValuePair<T>> = new Array<KeyValuePair<T>>();

        public addMemento(key: string, memento: T): void {
            this.mementos[key] = memento;
        }

        public getMemento(key: string) {
            return this.mementos[key];
        }
    }

    export class UndoRedoManager<T> {
        public undoStack: Array<T> = new Array<T>();
    }

    

    export interface KeyValuePair<V> {
        [index: string]: V
    }

    export interface IHydrate {

    }
}