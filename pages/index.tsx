import React from "react";
import { observer } from "mobx-react-lite";
import API from "../src/Helpers/API";
import EventsPage from "../src/Components/Event/EventsPage";
import Head from "next/head";
import { CITY } from "../src/Constants/city";
import SeoHead from "../src/Components/Layouts/SeoHead";

type PropsTypeIndex = {
  events: Array<EventType>;
  categories: Array<Category>;
};

const Events = ({ events, categories }: PropsTypeIndex) => {
  return (
    <>
      <SeoHead
        title={`Афиша событий в ${CITY}е - HelloPeople`}
        description={`Куда сходить в ${CITY}е, свежие, актуальные мероприятия, вечеринки, концерты, квизы, театры и мастер-классы`}
        keywords={categories.map((cat) => cat.attributes.title).join(", ")}
      />
      <EventsPage events={events} categories={categories} />
    </>
  );
};

Events.getInitialProps = async () => {
  const eventsRequest = await API.getEvents();
  const categories = await API.getEventCategories();

  return { events: eventsRequest.data.data, categories: categories.data.data };
};

export default observer(Events);
