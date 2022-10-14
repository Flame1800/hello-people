type PostType = {
  id: number;
  attributes: {
    title: string;
    slug: string;
    content: string;
    pinned: boolean;
    comments: { data: [] | CommentEntity[] };
    user: { data: User };
    createdAt: string;
    publishedAt: string;
    updatedAt: string;
  };
};
