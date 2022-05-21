import {makeAutoObservable} from "mobx";
import {destroyCookie} from "nookies";

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
}

export default new UserStore()