import {makeAutoObservable} from "mobx";
import API from "../Libs/API";
import UserStore from "./UserStore";
import {parseCookies} from "nookies";

class CommentsStore {
    comments: Array<any> = []

    // party - для ивентов
    // place - для мест
    // post - для мест
    model: string = ''

    // id обьекта которому принадлежат коментарии
    idEntity: number = 0

    constructor() {
        makeAutoObservable(this)
    }

    removeComment = async (id: string) => {
        const cookie = parseCookies()

        if (!cookie.jwt) {
            return null
        }

        await API.removeComment(id, cookie.jwt)
        this.comments = this.comments.filter(comment => comment.id !== id)
    }

    addComment = async (comment: Array<any>) => {

        const cookie = parseCookies()

        if (!cookie.jwt) {
            return null
        }

        const newCommentResponse = await API.addComment(comment, cookie.jwt)
        this.comments = [...this.comments, newCommentResponse.data.data]
    }

    setComments = async (id: number, model: string) => {
        const dataComments = await API.getComments(id, model)
        this.comments = dataComments.data.data
        this.idEntity = id
    }

    setModel = (model: string) => {
        this.model = model
    }
}

export default new CommentsStore()