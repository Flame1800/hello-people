import React, { useState } from "react";
import Familiars from "./Familiars";
import ProfileButtons from "../ProfileButtons";
import UserStore from "../../../Stores/UserStore";
import { observer } from "mobx-react-lite";
import UserAvatar from "../../User/UserAvatar";
import SimpleMenu from "../../Common/SimpleMenu/SimpleMenu";
import MenuItem from "../../Common/SimpleMenu/MenuItem";
import { theme } from "../../../../styles/theme";
import { useRouter } from "next/router";
import {
  Header,
  WrapperHead,
  Name,
  Description,
  Info,
  Meta,
} from "./ProfileHead.style";
import { isMobile } from "react-device-detect";
import { toJS } from "mobx";

const ProfileHead = ({ user }: { user: User }) => {
  const [isShowMenu, setIsShowMenu] = useState(false);

  const me = UserStore.user;
  const router = useRouter();

  const isMe = me?.id === user.id;

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
    <WrapperHead>
      <Header>
        <div>
          <UserAvatar size="lg" url={user.avatar} />
        </div>
        <Info>
          <Name>
            {user.username ?? "Пользователь не найден"}
            {isMe && !isMobile && dropdownMenu}
          </Name>
          <div className="first-name">{user.name}</div>
          <Description>{user.description}</Description>
        </Info>
      </Header>
      <Meta>
        {me && (
          <>
            <ProfileButtons user={user} me={me} />
            <Familiars user={user} />
          </>
        )}
      </Meta>
    </WrapperHead>
  );
};

export default observer(ProfileHead);
