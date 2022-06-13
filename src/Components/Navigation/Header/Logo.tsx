import React from 'react';
import styled from "styled-components";
import Link from "next/link";
import InfoHeader from './InfoHeader';
import UserUX from './UserUX';

const Logo = () => {
    return (
        <Wrapper href='/'>
            <img src="/img/logo.svg" alt="logo"/>
        </Wrapper>
    );
};

const Wrapper = styled.a`
  z-index: 900;
  height: 80px;
  align-items: center;
  display: none;
  position: relative;
  width: 130px;

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
`

export default Logo;