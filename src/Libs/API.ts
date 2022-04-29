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
API.getPlaces = () => server('/places?populate=*')

API.getPlace = (id: number) => server(`/places/${id}?populate=*`)


export default API