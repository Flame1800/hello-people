import React, { useLayoutEffect, useRef } from "react";
import styled from "styled-components";
import { ButtonStyle } from "../../../styles/commonStyles";
import InfoListServices from "../Common/Services/InfoListServices";
import Description from "../Common/Services/Description";
import makeBeautyDate from "../../Helpers/makeBeautyDate";
import TwoGisButton from "../Common/Services/TwoGisButton";
import BackButton from "../Common/BackButton/BackButton";
import MetaActionsEvent from "./MetaActionsEvent";
import UserStore from "../../Stores/UserStore";
import UiStateStore from "../../Stores/UiStateStore";
import { observer } from "mobx-react-lite";
import OpenChatButton from "../OpenChatButton/OpenChatButton";
import { theme } from "../../../styles/theme";
import API from "../../Helpers/API";
import ShareVkButton from "../Common/ShareVkButton/ShareVkButton";
import { API_URL } from "../../Constants/api";

type PropsType = {
  event: EventType;
};

const EventContent = ({ event }: PropsType) => {
  const { attributes } = event;

  const imgUrl = attributes.cover?.data
    ? API.url + attributes.cover.data.attributes.url
    : "/img/mock-avatar.svg";

  return (
    <Wrapper>
      <div className="inner-container">
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
        <ShareVkButton
          url={`${API_URL}/events/id/${event.id}`}
          title={event.attributes.title}
          image={imgUrl}
        />
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
  box-shadow: ${theme.boxShadow.mainComponent};

  .inner-container {
    margin: 30px auto;
    max-width: 600px;
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
