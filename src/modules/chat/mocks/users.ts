import { UserType } from "../models/UserType";

export const userIvan: UserType = {
  id: "1",
  name: "Иван Иванов",
  avatar:
    "https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg",
  lastOnline: new Date().toISOString(),
};

export const userPetr: UserType = {
  id: "2",
  name: "Пётр Ян",
  avatar:
    "https://shapka-youtube.ru/wp-content/uploads/2021/02/prikolnaya-avatarka-dlya-patsanov.jpg",
  lastOnline: new Date().toISOString(),
};

const userGena: UserType = {
  id: "3",
  name: "Гена Генадий",
  avatar: "https://cspromogame.ru//storage/upload_images/avatars/1299.jpg",
  lastOnline: new Date().toISOString(),
};
