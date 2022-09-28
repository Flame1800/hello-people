import { makeAutoObservable } from "mobx";
import API from "../Helpers/API";
import UserStore from "./UserStore";
import { parseCookies } from "nookies";
import innerComentsList from "../Components/Comments/InnerComentsList";

class CommentsStore {
  comments: Array<any> = [];

  // party - для ивентов
  // place - для мест
  // post - для постов
  model: string = "";

  // id обьекта которому принадлежат коментарии
  idEntity: number = 0;

  constructor() {
    makeAutoObservable(this);
  }

  addComment = async (comment: CommentAttributes) => {
    const cookie = parseCookies();

    if (!cookie.jwt) {
      return null;
    }

    const newCommentResponse = await API.addComment(
      { data: comment },
      cookie.jwt
    );
    this.comments = [...this.comments, newCommentResponse.data.data];
  };

  setComments = async (id: number, model: string) => {
    const dataComments = await API.getComments(id, model);
    this.comments = dataComments.data.data;
    this.idEntity = id;
  };

  setModel = (model: string) => {
    this.model = model;
  };
}

export default new CommentsStore();
