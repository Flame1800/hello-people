import {makeAutoObservable} from 'mobx';

class entryFieldStore {
    message: string = '';

    searchText: string = '';

    constructor() {
        makeAutoObservable(this);
    }

    getMessage = () => this.message;

    setMessage = (newMessage: string) => {
        this.message = newMessage;
    };

    getSearchText = () => this.searchText;

    setSearchText = (text: string) => {
        this.searchText = text;
    };

}

export default new entryFieldStore();