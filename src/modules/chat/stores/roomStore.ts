import { makeAutoObservable } from "mobx";
import { MessageType } from "../models/Message";
import { UserType } from "../models/UserType";
import { DateTime } from "luxon";

const normalizeDate = (date: string) => {
  const dt = DateTime.fromISO(date);
  return dt.setLocale("ru").toLocaleString({
    month: "long",
    day: "numeric",
    year: "numeric",
  });
};

class RoomStore {
  currentMessages: MessageType[] = [];
  chatUsers: UserType[] = [];
  onlineUsers: UserType[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  setMessages = (messages: MessageType[]) => {
    this.currentMessages = messages
      .slice()
      .sort((a: MessageType, b: MessageType) => {
        // @ts-ignore
        return new Date(a.date) - new Date(b.date);
      })
      .map((message) => ({
        ...message,
        dateString: normalizeDate(message.date),
      }));
  };

  addMessage = (message: MessageType) => {
    const newMessage = { ...message, dateString: normalizeDate(message.date) };
    this.currentMessages = [...this.currentMessages, newMessage];
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
