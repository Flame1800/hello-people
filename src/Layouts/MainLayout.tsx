import React, {Component} from 'react';
import NavBarMobile from "../Components/Navigation/NavBarMobile/NavBarMobile";
import styled from "styled-components";
import SideBar from "../Components/Navigation/SideBar";
import Logo from "../Components/Navigation/Logo";
import Chat from "../modules/chat/Chat";
import PopupWrapper from "../Components/Common/PopupWrapper";
import {AuthTitle} from "../Components/Auth/AuthStyles";
import AuthMainScreen from "../Components/Auth/AuthMainScreen";

type Layout = {
    children: any
}

const MainLayout: React.FC<Layout> = ({children}) => {
    return (
        <Wrapper>
            <Logo/>
            <NavBarMobile/>
            <div className="container">
                <SideBar/>
                <div className="inner-content">
                    {children}
                </div>
                <div className="desktop-chat-wrap">
                    <Chat/>
                </div>
            </div>
            <PopupWrapper>
                <img src="/img/logo-big.svg" alt="логотип HelloPeople"/>
                <AuthTitle className="title">Вход в HelloPeople</AuthTitle>
                <AuthMainScreen mode='log'/>
            </PopupWrapper>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  background: url("/img/background.png") fixed;
  min-height: 100vh;

  @media (max-width: 600px) {
    background: #F4F4F4;
  }

  .container {
    max-width: 1600px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    position: relative;

    @media (min-width: 1424px) {
      left: 0;
      display: flex;
    }
  }

  .inner-content {
    max-width: 1000px;
    width: 100%;

    @media (min-width: 1424px) {
      margin: 40px 10px;
      border-radius: 40px;
      overflow-y: hidden;
    }
  }

  .desktop-chat-wrap {
    background: linear-gradient(180deg, #FFFFFF 50%, rgba(255, 255, 255, 0) 73.29%);
    max-width: 350px;
    width: 100%;
    max-height: 100vh;
    top: 100px;
    position: sticky;
    border-radius: 40px 40px 0 0;
    overflow-y: hidden;
    display: none;
    padding: 5px;

    @media (min-width: 1424px) {
      display: block;
    }
  }
`

export default MainLayout;