import React, { ReactChildren } from "react";
import NavBarMobile from "../Navigation/NavBarMobile/NavBarMobile";
import styled from "styled-components";
import SideBar from "../SideBar/SideBar";
import Header from "../Navigation/Header/Header";
import Chat from "../../modules/chat/Chat";
import AuthModal from "../Auth/Auth";
import UsersListModal from "../User/UsersList/UsersListModal";
import { useRouter } from "next/router";
import CreateEventListModal from "../Navigation/Header/CreateEventListModal";
import UserStore from "../../Stores/UserStore";
import { observer } from "mobx-react-lite";
import MainLoader from "../MainLoader/MainLoader";

type LayoutType = {
  children: ReactChildren;
};

const Layout = ({ children }: LayoutType) => {
  const router = useRouter();
  const isMessengerRoute = router.asPath === "/messenger";
  const { loading } = UserStore;

  const modals = (
    <>
      <AuthModal />
      <UsersListModal />
      <CreateEventListModal />
    </>
  );

  if (loading) {
    return <MainLoader />;
  }

  return (
    <Wrapper>
      <Header />
      <NavBarMobile />
      <div className="container">
        <SideBar />
        <div className="inner-content">{children}</div>
        {!isMessengerRoute && (
          <div className="desktop-chat-wrap">
            <Chat isWidget={true} />
          </div>
        )}
        {modals}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: url("/img/background.png") fixed no-repeat;
  background-size: cover;
  min-height: 100vh;

  @media (max-width: 600px) {
    background: #f4f4f4;
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
    }
  }

  .desktop-chat-wrap {
    max-width: 350px;
    width: 100%;
    height: 80vh;
    background: #fff;
    top: 112px;
    position: sticky;
    border-radius: 32px;
    overflow-y: hidden;
    display: none;
    box-shadow: 0 0 10px -6px;

    @media (min-width: 1424px) {
      display: block;
    }
  }
`;

export default observer(Layout);
