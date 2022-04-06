import React from 'react';
import styled from "styled-components";
import HeaderServicesPage from "../../src/Components/Common/HeaderServicesPage";
import MeetCard from "../../src/Components/Meet/MeetCard";

const Meets = () => {
    return (
        <Wrapper>
            <HeaderServicesPage link='/meets/add'>ВСТРЕЧИ</HeaderServicesPage>
            <div className='cards'>
                <MeetCard/>
                <MeetCard/>
                <MeetCard/>
                <MeetCard/>
                <MeetCard/>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  padding: 50px 0;

  .cards {
    margin-top: 50px;
    padding: 0 20px;
  }
`


export default Meets;