import React from 'react';
import styled from "styled-components";
import Familiars from "./Familiars";
import ProfileButtons from "../ProfileButtons";
import UserStore from "../../../Stores/UserStore";
import {observer} from "mobx-react-lite";
import {useRouter} from "next/router";

const ProfileHead = ({user}) => {
    const me = UserStore.user
    const isMe = user.id === me?.id
    const router = useRouter()

    const logout = () => {
        UserStore.logout()
        router.push('/events')
    }

    return (
        <Wrapper>
            <div className="head">
                <img src="/img/mock-avatar.png" alt="Аватар" className="avatar"/>
                <div className="info">
                    <div className="wrap-name">
                        <div className="name">
                            {user.username}
                        </div>
                        <div className="status">
                            <span/>
                            online
                        </div>
                    </div>
                    <ProfileButtons isMe={isMe}/>
                    <div>
                        <Familiars/>
                    </div>
                </div>
            </div>
            <div className="description">
                <div className="title-desc">Обо мне:</div>
                Этот пользователь очень ждет что сервис скоро заработает и он смог бы написать здесь все что душа
                пожелает)
            </div>
            {isMe && <div className="logout" onClick={() => logout()}>
                <img width={24} height={24} src="/img/logout.svg" alt="logout"/>
                <p>Выйти</p>
            </div>}
        </Wrapper>
    );
};

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1000px;
  margin: auto;
  padding: 40px 5%;
  border-radius: 40px;
  background: #fff;

  .logout {
    display: flex;
    color: #FF4A4A;
    font-weight: 500;
    cursor: pointer;
    height: fit-content;
  }

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


export default observer(ProfileHead);