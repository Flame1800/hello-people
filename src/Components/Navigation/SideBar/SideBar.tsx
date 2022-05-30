import React from 'react';
import styled from "styled-components";
import {theme} from "../../../../styles/theme";
import Link from "next/link";
import EventButton from "../NavButtonsSvg/EventButton";
import PlaceButton from "../NavButtonsSvg/PlaceButton";
import {useRouter} from "next/router";
import MeetsButton from "../NavButtonsSvg/MeetsButton";
import ProfileButtonChanger from "../NavButtonsSvg/ProfileButtonChanger";
import AddButton from "../AddButton";
import UiStateStore from "../../../Stores/UiStateStore";
import {observer} from "mobx-react-lite";
import ProfileButton from "./ProfileLink";
import ProfileButtonIcon from "../NavButtonsSvg/ProfileButtonChanger";

const SideBar = () => {
    const route = useRouter()

    return (
        <>
            <Wrapper>
                <AddButton/>
                <div className='nav-links'>
                    <ProfileButton/>
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
                    <Link href='/search/peoples'>
                        <NavLinkStyle active={route.asPath === "/search/peoples"}>
                            <ProfileButtonIcon/>
                            Люди
                        </NavLinkStyle>
                    </Link>
                </div>
            </Wrapper>
        </>
    );
};

const Wrapper = styled.div`
  top: 100px;
  position: sticky;
  height: 40vh;
  width: 350px;
  display: none;
  flex-direction: column;

  .nav-links {
    border-radius: 40px;
    padding: 15px 35px;
    flex-direction: column;
    background: #fff;
    height: inherit;
    display: flex;
    justify-content: center;

  }

  .profile {
    margin-bottom: 60px;
  }

  @media (min-width: 1424px) {
    display: flex;
  }

`

export const NavLinkStyle = styled.a`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 15px 30px;
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

export const AvatarWrapper = styled(NavLinkStyle)`
  display: flex;
  align-items: center;
  box-shadow: 0 2px 3px 1px #0000001f;
  width: 100%;
  padding: 10px 20px;
  margin-bottom: 20px;

  .username {
    font-weight: 700;
    margin-left: 10px;
  }
`


export default observer(SideBar);