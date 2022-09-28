import React from "react";
import styled from "styled-components";
import UserBadge from "../User/UserBadge";
import TypeMeet from "./TypeMeet";
import Buttons from "./Buttons";
import PlaceMeet from "./PlaceMeet";
import { theme } from "../../../styles/theme";

type Props = {
  meet: MeetType | null;
};

const MeetCard = ({ meet }: Props) => {
  if (!meet) return null;

  return (
    <Wrapper>
      <div className="content">
        <div className="head">
          <UserBadge user={meet.attributes.author.data} size="sm" />
          <TypeMeet type="group" />
        </div>
        <div className="text">{meet.attributes.description}</div>
      </div>
      <div className="meta">
        <Buttons />
        <PlaceMeet place={meet.attributes.place} />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  min-height: 180px;
  margin-bottom: 15px;
  padding: 16px;
  background: #ffffff;
  border: 1px solid #ffffff;
  box-shadow: ${theme.boxShadow.mainComponent};
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: 768px) {
    max-width: 300px;
    margin-right: 15px;
    margin-bottom: 15px;
  }

  .head {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .text {
    margin-top: 15px;
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 19px;
    margin-bottom: 30px;
  }

  .meta {
    display: flex;
    align-items: center;
  }
`;

export default MeetCard;
