import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { UserType } from "../../models/UserType";
import Avatar from "../common/Avatar";

type Props = {
  user: UserType;
};

const UserCard = ({ user }: Props) => {
  return (
    <Link href={`/user/${user.id}`}>
      <WrapperCard className="user">
        <Avatar url={user.avatar} />
        <div className="username">{user.username}</div>
      </WrapperCard>
    </Link>
  );
};

const WrapperCard = styled.a`
  padding: 10px 20px;
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
    background: #efefef;
  }
`;

export default UserCard;
