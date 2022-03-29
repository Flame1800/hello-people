import React from 'react';
import styled from "styled-components";
import HeaderServicesPage from "../../src/Components/Common/HeaderServicesPage";
import Categories from "../../src/Components/Common/SmartComponets/Categories";
import mockCategories from "../../src/Mocks/mockCategories";
import Switch from "../../src/Components/Common/Switch";
import CatalogCards from "../../src/Components/Event/CatalogCards";


const Events = () => {
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


export default Events;