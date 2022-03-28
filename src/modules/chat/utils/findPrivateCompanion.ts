import { UserType } from '../models/UserType';

export const findPrivateCompanion = (users: UserType[], author: UserType) => {
    return users.filter(user => user.id !== author.id)[0];
};