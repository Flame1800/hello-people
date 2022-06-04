import {makeAutoObservable} from "mobx";
import {destroyCookie} from "nookies";
import API from "../Libs/API";

class UserStore {
    user: any = null
    users: any = {}

    constructor() {
        makeAutoObservable(this)
    }

    setUserByToken = async (jwt: string) => {
        const currUser = await API.getUserMe(jwt)
        const currUserPopulate = await API.getUser(currUser.data.id)

        this.user = currUserPopulate.data
    }

    setUserById = async (id: number) => {
        const currUserPopulate = await API.getUser(id)
        this.user = currUserPopulate.data
    }


    logout = () => {
        destroyCookie(null, 'jwt')
        this.user = null
    }

    subscribe = async (id: number) => {
        await API.updateUser(this.user.id, {
            friends: [...this.user.friends, id]
        })

        return this.setUserById(this.user.id)
    }

    unsubscribe = async (id: number) => {
        const newFriendList = this.user.friends.filter((user) => user.id !== id)

        await API.updateUser(this.user.id, {
            friends: newFriendList
        })

        return this.setUserById(this.user.id)
    }

    setUserSubscribers = (users) => {
        this.users = users
    }
}

export default new UserStore()