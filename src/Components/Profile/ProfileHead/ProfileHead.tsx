import React, { useState } from "react";
import styled from "styled-components";
import Familiars from "./Familiars";
import ProfileButtons from "../ProfileButtons";
import UserStore from "../../../Stores/UserStore";
import { observer } from "mobx-react-lite";
import UserAvatar from "../../User/UserAvatar";
import SimpleMenu from "../../Common/SimpleMenu/SimpleMenu";
import MenuItem from "../../Common/SimpleMenu/MenuItem";
import { theme } from "../../../../styles/theme";
import { useRouter } from "next/router";

const ProfileHead = ({ user }: { user: UserAttributes }) => {
  const [isShowMenu, setIsShowMenu] = useState(false);

  const me = UserStore.user;
  const isMe = user.id === me?.id;

  const router = useRouter();

  const logout = () => {
    UserStore.logout();
    router.push(`/events`);
    setIsShowMenu(false);
  };

  const dropdownMenu = (
    <SimpleMenu isShow={isShowMenu} setIsShow={setIsShowMenu}>
      <MenuItem onClick={logout} title="Выйти" color={theme.color.orange} />
    </SimpleMenu>
  );

  return (
    <Wrapper>
      <div className="head">
        <UserAvatar size="lg" url={user.avatar} />
        <div className="info">
          <div className="wrap-name">
            <div className="name">{user.username}</div>
            {isMe && dropdownMenu}
          </div>
          <div className="first-name">{user.name}</div>
          {me && <ProfileButtons user={user} me={me} />}
          <div>
            <Familiars user={user} />
          </div>
        </div>
      </div>
      {user.description && (
        <div className="description">
          <div className="title-desc">Обо мне:</div>
          {user.description}
        </div>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1000px;
  margin: auto;
  padding: 40px 5%;
  border-radius: 32px;
  background: #fff;

  @media (max-width: 1424px) {
    padding: 40px 5%;
  }

  .info {
    margin-left: 15px;
  }

  @media (max-width: 1424px) {
    background: #fff;
    padding: 20px 0;
  }

  .head {
    display: flex;
    justify-content: start;
    align-items: center;
    margin-bottom: 10px;
  }

  .wrap-name {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
  }

  .avatar {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    margin-bottom: 15px;
    margin-right: 15px;
  }

  .name {
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
  }

  .description {
    display: flex;
    flex-direction: column;
    white-space: pre-line;

    .title-desc {
      font-weight: 800;
      font-size: 15px;
      color: #000000;
      margin-bottom: 5px;
    }

    .text-desc {
      display: flex;
      word-wrap: break-word;

      & {
        display: inline-block;
      }
    }

    max-width: 330px;
    font-weight: 600;
    font-size: 14px;
    line-height: 19px;
    color: #585858;

    @media (min-width: 740px) {
      margin-left: 60px;
    }
  }
`;

export default observer(ProfileHead);
