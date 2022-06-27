import {makeAutoObservable, toJS} from "mobx";
import * as _ from 'lodash'
import {filterServicesByCategory} from "../Libs/filterEventsByCategory";

class EventsStore {
    events: Array<any> = []
    stableEvents: Array<any> = []
    mode: string = 'new'

    constructor() {
        makeAutoObservable(this)
    }

    changeMode = (mode: string) => {
        this.mode = mode
    }

    filterEventsByCategories = (activeCategories) => {
        this.events = filterServicesByCategory(this.stableEvents, activeCategories)
    }


    setEvents = (events: any) => {
        this.events = events
        this.stableEvents = events
    }

    getPastEvents = () => {
        return  _.reverse(this.events.filter((event) => {
            return new Date().getTime() > new Date(event.attributes.dateStart).getTime()
        }))
    }

    getNewEvents = () => {
        return  _.reverse(this.events.filter((event) => {
            return new Date().getTime() < new Date(event.attributes.dateStart).getTime()
        }))
    }
}

export default new EventsStore()