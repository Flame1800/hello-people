import { makeAutoObservable } from "mobx";
import { UserType } from "../models/UserType";
import { Socket } from "socket.io-client";
import { CategoryType } from "../models/CategoryType";
import { DialogProps } from "../models/DialogProps";
import dialogsStore from "./dialogsStore";

type NewDialog = {
  category: CategoryType;
  objectIdStrapi: number | string;
};

class ChatStore {
  api: string = "http://localhost:3000";

  user: UserType | null = null;

  socket: Socket | undefined;

  isWidget: boolean = true;

  loading: boolean = false;

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

  setLoading = (isLoad: boolean) => {
    this.loading = isLoad;
  };

  readMessages = (messages: string[]) => {
    if (!this.user) return;

    this.socket?.emit("readMessage", {
      userId: this.user.id,
      msgIds: messages,
    });
  };

  leaveChat = () => {
    this.socket?.emit("leaveChat", {});
    dialogsStore.clearCurrentDialog();
  };

  findMyChat = (dialogs: DialogProps[], id: number | string) =>
    dialogs.filter((d) => d.id !== id).length > 0;

  deleteChat = () => {
    const { currentDialog, deleteDialog } = dialogsStore;

    if (this.socket && currentDialog) {
      this.socket.emit("removeChatFromFavorite", {
        chatId: currentDialog.chatId,
      });
      this.leaveChat();
      deleteDialog(currentDialog.id);
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

  openChat = (
    id: number | string,
    category: CategoryType,
    dialog?: DialogProps
  ) => {
    const { fetchedDialogs, setCurrentDialog } = dialogsStore;

    const isMyChat = this.findMyChat(fetchedDialogs, id);
    const chat: NewDialog = {
      category,
      objectIdStrapi: id,
    };

    if (this.socket) {
      if (dialog) {
        setCurrentDialog(dialog);
      }
      this.loading = true;

      this.socket.emit("joinChat", {
        chat,
        readOnly: !isMyChat,
      });
    }
  };
}

export default new ChatStore();
