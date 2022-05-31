import React from 'react';
import styled from "styled-components";
import API from "../../Libs/API";

type IconProps = {
    url?: string,
    size?: string
};

const UserAvatar: React.FC<IconProps> = ({url, size = 'sm'}) => {

    const content = (
        <>
            {url
                ? <ImageStyle src={API.url + url} alt="avatar"/>
                : <ImageStyle src="/img/avatar.svg" alt="avatar"/>
            }
        </>
    )

    if (size === 'md') {
        return (<MediumSize>{content}</MediumSize>)
    }

    if (size === 'lg') {
        return (<LargeSize>{content}</LargeSize>)
    }

    return (<Wrapper>{content}</Wrapper>);
};

const Wrapper = styled.div`
  background: #fff;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

const MediumSize = styled(Wrapper)`
  width: 66px;
  height: 66px;
`


const LargeSize = styled(Wrapper)`
  width: 120px;
  height: 120px;
`

const ImageStyle = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  overflow: hidden;
  object-fit: cover;
`


export default UserAvatar;
