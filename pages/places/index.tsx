import React from 'react';
import HeaderServicesPage from "../../src/Components/Common/HeaderServicesPage";
import Categories from "../../src/Components/Common/Categories";
import CatalogCards from "../../src/Components/Place/CatalogCards";
import API from "../../src/Libs/API";
import {NextPage} from "next";
import {observer} from "mobx-react-lite";
import placesStore from "../../src/Stores/PlacesStore";
import CategoriesStore from "../../src/Stores/CategoriesStore";

type Props = {
    places: any,
    categories: any
}

const Places: NextPage<Props> = ({places, categories}) => {
    const {setPlaces, filterPlacesByCategories} = placesStore
    const {selectedCategories} = CategoriesStore

    React.useEffect(() => {
        setPlaces(places.data)
    }, [])

    React.useEffect(() => {
        if (selectedCategories.length === 0) return setPlaces(places.data)

        filterPlacesByCategories(selectedCategories)
    }, [selectedCategories])


    return (
        <>
            <HeaderServicesPage link='/places/add'>МЕСТА</HeaderServicesPage>
            <Categories categories={categories}/>
            <CatalogCards cards={places.data} count={places.meta.pagination.total}/>
        </>
    );
};


Places.getInitialProps = async () => {
    const placesRequest = await API.getPlaces()
    const categories = await API.getPlaceCategories()


    return {places: placesRequest.data, categories: categories.data.data}
}

export default observer(Places);