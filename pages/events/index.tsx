import React from 'react';
import API from "../../src/Libs/API";
import {observer} from "mobx-react-lite";
import {NextPage} from "next";
import EventPage from "./[id]";
import EventsPage from "../../src/Components/Event/EventsPage";

type PropsType = {
    events: Array<any>
}

const Events: NextPage<PropsType> = ({events}) => {
    return <EventsPage events={events} />
};


Events.getInitialProps = async () => {
    const eventsRequest = await API.getEvents()

    return {events: eventsRequest.data.data}
}


export default observer(Events);