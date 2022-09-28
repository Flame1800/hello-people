import React from "react";
import styled from "styled-components";
import UserAvatar from "./UserAvatar";

type Props = {
  user: User;
  size?: string;
};

const UserBadge = ({ user, size = "sm" }: Props) => {
  console.log(user);
  const badge = (
    <div className="caption">
      <div className="name">{user?.attributes?.username}</div>
      {/*<div className="status">онлайн</div>*/}
    </div>
  );

  if (size === "md") {
    return (
      <MediumWrapper>
        <UserAvatar size={size} url={user.attributes.avatar} />
        {badge}
      </MediumWrapper>
    );
  }

  return (
    <Wrapper>
      <UserAvatar url={user.attributes.avatar} size={size} />
      {badge}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;

  .caption {
    margin-left: 10px;

    .name {
      font-style: normal;
      font-weight: 600;
      font-size: 15px;
    }

    .status {
      margin-top: -2px;
      font-weight: 400;
      font-size: 14px;
      color: #949494;
    }
  }
`;

const MediumWrapper = styled(Wrapper)`
  .caption {
    margin-left: 4px !important;
  }
`;

export default UserBadge;
