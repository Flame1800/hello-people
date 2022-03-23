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
                ? <img src={url} alt="avatar"/>
                : <img src="/img/avatar.svg" alt="avatar"/>
            }
        </Wrapper>
    );
};

const Wrapper = styled.div`

  img {
    width: 46px;
    height: 46px;
    border-radius: 50%;
    object-fit: contain;
  }
`

export default UserAvatar;