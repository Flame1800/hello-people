import React from 'react';
import HeaderServicesPage from "../../src/Components/Common/HeaderServicesPage";
import Categories from "../../src/Components/Common/SmartComponets/Categories";
import mockCategories from "../../src/Mocks/mockCategories";
import CatalogCards from "../../src/Components/Event/CatalogCards";
import styled from "styled-components";
import API from "../../src/Libs/API";


const Events = ({events}) => {
    console.log(events)
    return (
        <Wrapper>
            <HeaderServicesPage link='/events/add'>АФИША</HeaderServicesPage>
            <Categories categories={mockCategories}/>
            <CatalogCards/>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  padding: 50px 0;
`

Events.getInitialProps = async () => {
    const eventsRequest = API.getEvents()

    return {events: eventsRequest}
}


export default Events;