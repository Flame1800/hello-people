import React from 'react';
import styled from "styled-components";
import {theme} from "../../../styles/theme";
import Link from "next/link";
import EventButton from "./NavButtonsSvg/EventButton";
import PlaceButton from "./NavButtonsSvg/PlaceButton";
import {useRouter} from "next/router";
import MeetsButton from "./NavButtonsSvg/MeetsButton";
import ProfileButton from "./NavButtonsSvg/ProfileButton";
import AddButton from "./AddButton";

const SideBar = () => {
    const route = useRouter()

    return (
        <Wrapper>
            <AddButton/>
            <div className='nav-links'>
                <Link href='/profile'>
                    <NavLinkStyle active={route.asPath === "/profile"}>
                        <ProfileButton/>
                        Профиль
                    </NavLinkStyle>
                </Link>
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
            </div>
        </Wrapper>
    )
        ;
};

const Wrapper = styled.div`
  top: 100px;
  position: sticky;
  height: 800px;
  width: 270px;
  display: none;
  flex-direction: column;


  .nav-links {
    border-radius: 40px 40px 0 0;
    padding: 15px;
    flex-direction: column;
    height: 800px;
    background: linear-gradient(#fff 50%, rgba(0, 0, 0, 0));
  }

  .profile {
    margin-bottom: 60px;
  }

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
    background: ${({active}) => active ? '#FFE2DC' : '#f1f1f1'};
  }

  svg {
    fill: ${({active}) => active ? theme.color.orange : '#000'} !important;
    margin-right: 10px;
    width: 24px;
    height: 24px;
  }
`

export default SideBar;