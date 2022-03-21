import { makeAutoObservable } from 'mobx';

class entryFieldStore {
    message: string = '';

    constructor() {
        makeAutoObservable(this);
    }

    getMessage = () => this.message;

    setMessage = (newMessage: string) => {
        this.message = newMessage;
    };
}

export default new entryFieldStore();