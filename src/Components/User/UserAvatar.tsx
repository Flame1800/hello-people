import React from 'react';
import styled from "styled-components";

type IconProps = {
    url?: string,
    size?: string
};

const UserAvatar: React.FC<IconProps> = ({url, size = 'sm'}) => {

    const content = (
        <>
            {url
                ? <ImageStyle src={url} alt="avatar"/>
                : <ImageStyle src="/img/avatar.svg" alt="avatar"/>
            }
        </>
    )

    if (size === 'md') {
        return (<MediumSize>{content}</MediumSize>)
    }

    return (<Wrapper>{content}</Wrapper>);
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

const MediumSize = styled(Wrapper)`
  width: 46px;
  height: 46px;
`

const ImageStyle = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  overflow: hidden;
  object-fit: contain;
`


export default UserAvatar;
