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
  publishedAt: Date;
  createdAt: Date;
  dateEnd: Date;
  dateStart: Date;
  updatedAt: Date;
  comments?: any;
  cover?: { data: Image };
  categories?: { data: Array<Category> };
  pictures?: { data: Array<Image> };
  place?: { data: Object<any> };
  likes?: { data: Array<Like> };
  tags?: any;
};
