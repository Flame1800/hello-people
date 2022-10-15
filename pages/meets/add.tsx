import React from "react";
import AddMeet from "../../src/Components/Screens/Meets/AddMeet/AddMeet";
import SeoHead from "../../src/Components/Layouts/SeoHead";
import { CITY } from "../../src/Constants/city";

const Add = () => {
  return (
    <>
      <SeoHead
        title={`Создать встречу ${CITY} HelloPeople`}
        description={`Создавайте встречи или вступайте в существующие`}
      />
      <AddMeet />
    </>
  );
};

export default Add;
