import React from 'react';

import style from './Icon.module.css';
import styled from "styled-components";

type IconProps = {
    url?: string,
};

const UserAvatar: React.FC<IconProps> = (props) => {
    const {url} = props;
    return (
        <Wrapper>
            {url
                ? <ImageStyle src={url} alt="avatar"/>
                : <ImageStyle src="/img/avatar.svg" alt="avatar"/>
            }
        </Wrapper>
    );
};

const Wrapper = styled.div`
  background: #fff;
  width: 46px;
  height: 46px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ImageStyle = styled.img`
  width: 46px;
  height: 46px;
  border-radius: 50%;
  overflow: hidden;
  object-fit: contain;
`

export default UserAvatar;