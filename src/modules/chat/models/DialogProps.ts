import { CategoryType } from "./CategoryType";

export type DialogProps = {
  id: number | string;
  chatId: number;
  category: CategoryType;
  cover?: string;
  abbTitle?: string;
  theme?: string;
};
