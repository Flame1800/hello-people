import React from 'react';
import eventsStore from "../../Stores/eventsStore";
import HeaderServicesPage from "../Common/HeaderServicesPage";
import Categories from "../Common/Categories";
import mockCategories from "../../Mocks/mockCategories";
import Switch from "./Switch";
import CatalogCardsEvents from "./CatalogCardsEvents";
import {observer} from "mobx-react-lite";
import CategoriesStore from "../../Stores/CategoriesStore";

type PropsType = {
    events: any
    categories: any
}

const EventsPage: React.FC<PropsType> = ({events, categories}) => {
    const {mode, setEvents, getNewEvents, getPastEvents, filterEventsByCategories} = eventsStore
    const {selectedCategories} = CategoriesStore
    const currEvents = mode === 'new' ? getNewEvents() : getPastEvents()

    React.useEffect(() => {
        setEvents(events)
    }, [])

    React.useEffect(() => {
        if (selectedCategories.length === 0) return setEvents(events)

        filterEventsByCategories(selectedCategories)
    }, [selectedCategories])

    return (
        <>
            <HeaderServicesPage link='/events/add'>АФИША</HeaderServicesPage>
            <Categories categories={categories}/>
            <Switch/>
            <CatalogCardsEvents events={currEvents}/>
        </>
    );
};

export default observer(EventsPage);