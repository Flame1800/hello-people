import React from 'react';
import API from "../../src/Libs/API";
import {observer} from "mobx-react-lite";
import {NextPage} from "next";
import EventsPage from "../../src/Components/Event/EventsPage";

type PropsType = {
    events: Array<any>,
    categories: Array<any>
}

const Events: NextPage<PropsType> = ({events, categories}) => {
    return <EventsPage events={events} categories={categories} />
};


Events.getInitialProps = async () => {
    const eventsRequest = await API.getEvents()
    const categories = await API.getEventCategories()

    return {events: eventsRequest.data.data, categories: categories.data.data}
}


export default observer(Events);