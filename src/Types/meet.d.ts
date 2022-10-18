type MeetType = {
  id: number;
  attributes: {
    date: string;
    title: string;
    place: string;
    description: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    author: { data: User };
  };
};
