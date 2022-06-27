import {makeAutoObservable} from "mobx";
import {filterServicesByCategory} from "../Libs/filterEventsByCategory";

class PlacesStore {
    places: any = []
    stablePlaces: any = []

    constructor() {
        makeAutoObservable(this)
    }

    filterPlacesByCategories = (activeCategories: any) => {
        filterServicesByCategory(this.stablePlaces, activeCategories)
    }

    setPlaces = (places: Array<any>) => {
        this.places = places
        this.stablePlaces = places
    }
}

export default new PlacesStore()