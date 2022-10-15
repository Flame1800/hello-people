import React from "react";
import HeaderServicesPage from "../../src/Components/Common/HeaderServicesPage";
import Categories from "../../src/Components/Common/Categories";
import CatalogCards from "../../src/Components/Place/CatalogCards";
import API from "../../src/Helpers/API";
import { NextPage } from "next";
import { observer } from "mobx-react-lite";
import axios from "axios";
import CategoriesStore from "../../src/Stores/CategoriesStore";
import Loader from "../../src/Components/Common/Loader";
import qs from "qs";
import SeoHead from "../../src/Components/Layouts/SeoHead";
import { CITY } from "../../src/Constants/city";

type Props = {
  entries: any;
  categories: any;
};

const Places: NextPage<Props> = ({ entries, categories }) => {
  const [places, setPlaces] = React.useState(entries);
  const [loader, setLoader] = React.useState(false);

  const { selectedCategories } = CategoriesStore;

  const filterPlaces = async () => {
    try {
      setLoader(true);

      const query = qs.stringify(
        {
          populate: "*",
          pagination: {
            start: 0,
            limit: 15,
          },
          filters: {
            $or: selectedCategories.map(({ id }) => {
              return {
                categories: {
                  id: {
                    $eq: id,
                  },
                },
              };
            }),
          },
        },
        {
          encodeValuesOnly: true, // prettify URL
        }
      );

      const resPlaces = await axios(
        `${process.env.SERVER_URL_PROD}/api/places?${query}`
      );
      const newPlaces = resPlaces.data;

      setPlaces(newPlaces);
    } catch (e) {
      console.error(e);
    } finally {
      setLoader(false);
    }
  };

  React.useEffect(() => {
    filterPlaces();
  }, [selectedCategories]);

  return (
    <>
      <SeoHead
        title={`Интересные места в ${CITY}е - HelloPeople`}
        description={`Куда сходить в ${CITY}е, инетересные места, вечеринки, клубы, бары, театры. кафе, кофейни`}
        keywords={categories
          .map((cat: Category) => cat.attributes.title)
          .join(", ")}
      />
      <HeaderServicesPage link="/places/add">МЕСТА</HeaderServicesPage>
      <Categories categories={categories} />
      {loader ? (
        <Loader />
      ) : (
        <CatalogCards
          cards={places.data}
          count={places.meta.pagination.total}
        />
      )}
    </>
  );
};

Places.getInitialProps = async () => {
  const placesRequest = await API.getPlaces();
  const categories = await API.getPlaceCategories();

  return { entries: placesRequest.data, categories: categories.data.data };
};

export default observer(Places);
