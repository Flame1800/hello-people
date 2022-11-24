import axios from "axios";
import * as qs from "querystring";
import getJwtToken from "./getJwtToken";

const API: any = {};

const server = axios.create({
  baseURL: `${process.env.SERVER_URL_PROD}/api`,
  timeout: 3000,
});

API.url = process.env.SERVER_URL_PROD;

// EventsQuery
const queryEventsOptions = {
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
};
const queryGetEvents = qs.stringify(queryEventsOptions);

// Meets
API.getMeets = () => server(`/meets?populate=*&sort[0]=createdAt:desc`);
API.getMeet = (id: number) =>
  server(`/meets/${id}?populate=*&sort[0]=createdAt:desc`);
API.addMeet = (meet: MeetType) =>
  server.post(`/meets?populate=*`, meet, getJwtToken());
API.deleteMeet = (id: number) => server.delete(`/meets/${id}`, getJwtToken());
API.getUserMeets = (id: number) =>
  server(
    `/meets?populate=*&sort[0]=createdAt:desc&filters[author][id][$eq]=${id}`
  );

// Questions
API.getQuestions = () => server(`/questions?populate=*&sort[0]=createdAt:desc`);
API.getQuestion = (id: number) =>
  server(`/questions/${id}?populate=*&sort[0]=createdAt:desc`);
API.addQuestion = (question: QuestionType) =>
  server.post(`/questions?populate=*`, question, getJwtToken());
API.deleteQuestion = (id: number) =>
  server.delete(`/questions/${id}`, getJwtToken());
API.getUserQuestions = (id: number) =>
  server(
    `/questions?populate=*&sort[0]=createdAt:desc&filters[author][id][$eq]=${id}`
  );

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
API.getEvent = (slug: string) =>
  server(`/parties?filters[slug]=${slug}&${queryGetEvents}`);
API.getEventById = (id: number) => server(`/parties/${id}?${queryGetEvents}`);
API.getUserEvents = (id: any) =>
  server(`/parties?${queryGetEvents}&filters[likes][id][$eq]=${id}`);

// Places
API.getPlaces = (length = 0) =>
  server(`/places?populate=*&pagination[start]=${length}&pagination[limit]=15`);
API.getPlace = (slug: string) =>
  server(`/places?filters[slug]=${slug}&populate=*`);
API.getPlaceById = (id: number) => server(`/places/${id}?populate=*`);
API.getUserPlaces = (id: number) =>
  server(`/places?populate=*&filters[likes][id][$eq]=${id}`);

// User
API.getUserMe = () => server(`/users/me?populate=*`, getJwtToken());

API.getUser = (id: number) => server(`/users/${id}?populate=*`);
API.updateUser = (id: number, data: any) =>
  server.put(`/users/${id}`, data, getJwtToken());
API.getUsers = () => server(`/users`);
API.getUserSubscribers = () => server(`/users?filter[subsribers][$eq]=`);

// User Auth

// Other
API.uploadFile = (data: FormData) =>
  server.post(`/upload`, data, getJwtToken());
API.deleteFile = (id: number) => server.delete(`/upload/files/${id}`);

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
    `/comments?${queryGetComments}&filters[${model}][id][$eq]=${id}&populate=*&sort[0]=createdAt:asc`
  );

API.addComment = (data: CommentEntity, token: string) => {
  return server.post(`/comments?&populate=*`, data, getJwtToken());
};

API.removeComment = (id: number, token: string) =>
  server.delete(`/comments/${id}`, getJwtToken());

export default API;
