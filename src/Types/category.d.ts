type Category = {
  id: string;
  attributes: CategoryAttributes;
};

type CategoryAttributes = {
  createdAt: Date;
  publishedAt: Date;
  slug: string;
  title: string;
  type: string;
  updatedAt: Date;
};
