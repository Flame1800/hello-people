import { makeAutoObservable, toJS } from "mobx";
import { CategoryType } from "../models/CategoryType";
import { DialogProps } from "../models/DialogProps";
import dialog from "../components/RoomList/Dialog";

class dialogsStore {
  dialogs: DialogProps[] = [];
  currentDialog: DialogProps | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  resetCountMessages = (dialogId: number) => {
    this.dialogs = this.dialogs.map((dialog) => {
      if (dialog.id !== dialogId) {
        return dialog;
      }

      dialog.countNewMessages = 0;
      return dialog;
    });
  };

  increaseCountMessages = (dialogId: number) => {
    this.dialogs = this.dialogs.map((currDialog) => {
      if (
        currDialog.id === dialogId &&
        currDialog.countNewMessages !== undefined
      ) {
        currDialog.countNewMessages += 1;
        return currDialog;
      }

      return currDialog;
    });
  };

  deleteDialog = (dialogId: number) => {
    this.dialogs = this.dialogs.filter(
      (dialog: DialogProps) => dialog.id !== dialogId
    );
  };

  addDialog = (dialog: DialogProps) => {
    this.dialogs = [{ ...dialog, countNewMessages: 1 }, ...this.dialogs];
  };

  setCurrentDialog = (dialog: DialogProps | null) => {
    this.currentDialog = dialog;
  };

  clearCurrentDialog = () => {
    this.currentDialog = null;
  };

  setDialogs = (dialogs: DialogProps[]) => {
    this.dialogs = dialogs;
  };

  getFilterDialogs = (category: CategoryType) => {
    if (category === "all") {
      return this.dialogs;
    }
    return this.dialogs.filter((d) => d.category === category);
  };

  getSearchDialogs = (search: string) => {
    if (search.length === 0) {
      return this.dialogs;
    }
    const mappedSearch = search.toLowerCase();

    return this.dialogs.filter((dialog) =>
      dialog.abbTitle?.toLowerCase().includes(mappedSearch)
    );
  };
}

export default new dialogsStore();
