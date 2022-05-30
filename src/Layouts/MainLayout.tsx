import React, {Component} from 'react';
import NavBarMobile from "../Components/Navigation/NavBarMobile/NavBarMobile";
import styled from "styled-components";
import SideBar from "../Components/Navigation/SideBar/SideBar";
import Logo from "../Components/Navigation/Logo";
import Chat from "../modules/chat/Chat";
import {AuthTitle} from "../Components/Auth/AuthStyles";
import Login from "../Components/Auth/Login";
import PopupWrapper from "../Components/Common/PopupWrapper";
import AuthFirstStep from "../Components/Auth/Auth";

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
            <AuthFirstStep/>
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
    max-width: 1730px;
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
      margin-left: 15px;
      margin-right: 15px;
      border-radius: 40px;
      overflow-y: hidden;
    }
  }

  .desktop-chat-wrap {
    max-width: 350px;
    width: 100%;
    height: 80vh;
    background: #fff;
    top: 100px;
    position: sticky;
    border-radius: 40px;
    overflow-y: hidden;
    display: none;
    padding: 5px;

    @media (min-width: 1424px) {
      display: block;
    }
  }
`

export default MainLayout;