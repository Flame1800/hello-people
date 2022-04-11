import React from 'react';
import styled from "styled-components";
import Familiars from "./Familiars";

const ProfileHead = () => {
    return (
        <Wrapper>
            <img src="/img/mock-avatar.png" alt="Аватар" className="avatar"/>
            <div className="name">
                HelloUser
            </div>
            <div className="status">
                <span/>
                online
            </div>
            <div className="description">
                Я люблю ходить в бары, клубы и в игровые комнаты, если хочешь со мной пообщаться то я не против
            </div>
            <Familiars/>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;

  .avatar {
    width: 130px;
    height: 120px;
    margin-bottom: 15px;
  }

  .name {
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    text-align: center;
  }

  .status {
    margin-top: 2px;
    display: flex;
    align-items: center;
    font-weight: 600;
    font-size: 16px;
    color: #585858;

    span {
      margin-top: 4px;
      margin-right: 5px;
      background: #7BD67E;
      width: 6px;
      height: 6px;
      border-radius: 50%;
    }
  }

  .description {
    width: 85%;
    margin-top: 30px;
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
    color: #585858;
    text-align: center;
  }
`


export default ProfileHead;