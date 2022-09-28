import { makeAutoObservable } from "mobx";
import { CategoryType } from "../models/CategoryType";
import { DialogProps } from "../models/DialogProps";

type NewDialog = {
  category: CategoryType;
  objectIdStrapi: number;
};

class dialogsStore {
  mainData: DialogProps[] = [];
  dialogs: DialogProps[] = [];
  currentDialog: DialogProps | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  setCurrentDialog = (dialog: DialogProps | null) => {
    this.currentDialog = dialog;
  };

  clearCurrentDialog = () => {
    this.currentDialog = null;
  };

  setDialogs = (dialogs: DialogProps[]) => {
    this.dialogs = dialogs;
    this.mainData = dialogs;
  };

  filterDialogs = (category: CategoryType) => {
    if (category === "all") {
      this.dialogs = this.mainData;
      return;
    }

    this.dialogs = this.mainData.filter((d) => d.category === category);
  };

  getSearchDialogs = (category: string, search?: string) => {
    if (!search) return;
    const mappedSearch = search.toLowerCase();

    return this.dialogs.filter((dialog) =>
      dialog.abbTitle?.toLowerCase().includes(mappedSearch)
    );
  };
}

export default new dialogsStore();
