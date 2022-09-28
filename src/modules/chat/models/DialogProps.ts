import { CategoryType } from "./CategoryType";

export type DialogProps = {
  id: number;
  chatId: number;
  category: CategoryType;
  cover?: string;
  abbTitle?: string;
};
