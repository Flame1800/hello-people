import { UserType } from "./UserType";

export type MessageType = {
  entityId: string;
  chatId: string;
  authorId: string;
  text: string;
  date: string;
  to?: UserType;
  isNew: boolean;
  author: {
    avatar: string;
    id: number;
    username: string;
  };
};

export type NewMessageType = {
  chatId: number | string;
  author: UserType;
  text: string;
  date: Date;
  to?: UserType;
  isRead: boolean;
};
