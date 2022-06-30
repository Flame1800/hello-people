import {makeAutoObservable, toJS} from "mobx";
import {filterServicesByCategory} from "../Libs/filterEventsByCategory";

class PlacesStore {
    places: any = []
    stablePlaces: any = []

    constructor() {
        makeAutoObservable(this)
    }



    setPlaces = (places: Array<any>) => {
        this.places = places
        this.stablePlaces = places
    }
}

export default new PlacesStore()