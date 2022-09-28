import React from "react";
import styled from "styled-components";
import { ButtonStyle } from "../../../styles/commonStyles";
import InfoListServices from "../Common/Services/InfoListServices";
import Description from "../Common/Services/Description";
import makeBeautyDate from "../../Helpers/makeBeautyDate";
import TwoGisButton from "../Common/Services/TwoGisButton";
import BackButton from "../Common/BackButton";
import MetaActionsEvent from "./MetaActionsEvent";
import UserStore from "../../Stores/UserStore";
import UiStateStore from "../../Stores/UiStateStore";
import { observer } from "mobx-react-lite";
import OpenChatButton from "../OpenChatButton/OpenChatButton";

type PropsType = {
  event: EventType;
};

const EventContent = ({ event }: PropsType) => {
  const { attributes } = event;
  const { user } = UserStore;

  const head = (
    <div className="back">
      <BackButton />
      <MetaActionsEvent event={event} />
    </div>
  );

  return (
    <Wrapper>
      <div className="inner-container">
        {head}
        <div className="buttons">
          <OpenChatButton entityId={event.id} category={"event"} />
          <TwoGisButton link2gis={attributes.maplink} />
        </div>
        <InfoListServices
          date={makeBeautyDate(attributes.dateStart)}
          address={
            attributes.place?.data
              ? attributes.place.data.attributes.location
              : undefined
          }
          link={attributes.site}
          phone={attributes.tel}
          link2gis={attributes.maplink}
        />
        <div className="title">{attributes.title}</div>
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
  margin: -10px auto 20px;

  .inner-container {
    margin: 30px auto;
    max-width: 500px;
  }

  .back {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
    cursor: pointer;

    .cap {
      margin-left: 10px;
      font-size: 19px;
      font-weight: 600;
      color: #838383;
    }
  }

  .title {
    font-weight: 600;
    font-size: 18px;
    margin-top: 40px;
  }

  .buttons {
    display: flex;
    width: 100%;
    justify-content: space-between;

    > div {
      margin-right: 20px;
    }
  }
`;

export default observer(EventContent);
