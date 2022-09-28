import { makeAutoObservable } from "mobx";

class UiStateStore {
  authModal: boolean = false;
  usersListModal: boolean = false;
  createEventListModal: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  toggleAuthModal = () => {
    this.authModal = !this.authModal;
  };

  toggleUsersListModal = () => {
    this.usersListModal = !this.usersListModal;
  };

  toggleCreateEventListModal = () => {
    this.createEventListModal = !this.createEventListModal;
  };
}

export default new UiStateStore();
