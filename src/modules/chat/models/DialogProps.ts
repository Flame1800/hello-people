import { CategoryType } from "./CategoryType";

export type DialogProps = {
  id: string;
  chatId: number;
  category: CategoryType;
  cover?: string;
  abbTitle?: string;
  theme?: string;
  countNewMessages: number;
  cover_partner: string;
  abbTitle_partner: string;
};
