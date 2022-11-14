import React from "react";
import MobileMenu from "../src/Components/Navigation/MobileMenu";
import SeoHead from "../src/Components/Layouts/SeoHead";
import { CITY } from "../src/Constants/city";

const Menu = () => {
  return (
    <>
      <SeoHead
        title={`HelloPeople ${CITY}`}
        description={`Куда сходить в ${CITY}е, свежие, актуальные мероприятия, вечеринки, концерты, квизы, театры и мастер-классы`}
      />
      <MobileMenu />
    </>
  );
};

export default Menu;
