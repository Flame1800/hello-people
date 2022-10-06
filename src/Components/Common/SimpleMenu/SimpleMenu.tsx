import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { theme } from "../../../../styles/theme";

type Props = {
  children: React.ReactNode;
  isShow: boolean;
  setIsShow: Function;
};

const SimpleMenu = ({ children, isShow, setIsShow }: Props) => {
  useEffect(() => {
    document.addEventListener("click", () => setIsShow(false));

    return () => {
      document.removeEventListener("click", () => setIsShow(false));
    };
  }, []);

  return (
    <Wrapper onClick={(e) => e.stopPropagation()}>
      <img
        src="/img/menu-dots.svg"
        alt="..."
        onClick={() => setIsShow(!isShow)}
      />
      {isShow && <Menu>{children}</Menu>}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  position: relative;
  margin: 0 10px;

  img {
    cursor: pointer;
  }
`;

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  background: #fff;
  box-shadow: 0 3px 15px -5px rgba(124, 124, 124, 0.45);
  position: absolute;
  overflow: hidden;
  top: 30px;
`;

export default SimpleMenu;
