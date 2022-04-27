import React from 'react';
import styled from "styled-components";
import Link from "next/link";
import AddButton from "./AddButton";
import DesktopMessenger from './DesktopMessenger'

const Header = () => {
    return (
        <Wrapper>
            <div className="left-side">
                <Link href='/events'>
                    <a>
                        <img src="/img/logo.svg" alt="logo"/>
                    </a>
                </Link>
            </div>
            <div className="right-side">
                <AddButton/>
                <DesktopMessenger/>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  position: fixed;
  padding: 0 40px;
  z-index: 900;
  width: 100%;
  top: 0;
  background: #fff;
  height: 70px;
  align-items: center;
  border-top: 1px solid #e0e0e0;
  border-bottom: 1px solid #949494;
  display: none;
  justify-content: space-between;

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

export default Header;