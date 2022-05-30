import React from 'react';
import styled from "styled-components";
import Link from "next/link";

import Logo from './Logo';
import InfoHeader from './InfoHeader';
import UserUX from './UserUX';

const Header = () => {
    return (
        <Wrapper>
            <Logo/>
            <InfoHeader/>
            <UserUX/>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    padding: 0 64px;
    border-radius: 0 0 40px 40px;
    z-index: 900;
    width: 100%;
    background: #fff;
    height: 80px;
    align-items: center;
    display: none;
    justify-content: space-between;
    position: relative;
    margin-bottom: 20px;
    margin-left: auto;
    margin-right: auto;

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

export default Header