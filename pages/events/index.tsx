import React from "react";
import API from "../../src/Helpers/API";
import { observer } from "mobx-react-lite";
import EventsPage from "../../src/Components/Event/EventsPage";
import { CITY } from "../../src/Constants/city";
import SeoHead from "../../src/Components/Layouts/SeoHead";

type PropsType = {
  events: Array<any>;
  categories: Array<any>;
};

const Events = ({ events, categories }: PropsType) => {
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
