import React from "react";
import SeoHead from "../../../src/Components/Layouts/SeoHead";
import { CITY } from "../../../src/Constants/city";
import HeaderServicesPage from "../../../src/Components/Common/HeaderServicesPage";
import API from "../../../src/Helpers/API";
import { NextPage } from "next";
import styled from "styled-components";
import QuestionCard from "../../../src/Components/Screens/Questions/Card/QuestionCard";
import CommentsBlock from "../../../src/Components/Comments/CommnetsBlock";

type Props = {
  meet: MeetType;
};

const MeetPage: NextPage<Props> = ({ meet }) => {
  return (
    <Wrapper>
      <SeoHead
        title={`Встречи, знакомся с людми, находит компании ${CITY}е HelloPeople`}
        description={`Знакомтесь и находите единомышленников с помощью встреч в HelloPeople`}
        keywords={`Знакомства, вчтречи, компания, вечеринки, друзья, знакомства на вечер, куда сходить`}
      />
      <HeaderServicesPage link="/meets/add">ВОПРОСЫ</HeaderServicesPage>
      <div className="card">
        <QuestionCard key={meet.id} meet={meet} />
      </div>
      <CommentsBlock id={meet.id} model={"question"} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .card {
    margin-bottom: 30px;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`;

MeetPage.getInitialProps = async (ctx) => {
  const meetsReq = await API.getQuestion(ctx.query.id);

  return { meet: meetsReq.data.data };
};

export default MeetPage;
