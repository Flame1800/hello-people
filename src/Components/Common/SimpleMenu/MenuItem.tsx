import React from "react";
import styled from "styled-components";

type PropsItem = {
  onClick: Function;
  title: string;
  color?: string;
};

const MenuItem = ({ onClick, title, color }: PropsItem) => {
  return (
    <MenuItemStyle color={color ?? "black"} onClick={() => onClick()}>
      {title}
    </MenuItemStyle>
  );
};

const MenuItemStyle = styled.div<{ color: string }>`
  border-top: 1px solid #dcdcdc;
  width: 100%;
  padding: 12px 30px;
  font-size: 16px;
  cursor: pointer;
  text-align: center;
  font-weight: 500;
  color: ${(props) => props.color};

  &:nth-child(1) {
    border-top: none;
  }

  &:hover {
    background: rgba(231, 231, 231, 0.37);
  }
`;

export default MenuItem;
