import React from "react";
import styled from "styled-components";
import HeaderServicesPage from "../../src/Components/Common/HeaderServicesPage";
import MeetCard from "../../src/Components/Meet/MeetCard";
import API from "../../src/Helpers/API";

type Props = {
  meets: MeetType[];
};

const Meets = ({ meets }: Props) => {
  return (
    <Wrapper>
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
