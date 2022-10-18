type User = {
  avatar: string;
  cover: UserImage | null;
  blocked: Boolean;
  confirmed: Boolean;
  description: string;
  email: string;
  name: string;
  provider: string;
  username: string;
  updatedAt: Date | string;
  createdAt: Date | string;
  friends: User[];
  subscribers: User[];
  id: number;
};

type UserImage = {
  id: number;
  alternativeText: string;
  caption: string;
  createdAt: string;
  ext: string;
  formats?: any;
  hash: string;
  height: number;
  mime: string;
  name: string;
  previewUrl?: null | string;
  provider: string;
  provider_metadata?: null | string;
  size: number;
  updatedAt: string;
  url: string;
  width: number;
};

type UserInEntity = {
  id: number;
  attributes: {
    avatar: string;
    cover: UserImage | null;
    blocked: Boolean;
    confirmed: Boolean;
    description: string;
    email: string;
    name: string;
    provider: string;
    username: string;
    updatedAt: Date | string;
    createdAt: Date | string;
    friends: User[];
    subscribers: User[];
    id: number;
  };
};
