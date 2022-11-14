import React from "react";
import styled from "styled-components";
import { ButtonStyle } from "../../../styles/commonStyles";
import Actual from "../SideBar/Actual/Actual";
import { theme } from "../../../styles/theme";
import UiStateStore from "../../Stores/UiStateStore";
import userStore from "../../Stores/UserStore";
import ProfileContetnt from "./ProfileContetnt";
import { observer } from "mobx-react-lite";
import { isMobile } from "react-device-detect";

const MobileMenu = () => {
  const { toggleAuthModal } = UiStateStore;
  const { user } = userStore;

  const noAuth = (
    <>
      <Title>Войдите или зарегистрируйтесь в HelloPeople</Title>
      <ButtonStyle onClick={() => toggleAuthModal()}>
        Войти / Зарегистрироваться
      </ButtonStyle>
    </>
  );

  if (!isMobile) {
    return (
      <Wrapper>
        <div>Выберите пункт в меню слева</div>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      {user ? <ProfileContetnt /> : noAuth}
      <Actual />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 100px;
  background: #fff;
  z-index: 110;

  @media (min-width: 1424px) {
    padding: 0;
    min-height: 80vh !important;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: ${theme.borderRadius.main};
    box-shadow: ${theme.boxShadow.mainComponent};
  }
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 26px;
  line-height: 35px;
  padding-top: 30px;
  margin-bottom: 40px;
`;

export default observer(MobileMenu);
