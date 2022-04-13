import React from 'react';
import styled from "styled-components";
import {theme} from "../../../styles/theme";
import Link from "next/link";
import EventButton from "./NavButtonsSvg/EventButton";
import PlaceButton from "./NavButtonsSvg/PlaceButton";
import {useRouter} from "next/router";
import MeetsButton from "./NavButtonsSvg/MeetsButton";

const NavBar = () => {
    const route = useRouter()

    return (
        <Wrapper>
            <Link href='/events'>
                <NavLinkStyle active={route.asPath === "/events"}>
                    <EventButton/>
                    Афиша
                </NavLinkStyle>
            </Link>
            <Link href='/places'>
                <NavLinkStyle active={route.asPath === "/places"}>
                    <PlaceButton/>
                    Места
                </NavLinkStyle>
            </Link>
            <Link href='/meets'>
                <NavLinkStyle active={route.asPath === "/meets"}>
                    <MeetsButton/>
                    Встречи
                </NavLinkStyle>
            </Link>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  width: 240px;
  height: 100vh;
  background: #F4F4F4;
  border-right: 1px solid #949494;
  padding: 100px 20px;
  display: none;
  flex-direction: column;

  @media (min-width: 1424px) {
    display: flex;
  }

`

const NavLinkStyle = styled.a`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 15px 20px;
  margin-bottom: 10px;
  font-weight: 400;
  font-size: 16px;
  background: ${({active}) => active ? '#FFE2DC' : 'none'};
  border-radius: 25px;
  cursor: pointer;

  &:hover {
    background: ${({active}) => active ? '#FFE2DC' : '#e8e8e8'};
  }

  svg {
    fill: ${({active}) => active ? theme.color.orange : '#000'} !important;
    margin-right: 10px;
    width: 24px;
    height: 24px;
  }
`

export default NavBar;