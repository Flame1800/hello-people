import React from "react";
import UserContentStore from "../../../../Stores/UserContentStore";
import EventCard from "../../../Event/Card/EventCard";
import { observer } from "mobx-react-lite";

const UserEvents = () => {
  const { userEvents } = UserContentStore;

  return (
    <>
      {userEvents.map((event) => {
        return <EventCard key={event.id} event={event} />;
      })}
    </>
  );
};

export default observer(UserEvents);
