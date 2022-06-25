import {makeAutoObservable} from "mobx";

class PlacesStore {
    places: any = []
    stablePlaces = []

    constructor() {
        makeAutoObservable(this)
    }

    filterPlacesByCategories = (activeCategories) => {
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
        this.places = filterEvents(this.stablePlaces)
    }

    setPlaces = (places: Array<any>) => {
        this.places = places
    }

}

export default new CategoriesStore()