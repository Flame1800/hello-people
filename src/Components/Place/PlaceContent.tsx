import React from "react";
import styled from "styled-components";
import InfoListServices from "../Common/Services/InfoListServices";
import Description from "../Common/Services/Description";
import TwoGisButton from "../Common/Services/TwoGisButton";
import MetaActionsPlace from "./MetaActionsPlace";
import { observer } from "mobx-react-lite";
import OpenChatButton from "../OpenChatButton/OpenChatButton";
import BackButton from "../Common/BackButton/BackButton";
import MetaActionsEvent from "../Event/MetaActionsEvent";

type PlaceContentType = {
  place: PlaceType;
};

const PlaceContent = ({ place }: PlaceContentType) => {
  const { attributes } = place;

  const head = (
    <div className="head">
      <BackButton link="/places" />
      <MetaActionsPlace place={place} />
    </div>
  );

  return (
    <Wrapper>
      <div className="inner-container">
        {head}
        <div className="buttons">
          <OpenChatButton entityId={place.id} category={"place"} />
          <TwoGisButton link2gis={attributes.maplink} />
        </div>
        <InfoListServices
          address={attributes.location}
          link={attributes.site}
          phone={attributes.tel}
          link2gis={attributes.maplink}
        />
        <div className="place-title">{attributes.title}</div>
        <Description data={attributes.description} />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: #fff;
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 840px;
  border-radius: 15px;
  padding: 20px;
  margin-left: auto;
  margin-right: auto;
  margin-top: -10px;

  .head {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .user-meta {
    display: flex;
    margin-top: 20px;

    > div {
      margin-right: 10px;
    }
  }

  .inner-container {
    margin: 30px auto;
    max-width: 500px;
    width: 100%;
  }

  .place-title {
    font-size: 26px;
    font-weight: 700;
    margin-bottom: 5px;
    transition: 0.2s;
  }

  .place-category {
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    color: #676767;
  }

  .buttons {
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: space-between;

    @media (max-width: 500px) {
      flex-wrap: wrap;
      height: 100px;
      align-items: baseline;
    }

    > div {
      margin-right: 20px;
    }
  }
`;

export default observer(PlaceContent);
