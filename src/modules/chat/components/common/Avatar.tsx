import React from "react";

import style from "./Icon.module.css";
import styled, { css } from "styled-components";
import { API_URL } from "../../../../Constants/api";

type IconProps = {
  url?: string;
  size?: "large" | "medium" | "small";
};

const Avatar: React.FC<IconProps> = (props) => {
  const { url, size } = props;
  return (
    <Wrapper size={size || "small"}>
      <ImageStyle src={url ? API_URL + url : "/img/avatar.svg"} alt="avatar" />
    </Wrapper>
  );
};

const Wrapper = styled.div<{ size: "large" | "medium" | "small" }>`
  background: #fff;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  ${(props) =>
    props.size === "large" &&
    css`
      width: 82px;
      height: 82px;
    `}
`;

const ImageStyle = styled.img`
  width: inherit;
  height: inherit;
  border-radius: 50%;
  overflow: hidden;
  object-fit: cover;
`;

export default Avatar;
