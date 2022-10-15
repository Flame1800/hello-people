import React from "react";
import styled from "styled-components";
import HeaderServicesPage from "../../src/Components/Common/HeaderServicesPage";
import MeetCard from "../../src/Components/Meet/MeetCard";
import API from "../../src/Helpers/API";
import SeoHead from "../../src/Components/Layouts/SeoHead";
import { CITY } from "../../src/Constants/city";

type Props = {
  meets: MeetType[];
};

const Meets = ({ meets }: Props) => {
  return (
    <Wrapper>
      <SeoHead
        title={`Встречи, знакомся с людми, находит компании ${CITY}е HelloPeople`}
        description={`Знакомтесь и находите единомышленников с помощью встреч в HelloPeople`}
        keywords={`Знакомства, вчтречи, компания, вечеринки, друзья, знакомства на вечер, куда сходить`}
      />
      <HeaderServicesPage link="/meets/add">ВСТРЕЧИ</HeaderServicesPage>
      <div className="cards">
        {meets.map((meet: MeetType) => (
          <MeetCard key={meet.id} meet={meet} />
        ))}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .cards {
    margin-top: 50px;
    margin-bottom: 100px;
    padding: 0 20px;
    display: flex;
    flex-wrap: wrap;
  }
`;

Meets.getInitialProps = async () => {
  const meetsReq = await API.getMeets();

  return { meets: meetsReq.data.data };
};

export default Meets;
