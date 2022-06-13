import React, {Component} from 'react';
import NavBarMobile from "../Components/Navigation/NavBarMobile/NavBarMobile";
import styled from "styled-components";
import SideBar from "../Components/Navigation/SideBar/SideBar";
import Header from "../Components/Navigation/Header/Header";
import Chat from "../modules/chat/Chat";
import AuthModal from "../Components/Auth/Auth";
import UsersListModal from "../Components/User/UsersList/UsersListModal";

type Layout = {
    children: any
}

const MainLayout: React.FC<Layout> = ({children}) => {
    return (
        <Wrapper>
            <Header/>
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
            <AuthModal/>
            <UsersListModal/>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  background: url("/img/background.png") fixed no-repeat;
  background-size: cover;
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
      margin-left: 20px;
      margin-right: 20px;
      border-radius: 32px;
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
    border-radius: 32px;
    overflow-y: hidden;
    display: none;
    box-shadow: 0 0 10px -6px;

    @media (min-width: 1424px) {
      display: block;
    }
  }
`

export default MainLayout;