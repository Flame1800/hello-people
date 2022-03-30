import { UserType } from './UserType';

export type MessageType = {
    id: string,
    author: UserType,
    text: string,

    date: string,
    isRead: boolean,
}