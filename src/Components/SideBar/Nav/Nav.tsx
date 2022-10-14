import React from "react";
import ProfileButton from "./ProfileLink";
import Link from "next/link";
import EventButton from "./NavButtonsSvg/EventButton";
import PlaceButton from "./NavButtonsSvg/PlaceButton";
import MeetsButton from "./NavButtonsSvg/MeetsButton";
import MessengerButton from "./NavButtonsSvg/MessengerButton";
import { useRouter } from "next/router";
import { Wrapper, NavLinkStyle, NavLinks } from "../SideBar.style";

const Nav = () => {
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
      <NavLinks>
        <ProfileButton />
        {links.map((link) => {
          const isActive =
            route.asPath === "/" && link.route === "/events"
              ? true
              : route.asPath === link.route;

          return (
            <Link href={link.route} key={link.route}>
              <a>
                <NavLinkStyle active={isActive}>
                  {link.icon}
                  <div className="navLinkTitle">{link.title}</div>
                </NavLinkStyle>
              </a>
            </Link>
          );
        })}
      </NavLinks>
    </>
  );
};

export default Nav;
