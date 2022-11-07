import { makeAutoObservable } from "mobx";
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

  updateDialogCountMessages = (countReadMessages: number) => {
    if (countReadMessages <= 0) return;

    this.fetchedDialogs = this.fetchedDialogs.map((dialog) => {
      if (dialog.id !== this.currentDialog?.id) {
        return dialog;
      }

      dialog.countNewMessages -= countReadMessages;
      return dialog;
    });
  };

  deleteDialog = (dialogId: number | string) => {
    const newList = this.fetchedDialogs.filter(
      (dialog: DialogProps) => dialog.id !== dialogId
    );

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
