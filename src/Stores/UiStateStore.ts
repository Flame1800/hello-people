import {makeAutoObservable} from "mobx";


class UiStateStore {
    authModal: Boolean = false
    usersListModal: Boolean = false
    createEventListModal: Boolean = false

    constructor() {
        makeAutoObservable(this)
    }

    toggleAuthModal = () => {
        this.authModal = !this.authModal
    }

    toggleUsersListModal = () => {
        this.usersListModal = !this.usersListModal
    }

    toggleCreateEventListModal = () => {
        this.createEventListModal = !this.createEventListModal
    }
}

export default new UiStateStore()