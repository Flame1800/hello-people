import React from "react";
import MeetCard from "../../Meet/MeetCard";
import QuestionCard from "./Card/QuestionCard";

type Props = {
  questions: MeetType[];
};

const QuestionsCards = ({ questions }: Props) => {
  return (
    <div className="cards">
      {questions.map((meet: MeetType) => (
        <QuestionCard key={meet.id} meet={meet} />
      ))}
    </div>
  );
};

export default QuestionsCards;
