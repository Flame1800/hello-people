import { UserType } from "./UserType";

export type MessageType = {
  id: number;
  text: string;
  date: string;
  to?: UserType;
  updatedAt: string;
  dateString?: string;
  isNew?: boolean;
  author: {
    avatar: string;
    id: number;
    username: string;
  };
};

export type NewMessageType = {
  chatId: number;
  author: UserType;
  text: string;
  date: Date;
  to?: UserType;
  isRead: boolean;
};
