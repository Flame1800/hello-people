import { makeAutoObservable } from "mobx";
import { destroyCookie } from "nookies";
import API from "../Helpers/API";
import { UserType } from "../modules/chat/models/UserType";
import Places from "../../pages/places";

class UserStore {
  user: User | null = null;
  users: User[] | [] = [];
  loading: boolean = true;

  constructor() {
    makeAutoObservable(this);
  }

  setUserByToken = async () => {
    this.loading = true;

    try {
      const currUser = await API.getUserMe();
      const currUserPopulate = await API.getUser(currUser.data.id);

      this.user = currUserPopulate.data;
    } catch (e) {
      console.error(e);
      this.loading = false;
    } finally {
      this.loading = false;
    }
  };

  setUserById = async (id: number) => {
    const currUserPopulate = await API.getUser(id);
    this.user = currUserPopulate.data;
  };

  updateUser = (user: User) => {
    this.user = user;
  };

  logout = () => {
    destroyCookie(null, "jwt");
    this.user = null;
  };

  subscribe = async (id: number) => {
    if (!this.user) return;

    await API.updateUser(this.user?.id, {
      friends: [...this.user.friends, id],
    });

    return this.setUserById(this.user.id);
  };

  unsubscribe = async (id: number) => {
    if (!this.user) return;

    const newFriendList = this.user.friends.filter(
      (user: User) => user.id !== id
    );

    await API.updateUser(this.user.id, {
      friends: newFriendList,
    });

    return this.setUserById(this.user.id);
  };

  setUserSubscribers = (users: any) => {
    this.users = users;
  };
}

export default new UserStore();
