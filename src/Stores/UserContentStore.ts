import { makeAutoObservable } from "mobx";

class UserContentStore {
  userPlaces: PlaceType[] | [] = [];
  userEvents: EventType[] | [] = [];
  userMeets: MeetType[] | [] = [];

  constructor() {
    makeAutoObservable(this);
  }

  setUserPlaces = (places: PlaceType[]) => {
    this.userPlaces = places;
  };

  setUserEvents = (events: EventType[]) => {
    this.userEvents = events;
  };

  setUserMeets = (meets: MeetType[]) => {
    this.userMeets = meets;
  };
}

export default new UserContentStore();
