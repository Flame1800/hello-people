import React from "react";
import styled from "styled-components";
import UserAvatar from "./UserAvatar";
import Link from "next/link";

type Props = {
  user: User;
  size?: string;
};

const UserBadge = ({ user, size = "sm" }: Props) => {
  console.log(user);

  const badge = (
    <Link href={`/user/${user.id}`}>
      <a>
        <UserAvatar size={size} url={user.attributes.avatar} />
        <div className="caption">
          <div className="name">{user?.attributes?.username}</div>
          {/*<div className="status">онлайн</div>*/}
        </div>
      </a>
    </Link>
  );

  if (size === "md") {
    return <MediumWrapper>{badge}</MediumWrapper>;
  }

  return <Wrapper>{badge}</Wrapper>;
};

const Wrapper = styled.div`
  a {
    display: flex;
    align-items: center;
  }

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
