import axios from "axios";

const API = {}

const server = axios.create({
    baseURL: 'http://185.185.69.74:1337/api',
    timeout: 3000
})

// Events
API.getEvents = () => server('/parties')

// Places
API.getPlaces = () => server('/places?populate=*')

API.getPlace = id => server(`/places/${id}?populate=*`)


export default API