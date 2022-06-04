import {makeAutoObservable} from "mobx";

class CommentsStore {
    comments: Array<any> = []
    mode: string = ''

    constructor() {
        makeAutoObservable(this)
    }

    removeComment = (id: string) => {
        this.comments = this.comments.filter(item => id !== item.id)
    }

    setComment = (comment: Array<any>) => {
        this.comments = [comment, ...this.comments]
    }

    setComments = (comments: Array<any>) => {
        this.comments = comments
    }

    setMode = (mode: string) => {
        this.mode = mode
    }
}

export default new CommentsStore()