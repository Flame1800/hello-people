type CommentEntity = {
  id: number;
  attributes: CommentAttributes;
};

type CommentAttributes = {
  content: string;
  innerComments?: { data: Array<Comment> | null };
  party?: { data: EventEntity | null };
  place?: { data: any };
  post?: { data: null };
  rate?: number | null;
  replyToComment?: { data: Comment | null };
  createdAt?: string | undefined;
  updatedAt?: string | undefined;
  user: { data: User };
};
