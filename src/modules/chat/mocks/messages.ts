import { userPetr, userIvan } from "./users";
import { MessageType } from "../models/Message";

export const messagesMock: MessageType[] = [
  {
    id: 1,
    chatId: 1,
    author: userIvan,
    text: "Привет!",
    date: "19.03.2022 18:01",
    isRead: true,
  },
  {
    id: 2,
    chatId: 1,
    author: userPetr,
    text: "Здарова!",
    date: "19.03.2022 18:02",
    isRead: true,
  },
  {
    id: 3,
    chatId: 1,
    author: userIvan,
    text: "Как оно?",
    date: "18:03",
    isRead: true,
  },
  {
    id: 4,
    chatId: 1,
    author: userPetr,
    text: "Нормально. Ты как?",
    date: "18:04",
    isRead: true,
  },
  {
    id: 5,
    chatId: 1,
    author: userIvan,
    text: "Да по-тихоньку",
    date: "18:05",
    isRead: false,
  },
];
