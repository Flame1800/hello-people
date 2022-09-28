import React from "react";
import Link from "next/link";
import UserAvatar from "../UserAvatar";
import styled from "styled-components";

const UserCardMini = ({ user }: { user: UserAttributes }) => {
  return (
    <Link href={`/user/${user.id}`}>
      <WrapperCard className="user">
        <UserAvatar url={user.avatar} />
        <div className="username">{user.username}</div>
      </WrapperCard>
    </Link>
  );
};

const WrapperCard = styled.a`
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
  margin: 10px 0;
  border-radius: 16px;
  display: flex;
  align-items: center;
  width: 100%;

  .username {
    margin-left: 15px;
  }

  &:hover {
    background: #f5f5f5;
  }
`;

export default UserCardMini;
