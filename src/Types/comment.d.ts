type CommentEntity = {
  id: number;
  attributes: {
    content: string;
    innerComments: { data: CommentEntity[] | null };
    party?: { data: EventEntity | null };
    place?: { data: any };
    post?: { data: null };
    rate: null;
    replyToComment: { data: CommentEntity | null };
    createdAt: string;
    updatedAt: string;
    user: { data: User };
  };
};
