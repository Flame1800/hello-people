type QuestionType = {
  id: number;
  attributes: {
    title: string;
    description: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    answers: { data: CommentEntity[] };
    author: { data: User };
  };
};
