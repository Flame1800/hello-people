type User = {
  avatar: string;
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
