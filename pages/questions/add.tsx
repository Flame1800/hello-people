import React from "react";
import AddMeet from "../../src/Components/Screens/Meets/AddMeet/AddMeet";
import SeoHead from "../../src/Components/Layouts/SeoHead";
import { CITY } from "../../src/Constants/city";
import AddQuestion from "../../src/Components/Screens/Questions/AddQuestion/AddQuestion";

const Add = () => {
  return (
    <>
      <SeoHead
        title={`Создать вопрос - ${CITY} HelloPeople`}
        description={`Задавайте и отвечайте вопросы вашего города`}
      />
      <AddQuestion />
    </>
  );
};

export default Add;
