import { CategoryType } from "./CategoryType";

export type DialogProps = {
  id: number;
  objectId: string;
  category: CategoryType;
  cover?: string;
  abbTitle?: string;
  theme?: string;
  lastMsgTime: number;
  countNewMessages?: number;
  cover_partner: string;
  abbTitle_partner: string;
};
