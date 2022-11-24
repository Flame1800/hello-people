import React from "react";
import styled from "styled-components";
import API from "../../src/Helpers/API";
import SeoHead from "../../src/Components/Layouts/SeoHead";
import { CITY } from "../../src/Constants/city";
import HeaderServicesPage from "../../src/Components/Common/HeaderServicesPage";
import MeetCard from "../../src/Components/Meet/MeetCard";
import QuestionsCards from "../../src/Components/Screens/Questions";

type Props = {
  questions: MeetType[];
};

const Questions = ({ questions }: Props) => {
  return (
    <Wrapper>
      <SeoHead
        title={`Вопросы, задай вопрос местным - ${CITY}е HelloPeople`}
        description={`Овечайте и задавайте вопросы у местных в HelloPeople`}
        keywords={`вопросы, компания, друзья, местные, куда сходить`}
      />
      <HeaderServicesPage link="/questions/add">ВОПРОСЫ</HeaderServicesPage>
      <QuestionsCards questions={questions} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .cards {
    margin-bottom: 100px;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`;

Questions.getInitialProps = async () => {
  const questionsReq = await API.getQuestions();

  return { questions: questionsReq.data.data };
};

export default Questions;
