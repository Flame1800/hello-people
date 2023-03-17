import React from "react";
import { observer } from "mobx-react-lite";
import API from "../src/Helpers/API";
import EventsPage from "../src/Components/Event/EventsPage";
import { CITY } from "../src/Constants/city";
import { NextSeo } from "next-seo";

type PropsTypeIndex = {
  events: Array<EventType>;
  categories: Array<Category>;
};

const HomePage = ({ events, categories }: PropsTypeIndex) => {
  return (
    <>
      <NextSeo
        title={`Афиша событий в ${CITY}е - HelloPeople`}
        description={`Куда сходить в ${CITY}е, свежие, актуальные мероприятия, вечеринки, концерты, квизы, театры и мастер-классы`}
      />
      <EventsPage events={events} categories={categories} />
    </>
  );
};

HomePage.getInitialProps = async () => {
  const eventsRequest = await API.getEvents();
  const categories = await API.getEventCategories();

  return { events: eventsRequest.data.data, categories: categories.data.data };
};

export default observer(HomePage);
