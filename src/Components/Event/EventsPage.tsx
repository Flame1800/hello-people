import React from 'react';
import eventsStore from "../../Stores/eventsStore";
import HeaderServicesPage from "../Common/HeaderServicesPage";
import Categories from "../Common/SmartComponets/Categories";
import mockCategories from "../../Mocks/mockCategories";
import Switch from "./Switch";
import CatalogCardsEvents from "./CatalogCardsEvents";
import {observer} from "mobx-react-lite";

type PropsType = {
    events: any
}

const EventsPage: React.FC<PropsType> = ({events}) => {
    const {mode, pastEvents, newEvents, setPastEvents, setNewEvents} = eventsStore
    const currEvents = mode === 'new' ? newEvents : pastEvents

    React.useEffect(() => {
        setPastEvents(events)
        setNewEvents(events)
    }, [])

    return (
        <>
            <HeaderServicesPage link='/events/add'>АФИША</HeaderServicesPage>
            <Categories categories={mockCategories}/>
            <Switch/>
            <CatalogCardsEvents events={currEvents}/>
        </>
    );
};

export default observer(EventsPage);