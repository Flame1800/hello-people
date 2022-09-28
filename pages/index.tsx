import React from "react";
import { observer } from "mobx-react-lite";
import API from "../src/Helpers/API";
import EventsPage from "../src/Components/Event/EventsPage";

type PropsTypeIndex = {
  events: Array<EventType>;
  categories: Array<Category>;
};

const Events = ({ events, categories }: PropsTypeIndex) => {
  return <EventsPage events={events} categories={categories} />;
};

Events.getInitialProps = async () => {
  const eventsRequest = await API.getEvents();
  const categories = await API.getEventCategories();

  return { events: eventsRequest.data.data, categories: categories.data.data };
};

export default observer(Events);
