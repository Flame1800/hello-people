import React from 'react';
import styled from "styled-components";
import Familiars from "./Familiars";
import ProfileButtons from "../ProfileButtons";

const ProfileHead = () => {
    return (
        <Wrapper>
            <div className="head">
                <img src="/img/mock-avatar.png" alt="Аватар" className="avatar"/>
                <div className="info">
                    <div className="wrap-name">
                        <div className="name">
                            HelloUser
                        </div>
                        <div className="status">
                            <span/>
                            online
                        </div>
                    </div>
                    <ProfileButtons/>
                    <div>
                        <Familiars/>
                    </div>
                </div>
            </div>
            <div className="description">
                <div className="title-desc">Обо мне:</div>
                Я люблю ходить в бары, клубы и в игровые комнаты, если хочешь со мной пообщаться то я не против
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1000px;
  margin: auto;
  padding: 40px 5%;
  border-radius: 40px;
  background: #fff;

  @media (max-width: 1424px) {
    background: #fff;
    padding: 20px 0;
  }

  .head {
    display: flex;
    justify-content: start;
    margin-bottom: 10px;
  }

  .wrap-name {
    display: flex;
    flex-wrap: wrap;
  }

  .avatar {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    margin-bottom: 15px;
    margin-right: 20px;
  }

  .name {
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
  }

  .status {
    margin-top: 2px;
    display: flex;
    align-items: center;
    font-weight: 600;
    font-size: 16px;
    color: #585858;
    margin-left: 15px;

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
    .title-desc {
      font-weight: 800;
      font-size: 15px;
      color: #000000;
      margin-bottom: 5px;
    }

    max-width: 330px;
    font-weight: 600;
    font-size: 14px;
    line-height: 19px;
    color: #585858;

    @media (min-width: 740px) {
      margin-left: 60px;
    }
  }
`


export default ProfileHead;