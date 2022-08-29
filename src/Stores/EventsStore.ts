import { makeAutoObservable, toJS } from "mobx";
import * as _ from "lodash";

import qs from "qs";
import axios from "axios";

class EventsStore {
  events: Array<EventEntity> = [];
  mode: string = "new";
  loading: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  changeMode = (mode: string) => {
    this.mode = mode;
  };

  filterEvents = async (activeCategories: Array<Category>) => {
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
          $or: activeCategories.map(({ id }) => {
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

    try {
      this.loading = true;
      const newEvents = await axios(
        `${process.env.SERVER_URL_PROD}/api/parties?${query}`
      );
      this.events = newEvents.data.data;
    } catch (e) {
      console.error(e);
    } finally {
      this.loading = false;
    }
  };

  setEvents = (events: Array<EventEntity>) => {
    this.events = events;
  };

  getPastEvents = () => {
    return _.reverse(
      this.events.filter((event) => {
        return (
          new Date().getTime() > new Date(event.attributes.dateStart).getTime()
        );
      })
    );
  };

  getNewEvents = () => {
    return _.reverse(
      this.events.filter((event) => {
        return (
          new Date().getTime() < new Date(event.attributes.dateStart).getTime()
        );
      })
    );
  };
}

export default new EventsStore();
