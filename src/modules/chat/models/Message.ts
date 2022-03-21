import { User } from './User';

export type MessageType = {
    id: string,
    author: User,
    text: string,

    date: string,
    isRead: boolean,
}