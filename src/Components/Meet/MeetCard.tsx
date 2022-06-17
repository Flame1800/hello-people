import React from 'react';
import styled from "styled-components";
import UserBadge from "../User/UserBadge";
import TypeMeet from "./TypeMeet";
import Buttons from "./Buttons";
import PlaceMeet from "./PlaceMeet";

const MeetCard = () => {
    return (
        <Wrapper>
            <div className="content">
                <div className="head">
                    <UserBadge size='sm'/>
                    <TypeMeet type='group'/>
                </div>
                <div className="text">
                    Го в дарк 12:00, сегодня там есть
                    движ
                </div>
            </div>
            <div className="meta">
                <Buttons/>
                <PlaceMeet/>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  width: 100%;
  min-height: 180px;
  margin-bottom: 15px;
  padding: 16px;
  background: #FFFFFF;
  border: 1px solid #FFFFFF;
  box-shadow: 0 4px 34px rgba(0, 0, 0, 0.04);
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
    justify-content: space-between;
  }
`

export default MeetCard;