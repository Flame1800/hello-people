type EventType = {
  id: number;
  attributes: EventAttributes;
};

type EventAttributes = {
  abbTitle: string;
  title: string;
  description: string;
  maplink: string;
  site: string;
  slug: string;
  tel: string;
  publishedAt: string;
  createdAt: string;
  dateEnd: string;
  dateStart: string;
  updatedAt: string;
  comments?: any;
  cover?: { data: Image };
  categories?: { data: Array<Category> };
  pictures?: { data: Array<Image> };
  place?: { data: PlaceType };
  likes?: { data: Array<Like> };
  tags?: any;
};
