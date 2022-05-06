import React from 'react';
import styled from "styled-components";
import Link from "next/link";

const Logo = () => {
    return (
        <Wrapper>
            <Link href='/events'>
                <a>
                    <img src="/img/logo.svg" alt="logo"/>
                </a>
            </Link>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  padding: 0 40px;
  border-radius: 0 0 40px 40px;
  z-index: 900;
  width: 250px;
  background: #fff;
  height: 50px;
  align-items: center;
  display: none;
  justify-content: center;
  margin: 0 auto;
  position: relative;
  right: 70px;

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