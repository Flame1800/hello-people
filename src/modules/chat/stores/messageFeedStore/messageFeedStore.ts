import { makeAutoObservable } from 'mobx';

class messageFeedStore {

    onScrollToggle: boolean = false;

    goBottomToggle: boolean = false;

    constructor() {
        makeAutoObservable(this,);
    }

    goBottom = () => {
        this.goBottomToggle = !this.goBottomToggle;
    };

    onScroll = () => {
        this.onScrollToggle = !this.onScrollToggle;
    };
}

export default new messageFeedStore();