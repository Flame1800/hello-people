import { makeAutoObservable, toJS } from "mobx";
import { CategoryType } from "../models/CategoryType";
import { DialogProps } from "../models/DialogProps";
import dialog from "../components/RoomList/Dialog";

class dialogsStore {
  fetchedDialogs: DialogProps[] = [];
  dialogs: DialogProps[] = [];
  currentDialog: DialogProps | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  resetCountMessages = (dialogId: number) => {
    this.fetchedDialogs = this.fetchedDialogs.map((dialog) => {
      if (dialog.id !== dialogId) {
        return dialog;
      }

      dialog.countNewMessages = 0;
      return dialog;
    });
  };

  increaseCountMessages = (dialogId: number) => {
    const newDialogs = this.fetchedDialogs.map((currDialog) => {
      if (
        currDialog.id === dialogId &&
        currDialog.countNewMessages !== undefined
      ) {
        currDialog.countNewMessages += 1;
        return currDialog;
      }

      return currDialog;
    });

    this.fetchedDialogs = newDialogs;
    this.dialogs = newDialogs;
  };

  deleteDialog = (dialogId: number) => {
    const newList = this.fetchedDialogs.filter(
      (dialog: DialogProps) => dialog.id !== dialogId
    );

    this.fetchedDialogs = newList;
    this.dialogs = newList;
  };

  addDialog = (dialog: DialogProps) => {
    const newList = [
      { ...dialog, countNewMessages: 1 },
      ...this.fetchedDialogs,
    ];
    this.fetchedDialogs = newList;
    this.dialogs = newList;
  };

  setCurrentDialog = (dialog: DialogProps | null) => {
    this.currentDialog = dialog;
  };

  clearCurrentDialog = () => {
    this.currentDialog = null;
  };

  setDialogs = (dialogs: DialogProps[]) => {
    this.dialogs = dialogs;
    this.fetchedDialogs = dialogs;
  };

  filterDialogs = (category: CategoryType) => {
    if (category === "all") {
      this.dialogs = this.fetchedDialogs;
      return;
    }

    this.dialogs = this.fetchedDialogs.filter((d) => d.category === category);
  };

  getSearchDialogs = (search: string) => {
    if (search.length === 0) {
      this.dialogs = this.fetchedDialogs;
      return;
    }
    const mappedSearch = search.toLowerCase();

    this.dialogs = this.fetchedDialogs.filter((dialog) =>
      dialog.abbTitle?.toLowerCase().includes(mappedSearch)
    );
  };
}

export default new dialogsStore();
