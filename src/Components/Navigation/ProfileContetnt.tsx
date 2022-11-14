import React, { useState } from "react";
import { API_URL } from "../../Constants/api";
import ProfileIcon from "../SideBar/Nav/NavButtonsSvg/ProfileIcon";
import styled from "styled-components";
import userStore from "../../Stores/UserStore";
import { observer } from "mobx-react-lite";
import Link from "next/link";

const ProfileContetnt = () => {
  const [isCopied, setIsCopied] = useState(false);
  const { user, logout } = userStore;

  const handleCopyProfileLink = () => {
    setIsCopied(true);
    navigator.clipboard.writeText(
      `https://hellopeople.online/user/${user?.id}`
    );

    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  };

  return (
    <Profile>
      <Link href={`/user/${user?.id}`}>
        <a>
          <UserAvatar
            alt={`изображение ${user?.username}`}
            src={user?.avatar ? `${API_URL}${user?.avatar}` : "/img/avatar.svg"}
          />
          <UserName>{user?.username}</UserName>
        </a>
      </Link>

      <UserFooter>
        <UserLink onClick={handleCopyProfileLink}>
          {isCopied ? (
            "Скопированно"
          ) : (
            <>
              {`hellopeople.online/user/${user?.id}`}
              <img src="/img/copy-icon.svg" alt="copy" />
            </>
          )}
        </UserLink>
        <Logout onClick={() => logout()}>
          Выйти <img src="/img/big-logout.svg" alt="иконка выйти" />
        </Logout>
      </UserFooter>
      <Link href={`/user/${user?.id}`}>
        <a>
          <ProfileButton>
            <ProfileIcon />
            Мой профиль
          </ProfileButton>
        </a>
      </Link>
    </Profile>
  );
};

const Profile = styled.div`
  padding-top: 30px;
  display: flex;
  flex-direction: column;
`;

const UserAvatar = styled.img`
  margin-left: 10px;
  width: 72px;
  height: 72px;
  border-radius: 50%;
  object-fit: cover;
`;

const UserName = styled.h1`
  margin-left: 10px;
  margin-top: 15px;
  font-weight: 600;
  font-size: 20px;
`;

const UserFooter = styled.div`
  margin-left: 10px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
`;

const UserLink = styled.span`
  display: flex;
  align-items: center;
  font-size: 15px;
  line-height: 20px;
  color: #868686;

  img {
    margin-left: 10px;
  }
`;

const Logout = styled.div`
  display: flex;
  align-items: center;
  font-size: 15px;
  color: #fc5130;
  font-weight: 600;
`;

const ProfileButton = styled.div`
  height: 60px;
  width: 100%;
  border-radius: 20px;
  border: 1px solid #e8e8e8;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    margin-right: 10px;
    fill: #2d2d2d;
  }
`;

export default observer(ProfileContetnt);
