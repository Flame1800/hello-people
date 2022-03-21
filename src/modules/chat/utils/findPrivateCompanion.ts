import { User } from '../models/User';

export const findPrivateCompanion = (users: User[], author: User) => {
    return users.filter(user => user.id !== author.id)[0];
};