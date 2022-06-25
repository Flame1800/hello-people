import {makeAutoObservable, toJS} from "mobx";
import * as _ from 'lodash'

class EventsStore {
    pastEvents: Array<any> = []
    newEvents: Array<any> = []

    stablePastEvents: Array<any> = []
    stableNewEvents: Array<any> = []

    mode: string = 'new'

    constructor() {
        makeAutoObservable(this)
    }

    changeMode = (mode: string) => {
        this.mode = mode
    }

    filterEventsByCategories = (activeCategories) => {
        const filterOneEvent = (categories: any) => {
            const neededCategories = categories.filter(category => {
                return activeCategories.map(({id}) => id).includes(category.id)
            })

            return neededCategories.length !== 0
        }

        const filterEvents = events => {
            return events.filter(event => filterOneEvent(event.attributes.categories.data))
        }

        // тут должны быть основные ивенты, самые начальные
        this.newEvents = filterEvents(this.stableNewEvents)
        this.pastEvents = filterEvents(this.stablePastEvents)
    }

    setPastEvents = (events: Array<any>) => {
        const entries =  _.reverse(events.filter((event) => {
            return new Date().getTime() > new Date(event.attributes.dateStart).getTime()
        }))

        this.pastEvents = entries
        this.stablePastEvents = entries
    }

    setNewEvents = (events: Array<any>) => {
        const entries =  _.reverse(events.filter((event) => {
            return new Date().getTime() < new Date(event.attributes.dateStart).getTime()
        }))

        this.newEvents = entries
        this.stableNewEvents= entries
    }
}

export default new EventsStore()