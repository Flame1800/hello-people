import React from "react";
import styled from "styled-components";
import Link from "next/link";
import EventButton from "../SideBar/Nav/NavButtonsSvg/EventButton";
import PlaceButton from "../SideBar/Nav/NavButtonsSvg/PlaceButton";
import MessengerButton from "../SideBar/Nav/NavButtonsSvg/MessengerButton";
import MeetsButton from "../SideBar/Nav/NavButtonsSvg/MeetsButton";
import ProfileIcon from "../SideBar/Nav/NavButtonsSvg/ProfileIcon";
import { theme } from "../../../styles/theme";
import { useRouter } from "next/router";
import UiStateStore from "../../Stores/UiStateStore";
import UserStore from "../../Stores/UserStore";
import { observer } from "mobx-react-lite";
import MenuIcon from "../SideBar/Nav/NavButtonsSvg/MenuIcon";

const NavBar = () => {
  const route = useRouter();

  return (
    <Wrapper>
      <div className="links">
        <Link href="/events">
          <NavLinkStyle href="" active={route.asPath === "/events"}>
            <EventButton />
          </NavLinkStyle>
        </Link>
        <Link href="/places">
          <NavLinkStyle href="" active={route.asPath === "/places"}>
            <PlaceButton />
          </NavLinkStyle>
        </Link>
        <Link href="/messenger">
          <NavLinkStyle href="" active={route.asPath === "/messenger"}>
            <MessengerButton />
          </NavLinkStyle>
        </Link>
        <Link href="/meets">
          <NavLinkStyle href="" active={route.asPath === "/meets"}>
            <MeetsButton />
          </NavLinkStyle>
        </Link>
        {!UserStore.user ? (
          <NavLinkStyle
            onClick={() => UiStateStore.toggleAuthModal()}
            active={route.asPath === "/user"}
          >
            <ProfileIcon />
          </NavLinkStyle>
        ) : (
          <Link href={`/menu`}>
            <NavLinkStyle href="" active={route.asPath === "/user"}>
              <MenuIcon />
            </NavLinkStyle>
          </Link>
        )}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  z-index: 200;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;

  .links {
    background: #fff;
    width: 100%;
    max-width: 1000px;
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    box-shadow: 0 0 18px rgba(0, 0, 0, 0.2);
    border-radius: 20px 20px 0 0;
  }

  @media (min-width: 1424px) {
    display: none;
  }
`;

interface PropsNavLink {
  active: Boolean;
}

const NavLinkStyle = styled.a`
  svg {
    fill: ${(props: PropsNavLink) =>
      props.active ? theme.color.orange : "#000"} !important;
  }
`;

export default observer(NavBar);
