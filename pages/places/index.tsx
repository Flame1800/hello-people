import React from 'react';
import styled from "styled-components";
import HeaderServicesPage from "../../src/Components/Common/HeaderServicesPage";
import Categories from "../../src/Components/Common/SmartComponets/Categories";
import mockCategories from "../../src/Mocks/mockCategories";
import CatalogCards from "../../src/Components/Place/CatalogCards";
import API from "../../src/Libs/API";
import {NextPage} from "next";

type Props = {
    places: any
}

const Places: NextPage<Props> = ({places}) => {
    return (
        <>
            <HeaderServicesPage link='/places/add'>МЕСТА</HeaderServicesPage>
            <Categories categories={mockCategories}/>
            <CatalogCards cards={places.data} count={places.meta.pagination.total}/>
        </>
    );
};


Places.getInitialProps = async () => {
    const placesRequest = await API.getPlaces()

    return {places: placesRequest.data}
}

export default Places;