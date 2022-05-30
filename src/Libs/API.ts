import axios from "axios";
import * as qs from "querystring";

const API: any = {}

const server = axios.create({
    baseURL: `${process.env.SERVER_URL_PROD}/api`,
    timeout: 3000
})

API.url = process.env.SERVER_URL_PROD

// Events

const queryGetEvents = qs.stringify({
    populate: [
        'categories',
        'comments',
        'tags',
        'cover',
        'pictures',
        'place.pictures',
        'place.cover',
    ],
    sort: ['dateStart:desc']
});

API.getEvents = () => server(`/parties?${queryGetEvents}`)
API.getEvent = (id: number) => server(`/parties/${id}?${queryGetEvents}`)

// Places
API.getPlaces = (length = 0) => server(`/places?populate=*&pagination[start]=${length}&pagination[limit]=25`)
API.getPlace = (id: number) => server(`/places/${id}?populate=*`)

// User
API.getUserMe = (token: string) => server(`/users/me?populate=*`, {
    headers: {
        Authorization: `Bearer ${token}`
    }
})

API.getUser = (id: number) => server(`/users/${id}?populate=*`)
API.updateUser = (id: number, data: any) => server.put(`/users/${id}`, data)
API.getUsers = () => server(`/users`)

API.uploadFile = (data: any) => server.post(`/upload`, data)

// User Auth


export default API