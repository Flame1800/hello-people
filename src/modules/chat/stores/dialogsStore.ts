import { makeAutoObservable } from "mobx";
import { DialogProps } from "../models/DialogProps";
import _ from "lodash";

class dialogsStore {
  dialogs: DialogProps[] = [];
  currentDialog: DialogProps | null = null;
  sumNotifications: number = 0;

  constructor() {
    makeAutoObservable(this);
  }

  computeSumNotifications = () => {
    this.sumNotifications = this.dialogs.reduce((acc, dialog) => {
      if (!dialog?.countNewMessages) {
        return acc;
      }
      return acc + dialog.countNewMessages;
    }, 0);
  };

  resetCountMessages = (dialogId: number) => {
    this.dialogs = this.dialogs.map((dialog) => {
      if (dialog.id !== dialogId) {
        return dialog;
      }

      dialog.countNewMessages = 0;
      return dialog;
    });
    this.computeSumNotifications();
  };

  increaseCountMessages = (dialogId: number) => {
    this.dialogs = this.dialogs
      .map((currDialog) => {
        if (
          currDialog.id === dialogId &&
          currDialog.countNewMessages !== undefined
        ) {
          if (currDialog.category === "private") {
            let audio = new Audio("/sounds/bubble.mp3");
            audio.play();
          }
          currDialog.countNewMessages += 1;
          currDialog.lastMsgTime = Date.now();

          return currDialog;
        }

        return currDialog;
      })
      .sort((a, b) => {
        return b.lastMsgTime - a.lastMsgTime;
      });
    this.computeSumNotifications();
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
    this.dialogs = dialogs.sort((a, b) => {
      return b.lastMsgTime - a.lastMsgTime;
    });
    this.computeSumNotifications();
  };
}

export default new dialogsStore();
