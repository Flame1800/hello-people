import {makeAutoObservable} from "mobx";
import {destroyCookie} from "nookies";
import API from "../Libs/API";

class UserStore {
    user: any = null

    constructor() {
        makeAutoObservable(this)
    }

    setUser = (user: any) => {
        this.user = user
    }

    logout = () => {
        destroyCookie(null, 'jwt')
        this.user = null
    }

    addFriend = async (id: number) => {
        await API.updateUser(this.user.id, {
            friends: [...this.user.friends, id]
        })
    }

    deleteFriend = async (id: number) => {
        const newFriendList = this.user.friends.filter((user) => user.id !== id)

        await API.updateUser(this.user.id, {
            friends: newFriendList
        })
    }
}

export default new UserStore()