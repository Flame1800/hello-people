import React, { useEffect } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import { theme } from "../../../../styles/theme";
import Link from "next/link";

type Props = {
  isShow: boolean;
  setShow: Function;
};

const DropdownMenu = ({ isShow, setShow }: Props) => {
  console.log(isShow);
  const links = [
    {
      title: "Мероприятие",
      route: "/events/add",
    },
    {
      title: "Место",
      route: "/places/add",
    },
    {
      title: "Встреча",
      route: "/meets/add",
    },
  ];

  useEffect(() => {
    document.addEventListener("click", () => setShow(false));

    return () => {
      document.removeEventListener("click", () => setShow(false));
    };
  }, []);

  if (!isShow) return null;

  return (
    <Wrapper>
      {links.map((link) => {
        return (
          <Link href={link.route} key={link.route}>
            <DropdownItem onClick={() => setShow(!isShow)}>
              {link.title}
            </DropdownItem>
          </Link>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 20px;
  right: -20px;
  background-color: white;
  z-index: ${theme.order.modal};
  min-width: 200px;
  border-radius: 25px;
  box-shadow: 0 0 13px -6px;
  overflow: hidden;
`;

const DropdownItem = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  width: 100%;
  align-items: center;
  padding: 20px 30px;
  cursor: pointer;
  user-select: none;
  transition: 0.1s ease-in-out;
  border-bottom: 1px solid #dedede;

  &:nth-child(3) {
    border-bottom: none;
  }

  &:hover {
    background-color: rgba(238, 238, 238, 0.59);
  }
`;

export default DropdownMenu;
