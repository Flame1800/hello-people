import {makeAutoObservable} from "mobx";
import * as _ from 'lodash'

class EventsStore {
    pastEvents: Array<any> = []
    newEvents: Array<any> = []
    mode: string = 'new'

    constructor() {
        makeAutoObservable(this)
    }

    changeMode = (mode: string) => {
        this.mode = mode
    }

    setPastEvents = (events: Array<any>) => {
        this.pastEvents = events.filter((event) => {
            return new Date().getTime() > new Date(event.attributes.dateStart).getTime()
        })
    }

    setNewEvents = (events: Array<any>) => {
        this.newEvents = _.reverse(events.filter((event) => {
            return new Date().getTime() < new Date(event.attributes.dateStart).getTime()
        }))
    }
}

export default new EventsStore()