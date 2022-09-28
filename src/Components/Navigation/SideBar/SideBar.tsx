import React from "react";
import styled from "styled-components";
import { theme } from "../../../../styles/theme";
import Link from "next/link";
import { useRouter } from "next/router";
import EventButton from "../NavButtonsSvg/EventButton";
import PlaceButton from "../NavButtonsSvg/PlaceButton";
import MeetsButton from "../NavButtonsSvg/MeetsButton";
import { observer } from "mobx-react-lite";
import ProfileButton from "./ProfileLink";
import MessengerButton from "../NavButtonsSvg/MessengerButton";

const SideBar = () => {
  const route = useRouter();

  const links = [
    {
      title: "Aфиша",
      route: "/events",
      icon: <EventButton />,
    },
    {
      title: "Места",
      route: "/places",
      icon: <PlaceButton />,
    },
    {
      title: "Встречи",
      route: "/meets",
      icon: <MeetsButton />,
    },
    {
      title: "Мессенджер",
      route: "/messenger",
      icon: <MessengerButton />,
    },
  ];

  return (
    <>
      <Wrapper>
        <div className="nav-links">
          <ProfileButton />
          {links.map((link) => {
            return (
              <Link href={link.route} key={link.route}>
                <a>
                  <NavLinkStyle active={route.asPath === link.route}>
                    {link.icon}
                    <div className="navLinkTitle">{link.title}</div>
                  </NavLinkStyle>
                </a>
              </Link>
            );
          })}
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

  @media (min-width: 1424px) {
    display: flex;
  }

  .nav-links {
    border-radius: 32px;
    padding: 32px 48px;
    flex-direction: column;
    background: #fff;
    display: flex;
    justify-content: center;
    box-shadow: 0 0 10px -6px;
  }

  .profile {
    margin-bottom: 60px;
  }
`;

export const NavLinkStyle = styled.div<{ active: boolean }>`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 16px 24px;
  font-weight: 700;
  font-size: 14px;
  background: ${({ active }) => (active ? "#FFE2DC" : "none")};
  border-radius: 16px;
  cursor: pointer;

  &:hover {
    background: ${({ active }) => (active ? "#FFE2DC" : "#FAFAFA")};
  }

  svg {
    fill: ${({ active }) => (active ? theme.color.orange : "#000")} !important;
    margin-right: 24px;
    width: 24px;
    height: 24px;
  }
`;

export const AvatarWrapper = styled(NavLinkStyle)`
  display: flex;
  align-items: center;
  box-shadow: 0 0 6px 1px #0000001f;
  width: 100%;
  padding: 10px 20px;
  margin-bottom: 20px;

  .username {
    font-weight: 700;
    margin-left: 10px;
  }
`;

export default observer(SideBar);
