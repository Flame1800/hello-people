import React from "react";
import MeetCard from "../../Meet/MeetCard";
import QuestionCard from "./Card/QuestionCard";
import styled from "styled-components";

type Props = {
  questions: MeetType[];
};

const QuestionsCards = ({ questions }: Props) => {
  return (
    <Wrapper>
      {questions.map((meet: MeetType) => (
        <QuestionCard key={meet.id} meet={meet} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

export default QuestionsCards;
