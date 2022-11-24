import React from "react";
import SeoHead from "../../../src/Components/Layouts/SeoHead";
import { CITY } from "../../../src/Constants/city";
import HeaderServicesPage from "../../../src/Components/Common/HeaderServicesPage";
import MeetCard from "../../../src/Components/Meet/MeetCard";
import API from "../../../src/Helpers/API";
import { NextPage } from "next";
import styled from "styled-components";

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
      <HeaderServicesPage link="/meets/add">ВСТРЕЧИ</HeaderServicesPage>
      <div className="card">
        <MeetCard key={meet.id} meet={meet} />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .card {
    margin-bottom: 100px;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`;

MeetPage.getInitialProps = async (ctx) => {
  const meetsReq = await API.getMeet(ctx.query.id);

  return { meet: meetsReq.data.data };
};

export default MeetPage;
