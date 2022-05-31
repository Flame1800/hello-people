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
  background: rgba(255, 255, 255, 0.87);
  backdrop-filter: blur(20px);
  height: 80px;
  align-items: center;
  display: none;
  justify-content: space-between;
  position: sticky;
  top: 0;
  margin: 0 auto;
  max-width: 1730px;


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