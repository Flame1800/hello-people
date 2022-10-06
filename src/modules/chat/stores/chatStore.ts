import { makeAutoObservable, toJS } from "mobx";
import { UserType } from "../models/UserType";
import { Socket } from "socket.io-client";
import { userPetr } from "../mocks/users";
import { CategoryType } from "../models/CategoryType";
import { DialogProps } from "../models/DialogProps";
import dialogsStore from "./dialogsStore";

type NewDialog = {
  category: CategoryType;
  objectIdStrapi: number;
};

class ChatStore {
  api: string = "http://localhost:3000";

  user: UserType = userPetr;

  socket: Socket | undefined;

  isWidget: boolean = true;

  constructor() {
    makeAutoObservable(this);
  }

  setScreenMode = (mode: boolean) => {
    this.isWidget = mode;
  };

  setUser = (user: UserType) => {
    this.user = user;
  };

  setSocket = (socket: Socket) => {
    this.socket = socket;
  };

  leaveChat = () => {
    this.socket?.emit("leaveChat", {});
    dialogsStore.clearCurrentDialog();
  };

  deleteChat = () => {
    const { setDialogs, dialogs, currentDialog, setCurrentDialog } =
      dialogsStore;

    if (this.socket && currentDialog) {
      this.socket.emit("removeChatFromFavorite", {
        chatId: currentDialog.chatId,
      });
      const newDialogs = dialogs.filter((d) => d.id !== currentDialog.id);

      setDialogs(newDialogs);
      setCurrentDialog(null);
    }
  };

  addChat = (dialog: DialogProps) => {
    const { setDialogs, dialogs, currentDialog } = dialogsStore;

    const chat: NewDialog = {
      category: dialog.category,
      objectIdStrapi: dialog.id,
    };

    if (this.socket && currentDialog) {
      this.socket.emit("addChatToFavorite", chat);
      this.socket.emit("joinChat", { chat, readOnly: false });
      setDialogs([...dialogs, currentDialog]);
    }
  };

  openChat = (id: number, category: CategoryType) => {
    const { fetchedDialogs } = dialogsStore;

    const isMyChat = fetchedDialogs.filter((d) => d.id === id).length > 0;
    console.log("is my Chat?", isMyChat);

    const chat: NewDialog = {
      category,
      objectIdStrapi: id,
    };

    if (this.socket) {
      this.socket.emit("joinChat", { chat, readOnly: !isMyChat });
    }
  };
}

export default new ChatStore();
