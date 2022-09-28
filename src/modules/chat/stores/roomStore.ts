import { makeAutoObservable } from "mobx";
import { MessageType } from "../models/Message";
import { UserType } from "../models/UserType";

class RoomStore {
  currentMessages: MessageType[] = [];
  chatUsers: UserType[] = [];
  onlineUsers: UserType[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  setMessages = (messages: MessageType[]) => {
    this.currentMessages = messages;
  };

  addMessage = (message: MessageType) => {
    this.currentMessages = [...this.currentMessages, message];
  };

  setChatUsers = (users: UserType[]) => {
    this.chatUsers = users;
  };

  setOnlineUsers = (users: UserType[]) => {
    this.onlineUsers = users;
  };

  addOnlineUser = (user: UserType) => {
    this.onlineUsers = [...this.onlineUsers, user];
  };

  addChatUser = (user: UserType) => {
    this.chatUsers = [...this.chatUsers, user];
  };
}

export default new RoomStore();
