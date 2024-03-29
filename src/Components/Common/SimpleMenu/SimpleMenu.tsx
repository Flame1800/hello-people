import React, { useEffect } from "react";
import styled from "styled-components";
import { theme } from "../../../../styles/theme";
import useOutput from "../../../Hooks/useOutput";

type Props = {
  children: React.ReactNode;
  isShow: boolean;
  setIsShow: Function;
};

const SimpleMenu = ({ children, isShow, setIsShow }: Props) => {
  useOutput(setIsShow);

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
  display: inline-block;
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
  right: 0;
  z-index: ${theme.order.modal};
`;

export default SimpleMenu;
