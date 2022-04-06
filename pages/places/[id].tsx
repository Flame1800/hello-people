import React from 'react';
import styled from "styled-components";
import BackButton from "../../src/Components/Common/BackButton";
import PageCarousel from "../../src/Components/Common/Services/PageCarousel";
import PageContent from "../../src/Components/Place/PageContent";

const EventPage = () => {
    return (
        <Wrapper>
            <div className="head">
                <BackButton/>
                <div className="head-title">
                    Место
                </div>
            </div>
            <PageCarousel/>
            <PageContent/>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  padding-top: 50px;
  background: #fff;
  min-height: 100vh;

  .head {
    display: flex;
    align-items: center;
    padding: 0 20px;
    margin-bottom: 20px;

    .head-title {
      font-style: normal;
      font-weight: 400;
      font-size: 24px;
      color: #000000;
      margin-left: 20px;
      margin-bottom: 5px;
    }
  }

`

export default EventPage;