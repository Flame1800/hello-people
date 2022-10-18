import React from "react";
import styled from "styled-components";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/pages">
      <Wrapper>
        <img src="/img/logo.svg" alt="logo" />
      </Wrapper>
    </Link>
  );
};

const Wrapper = styled.a`
  z-index: 900;
  height: 80px;
  align-items: center;
  display: none;
  position: relative;
  width: 130px;
  cursor: pointer;

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

export default Logo;
