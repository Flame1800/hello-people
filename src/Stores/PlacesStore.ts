import { makeAutoObservable, toJS } from "mobx";
import { filterServicesByCategory } from "../Helpers/filterEventsByCategory";
import categories from "../Components/Common/Categories";

class PlacesStore {
  places: any = [];

  constructor() {
    makeAutoObservable(this);
  }

  filterPlaces = (activeCategories: any) => {
    const query = qs.stringify(
      {
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
        filters: {
          $and: activeCategories.map(({ id }) => {
            return {
              categories: {
                id: {
                  $eq: id,
                },
              },
            };
          }),
        },
      },
      {
        encodeValuesOnly: true, // prettify URL
      }
    );
  };

  setPlaces = (places: Array<any>) => {
    this.places = places;
  };
}

export default new PlacesStore();
