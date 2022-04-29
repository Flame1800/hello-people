import React from 'react';
import HeaderServicesPage from "../../src/Components/Common/HeaderServicesPage";
import Categories from "../../src/Components/Common/SmartComponets/Categories";
import mockCategories from "../../src/Mocks/mockCategories";
import CatalogCardsEvents from "../../src/Components/Event/CatalogCardsEvents";
import styled from "styled-components";
import API from "../../src/Libs/API";
import eventsStore from "../../src/Stores/eventsStore";
import {observer} from "mobx-react-lite";
import Switch from "../../src/Components/Event/Switch";
import {NextPage} from "next";

type PropsType = {
    events: Array<any>
}

const Events: NextPage<PropsType> = ({events}) => {
    const {mode, pastEvents, newEvents, setPastEvents, setNewEvents} = eventsStore
    const currEvents = mode === 'new' ? newEvents : pastEvents

    React.useEffect(() => {
        setPastEvents(events)
        setNewEvents(events)
    }, [])

    return (
        <Wrapper>
            <HeaderServicesPage link='/events/add'>АФИША</HeaderServicesPage>
            <Categories categories={mockCategories}/>
            <Switch/>
            <CatalogCardsEvents events={currEvents}/>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  padding: 50px 0;
`

Events.getInitialProps = async () => {
    const eventsRequest = await API.getEvents()

    return {events: eventsRequest.data.data}
}


export default observer(Events);