import { makeAutoObservable } from 'mobx';

class messageFeedStore {

    goBottomToggle: boolean = false;

    constructor() {
        makeAutoObservable(this,);
    }

    goBottom = () => {
        this.goBottomToggle = !this.goBottomToggle;
    };
}

export default new messageFeedStore();