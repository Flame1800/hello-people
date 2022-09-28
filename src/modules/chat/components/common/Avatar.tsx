import React from "react";

import style from "./Icon.module.css";
import styled from "styled-components";
import { API_URL } from "../../../../Constants/api";

type IconProps = {
  url?: string;
};

const Avatar: React.FC<IconProps> = (props) => {
  const { url } = props;
  return (
    <Wrapper>
      {url ? (
        <ImageStyle src={API_URL + url} alt="avatar" />
      ) : (
        <ImageStyle src="/img/avatar.svg" alt="avatar" />
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: #fff;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImageStyle = styled.img`
  width: 42px;
  height: 42px;
  border-radius: 50%;
  overflow: hidden;
  object-fit: cover;
`;

export default Avatar;
