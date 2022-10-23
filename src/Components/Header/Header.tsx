import React from "react";
import styled from "styled-components";
import Link from "next/link";

import Logo from "./Logo";
import UserUX from "./UserUX";
import { observer } from "mobx-react-lite";

const Header = () => {
  return (
    <Wrapper>
      <Logo />
      <UserUX />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 0 64px;
  border-radius: 0 0 40px 40px;
  z-index: 900;
  width: 100%;
  background: rgba(255, 255, 255, 0.87);
  backdrop-filter: blur(5px);
  box-shadow: 0 0 10px -6px;
  height: 80px;
  align-items: center;
  display: none;
  justify-content: space-between;
  position: sticky;
  top: 0;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  max-width: 1520px;

  @media (min-width: 1424px) {
    display: flex;
  }

  .left-side {
    display: flex;
  }

  .right-side {
    display: flex;
    align-items: center;
  }
`;

export default observer(Header);
