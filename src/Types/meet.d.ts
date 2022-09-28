type MeetType = {
  id: number;
  attributes: {
    place: string;
    description: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    author: { data: User };
  };
};
