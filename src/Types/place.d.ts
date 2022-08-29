type PlaceType = {
  id: number;
  attributes: PlaceAttributes;
};

type PlaceAttributes = {
  abbTitle: string;
  title: string;
  description: string;
  maplink: string;
  operatingMode: string;
  location: string;
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
  parties?: { data: Object<any> };
  likes?: { data: Array<LikeType> };
  tags?: any;
};
