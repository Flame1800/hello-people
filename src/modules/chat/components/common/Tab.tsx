import React from "react";
import styled from "styled-components";
import { theme } from "../../../../../styles/theme";

type TabProps = {
  active: boolean;
};

const Tab: React.FC<TabProps> = ({ children, active }) => {
  return <Wrapper active={active}>{children}</Wrapper>;
};

const Wrapper = styled.div<{ active: boolean }>`
  border: ${({ active }) =>
    active ? "1px solid #FAFAFA" : "1px solid #c5c5c5"};
  border-radius: 16px;
  padding: 4px 12px;
  height: 32px;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  display: inline-block;
  color: ${({ active }) => (active ? "white" : "#696969")};
  background: ${({ active }) => (active ? theme.color.gray : "none")};
  cursor: pointer;

  &:hover {
    background: ${({ active }) => (active ? theme.color.gray : "#FAFAFA")};
  }

  svg {
    width: 22px;
    height: 22px;
    fill: ${({ active }) => (active ? "white" : "#949494")};
  }
`;

export default Tab;
