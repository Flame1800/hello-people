import React from 'react';
import styled from "styled-components";
import HeaderServicesPage from "../../src/Components/Common/HeaderServicesPage";
import Categories from "../../src/Components/Common/SmartComponets/Categories";
import mockCategories from "../../src/Mocks/mockCategories";
import CatalogCards from "../../src/Components/Place/CatalogCards";

const Places = () => {
    return (
        <Wrapper>
            <HeaderServicesPage link='/places/add'>МЕСТА</HeaderServicesPage>
            <Categories categories={mockCategories}/>
            <CatalogCards/>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  padding: 50px 0;
`

export default Places;