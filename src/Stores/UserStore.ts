import { makeAutoObservable } from "mobx";
import { destroyCookie } from "nookies";
import API from "../Helpers/API";
import { UserType } from "../modules/chat/models/UserType";

class UserStore {
  user: any = null;
  users: any = {};
  loading: boolean = true;

  constructor() {
    makeAutoObservable(this);
  }

  setUserByToken = async (jwt: string) => {
    this.loading = true;

    try {
      const currUser = await API.getUserMe(jwt);
      const currUserPopulate = await API.getUser(currUser.data.id);

      this.user = currUserPopulate.data;
    } catch (e) {
      console.error(e);
    } finally {
      this.loading = false;
    }
  };

  setUserById = async (id: number) => {
    const currUserPopulate = await API.getUser(id);
    this.user = currUserPopulate.data;
  };

  updateUser = (user: Object) => {
    this.user = user;
  };

  logout = () => {
    destroyCookie(null, "jwt");
    this.user = null;
  };

  subscribe = async (id: number) => {
    await API.updateUser(this.user.id, {
      friends: [...this.user.friends, id],
    });

    return this.setUserById(this.user.id);
  };

  unsubscribe = async (id: number) => {
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
