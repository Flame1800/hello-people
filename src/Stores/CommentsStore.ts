import { makeAutoObservable } from "mobx";
import API from "../Helpers/API";
import { parseCookies } from "nookies";
import { newCommentType } from "../Components/Comments/CommentInput/CommentInput";

class CommentsStore {
  comments: CommentEntity[] = [];
  replies: CommentEntity[] = [];

  // party - для ивентов
  // place - для мест
  // post - для постов
  model: string = "";

  // id обьекта которому принадлежат коментарии
  idEntity: number = 0;

  constructor() {
    makeAutoObservable(this);
  }

  addComment = async (comment: newCommentType) => {
    const cookie = parseCookies();

    if (!cookie.jwt) {
      return null;
    }

    const newCommentResponse = await API.addComment(
      { data: comment },
      cookie.jwt
    );
    const newComment = newCommentResponse.data.data;

    if (comment.replyToComment) {
      this.replies = [newComment, ...this.replies];
      return;
    }

    this.comments = [newComment, ...this.comments];
  };

  removeComment = async (comment: CommentEntity) => {
    const cookie = parseCookies();

    if (!cookie.jwt) {
      return null;
    }

    await API.removeComment(comment.id, cookie.jwt);

    const isReply = comment.attributes.replyToComment.data;

    if (isReply) {
      this.replies = this.replies.filter((c) => c.id !== comment.id);
      return;
    }

    this.replies = this.replies.filter(async (reply: CommentEntity) => {
      if (reply.attributes.replyToComment.data?.id === comment.id) {
        await API.removeComment(reply.id, cookie.jwt);
        return;
      }

      return reply;
    });

    this.comments = this.comments.filter((c) => c.id !== comment.id);
  };

  setComments = async (id: number, model: string) => {
    const dataComments = await API.getComments(id, model);

    this.comments = dataComments.data.data.filter(
      (comment: CommentEntity) => !comment.attributes.replyToComment?.data
    );

    this.replies = dataComments.data.data.filter(
      (comment: CommentEntity) => comment.attributes.replyToComment?.data
    );

    this.idEntity = id;
    this.model = model;
  };
}

export default new CommentsStore();
