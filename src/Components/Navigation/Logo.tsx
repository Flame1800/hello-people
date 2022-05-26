import React from 'react';
import styled from "styled-components";
import Link from "next/link";

const Logo = () => {
    return (
        <Wrapper>
            <img src="/img/logo.svg" alt="logo"/>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  padding: 0 40px;
  border-radius: 0 0 40px 40px;
  z-index: 900;
  width: 250px;
  background: #fff;
  height: 80px;
  align-items: center;
  display: none;
  justify-content: center;
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

export default Logo;