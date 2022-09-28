import React from "react";
import eventsStore from "../../Stores/EventsStore";
import HeaderServicesPage from "../Common/HeaderServicesPage";
import Categories from "../Common/Categories";
import Switch from "./Switch";
import CatalogCardsEvents from "./CatalogCardsEvents";
import { observer } from "mobx-react-lite";
import CategoriesStore from "../../Stores/CategoriesStore";

type EventPageProps = {
  events: EventType[];
  categories: Category[];
};

const EventsPage = ({ events, categories }: EventPageProps) => {
  const { setEvents, filterEvents } = eventsStore;
  const { selectedCategories } = CategoriesStore;

  React.useEffect(() => {
    setEvents(events);
  }, []);

  React.useEffect(() => {
    filterEvents(selectedCategories);
  }, [selectedCategories]);

  return (
    <>
      <HeaderServicesPage link="/events/add">АФИША</HeaderServicesPage>
      <Categories categories={categories} />
      <Switch />
      <CatalogCardsEvents />
    </>
  );
};

export default observer(EventsPage);
