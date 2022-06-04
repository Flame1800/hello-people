import {makeAutoObservable} from "mobx";


class UiStateStore {
    authModal: Boolean = false
    usersListModal: Boolean = false

    constructor() {
        makeAutoObservable(this)
    }

    toggleAuthModal = () => {
        this.authModal = !this.authModal
    }

    toggleUsersListModal = () => {
        this.usersListModal = !this.usersListModal
    }
}

export default new UiStateStore()