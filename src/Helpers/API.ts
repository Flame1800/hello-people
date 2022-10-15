import axios from "axios";
import * as qs from "querystring";

const API: any = {};

const server = axios.create({
  baseURL: `${process.env.SERVER_URL_PROD}/api`,
  timeout: 3000,
});

API.url = process.env.SERVER_URL_PROD;

// Events
const queryGetEvents = qs.stringify({
  populate: [
    "categories",
    "comments",
    "tags",
    "cover",
    "pictures",
    "place.pictures",
    "place.cover",
    "likes",
  ],
  sort: ["dateStart:desc"],
});

// Meets
API.getMeets = () => server(`/meets?populate=*&sort[0]=createdAt:desc`);
API.addMeet = (meet: MeetType) => server.post(`/meets?populate=*`, meet);
API.deleteMeet = (id: number) => server.delete(`/meets/${id}`);

// Posts

API.getPosts = () => server("/posts?populate=*");
API.getActualPosts = () =>
  server("/posts?populate=*&filters[actual][$eq]=true");
API.getPost = (slug: string) =>
  server(`/posts/?filters[slug][$eq]=${slug}&populate=*`);
API.addPost = () => server.post(`/posts?populate=*`);
API.deletePost = (id: number) => server.delete(`/posts/${id}`);

// Categories
API.getEventCategories = () => server(`/categories?filters[type][$eq]=party`);
API.getPlaceCategories = () => server(`/categories?filters[type][$eq]=service`);

// Events
API.getEvents = () => server(`/parties?${queryGetEvents}`);
API.getEvent = (id: number) => server(`/parties/${id}?${queryGetEvents}`);

// Places
API.getPlaces = (length = 0) =>
  server(`/places?populate=*&pagination[start]=${length}&pagination[limit]=15`);
API.getPlace = (id: number) => server(`/places/${id}?populate=*`);

// User
API.getUserMe = (token: string) =>
  server(`/users/me?populate=*`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

API.getUser = (id: number) => server(`/users/${id}?populate=*`);
API.updateUser = (id: number, data: any) => server.put(`/users/${id}`, data);
API.getUsers = () => server(`/users`);
API.getUserSubscribers = () => server(`/users?filter[subsribers][$eq]=`);

// User Auth

// Other
API.uploadFile = (data: any) => server.post(`/upload`, data);

// Comments
const queryGetComments = qs.stringify({
  populate: [
    "party",
    "place",
    "post",
    "innerComments.user",
    "replyToComment",
    "user",
  ],
});

API.getComments = (id: number, model: string) =>
  server(
    `/comments?${queryGetComments}&filters[${model}][id][$eq]=${id}&populate=*&sort[0]=createdAt:desc`
  );

API.addComment = (data: CommentEntity, token: string) =>
  server.post(`/comments?&populate=*`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

API.removeComment = (id: number, token: string) =>
  server.delete(`/comments/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export default API;
