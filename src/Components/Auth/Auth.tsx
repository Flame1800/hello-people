import React from "react";
import PopupWrapper from "../Common/PopupWrapper";
import UiStateStore from "../../Stores/UiStateStore";
import { observer } from "mobx-react-lite";
import styled from "styled-components";
import Login from "./Login";
import Register from "./Register";

const Auth = () => {
  const { toggleAuthModal, authModal } = UiStateStore;
  const [mode, setMode] = React.useState("log");

  const content = (
    <>
      <ImageLogo src="/img/logo-big.svg" alt="логотип HelloPeople" />
      <AuthTitle className="title">
        {mode === "login" ? "Войти в HelloPeople" : "Регистрация"}
      </AuthTitle>
      {mode === "reg" ? (
        <Register setMode={setMode} close={toggleAuthModal} />
      ) : (
        <Login setMode={setMode} close={toggleAuthModal} />
      )}
    </>
  );

  return (
    <PopupWrapper setShow={toggleAuthModal} show={authModal} width={400}>
      <AuthWrapper>{authModal && content}</AuthWrapper>
    </PopupWrapper>
  );
};

export const ImageLogo = styled.img`
  width: 100px;
  height: 100px;
`;

export const AuthWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  margin: 20px 0;
  width: 100%;
  min-height: 250px;
`;

export const AuthTitle = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 26px;
  line-height: 49px;
  margin-top: 15px;
  text-align: center;
`;

export default observer(Auth);
