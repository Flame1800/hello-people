import React from "react";
import styled from "styled-components";
import { theme } from "../../../../styles/theme";

type Props = {
  children: React.ReactNode;
};

const SimpleMenu = ({ children }: Props) => {
  return (
    <Wrapper>
      <Menu>{children}</Menu>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  background: #fff;
  box-shadow: ${theme.boxShadow.mainComponent};
`;

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  background: #fff;
  box-shadow: ${theme.boxShadow.mainComponent};
`;

export default SimpleMenu;
