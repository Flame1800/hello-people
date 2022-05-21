import {makeAutoObservable} from "mobx";


class UiStateStore {
    authModal: Boolean = false

    constructor() {
        makeAutoObservable(this)
    }

    toggleAuthModal = (mode: Boolean) => {
        this.authModal = mode
    }
}

export default new UiStateStore()