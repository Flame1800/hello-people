import React from 'react';
import HeaderServicesPage from "../../src/Components/Common/HeaderServicesPage";
import Categories from "../../src/Components/Common/Categories";
import CatalogCards from "../../src/Components/Place/CatalogCards";
import API from "../../src/Libs/API";
import {NextPage} from "next";
import {observer} from "mobx-react-lite";
import {useRouter} from "next/router";

type Props = {
    entries: any,
    categories: any
}

const Places: NextPage<Props> = ({entries, categories}) => {
    const router = useRouter()

    return (
        <>
            <div onClick={() => router.push(`${router.asPath}?category=item`)}>reload()</div>
            <HeaderServicesPage link='/places/add'>МЕСТА</HeaderServicesPage>
            <Categories categories={categories}/>
            <CatalogCards cards={entries.data} count={entries.meta.pagination.total}/>
        </>
    );
};


Places.getInitialProps = async () => {
    const placesRequest = await API.getPlaces()
    const categories = await API.getPlaceCategories()


    return {entries: placesRequest.data, categories: categories.data.data}
}

export default observer(Places);