import React from 'react';
import styled from "styled-components";
import Link from "next/link";
import EventButton from "../NavButtonsSvg/EventButton";
import PlaceButton from "../NavButtonsSvg/PlaceButton";
import MessengerButton from "../NavButtonsSvg/MessengerButton";
import MeetsButton from "../NavButtonsSvg/MeetsButton";
import ProfileIcon from "../NavButtonsSvg/ProfileIcon";
import {theme} from "../../../../styles/theme";
import {useRouter} from "next/router";

const NavBar = () => {
    const route = useRouter()

    return (
        <Wrapper>
            <Link href='/events'>
                <NavLinkStyle href="" active={route.asPath === "/events"}><EventButton/></NavLinkStyle>
            </Link>
            <Link href='/places'>
                <NavLinkStyle href="" active={route.asPath === "/places"}><PlaceButton/></NavLinkStyle>
            </Link>
            <Link href='/messenger'>
                <NavLinkStyle href="" active={route.asPath === "/messenger"}><MessengerButton/></NavLinkStyle>
            </Link>
            <Link href='/meets'>
                <NavLinkStyle href="" active={route.asPath === "/meets"}><MeetsButton/></NavLinkStyle>
            </Link>
            <Link href='/profile'>
                <NavLinkStyle href="" active={route.asPath === "/profile"}><ProfileIcon/></NavLinkStyle>
            </Link>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  background: #fff;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  box-shadow: 0 0 18px rgba(0, 0, 0, 0.07);
  border-radius: 20px 20px 0 0;
  z-index: 20;

  @media (min-width: 1424px) {
    display: none;
  }
`

const NavLinkStyle = styled.a`
  svg {
    fill: ${({active}) => active ? theme.color.orange : '#000'} !important;
  }
`

export default NavBar;