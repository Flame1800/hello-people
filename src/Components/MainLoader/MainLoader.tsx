import React from "react";
import styled from "styled-components";
import Loader from "../Common/Loader";

const MainLoader = () => {
  return (
    <Wrapper>
      <MainLogo src="/img/logo-big.svg" alt="логотип HelloPeople" />
      <TextLogo src="/img/logo.svg" alt="logo" />
      <Loader />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  z-index: 1000;
  position: absolute;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  user-select: none;
  background: #fff;
`;

const MainLogo = styled.img`
  width: 70px;
  height: 70px;
  margin-bottom: 30px;
`;

const TextLogo = styled.img`
  margin-bottom: 100px;
`;

export default MainLoader;
