import React from 'react';
import styled from "styled-components";
import BackButton from "../../src/Components/Common/BackButton";
import Name from '../../src/Components/Common/Services/Name';
import PageCarousel from "../../src/Components/Common/Services/PageCarousel";
import PageContent from "../../src/Components/Place/PageContent";
import API from "../../src/Libs/API";
import {NextPage} from "next";

interface Props {
    place: any
}

const PlacePage: NextPage<Props> = ({place}) => {
    const {attributes} = place

    return (
        <Wrapper>
            <div className="head">
                <BackButton/>
                <Name place={attributes}/>
            </div>
            <PageCarousel pictures={attributes.pictures}/>
            <PageContent place={attributes}/>
        </Wrapper>
    );
};

const Wrapper = styled.div`

  padding: 60px;
  background: #fff;
  min-height: 100vh;
  box-shadow: 0 0 17px rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) {
    box-shadow: none !important;
    background: none !important;
  }

  .head {
    display: flex;
    align-items: center;
    padding: 0 20px;

    &.Name {
      justify-content: center;
    }

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

PlacePage.getInitialProps = async (ctx) => {
    const placeRequest = await API.getPlace(ctx.query.id)

    return {place: placeRequest.data.data}
}


export default PlacePage;