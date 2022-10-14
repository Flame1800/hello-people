import React, { memo } from "react";
import styled from "styled-components";
import API from "../../Helpers/API";

type IconProps = {
  url?: string;
  size?: string;
};

const UserAvatar: React.FC<IconProps> = ({ url, size = "sm" }) => {
  const content = (
    <>
      {url ? (
        <ImageStyle src={API.url + url} alt="avatar" />
      ) : (
        <ImageStyle src="/img/avatar.svg" alt="avatar" />
      )}
    </>
  );

  if (size === "xs") {
    return <ExtraSmallSize>{content}</ExtraSmallSize>;
  }

  if (size === "md") {
    return <MediumSize>{content}</MediumSize>;
  }

  if (size === "lg") {
    return <LargeSize>{content}</LargeSize>;
  }

  return <Wrapper>{content}</Wrapper>;
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
`;

const ExtraSmallSize = styled(Wrapper)`
  width: 24px;
  height: 24px;
`;

const MediumSize = styled(Wrapper)`
  width: 64px;
  height: 64px;
`;

const LargeSize = styled(Wrapper)`
  width: 128px;
  height: 128px;
`;

const ImageStyle = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  overflow: hidden;
  object-fit: cover;
`;

export default memo(UserAvatar);
