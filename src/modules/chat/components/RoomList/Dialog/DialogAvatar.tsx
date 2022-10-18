import React from "react";
import Avatar from "../../common/Avatar";
import { CategoryType } from "../../../models/CategoryType";
import styled, { css } from "styled-components";
import MeetsSvg from "../TabSvgIcons/MeetsSvg";

type Props = {
  url?: string;
  theme?: string;
  type?: CategoryType;
  size?: "large" | "medium" | "small";
};

const DialogAvatar = ({ url, type, theme, size }: Props) => {
  if (type === "meet") {
    return (
      <Wrapper size={size || "small"} theme={theme}>
        <MeetsSvg />
      </Wrapper>
    );
  }

  return <Avatar url={url} size={size} />;
};

const Wrapper = styled.div<{
  theme: string;
  size: "large" | "medium" | "small";
}>`
  background: ${(props) => (props.theme ? props.theme : "#505050")};
  max-width: 42px;
  width: 100%;
  height: 42px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 9px;
  color: #fff;

  ${(props) =>
    props.size === "large" &&
    css`
      max-width: 82px;
      width: 100%;
      height: 82px;
    `}

  svg {
    fill: #fff;
  }
`;

export default DialogAvatar;
