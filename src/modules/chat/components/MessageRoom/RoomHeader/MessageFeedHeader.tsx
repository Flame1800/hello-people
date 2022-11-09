import React, { useState } from "react";
import Avatar from "../../common/Avatar";
import RoomInfo from "../../RoomInfo";
import chatStore from "../../../stores/chatStore";
import {
  MenuSvg,
  MessageFeedHeaderStyle,
  UserContainer,
  UserInfo,
  UserName,
  UserStatus,
} from "./MessageFeedHeader.style";
import BackSvg from "./back.svg";
import dialogsStore from "../../../stores/dialogsStore";
import roomStore from "../../../stores/roomStore";
import { observer } from "mobx-react-lite";
import LinkWrapper from "../../common/LinkWrapper";
import { useRouter } from "next/router";
import DialogAvatar from "../../RoomList/Dialog/DialogAvatar";
import { categoryTitles } from "../../RoomList/Dialog/Dialog";

const MessageFeedHeader = () => {
  const { currentDialog } = dialogsStore;
  const { chatUsers } = roomStore;

  const route = useRouter();

  const [modalActive, setModalActive] = useState(false);
  const link = `${route.basePath}/${currentDialog?.category}s/${currentDialog?.objectId}`;

  const goBackHandle = () => {
    chatStore.leaveChat(); // clear dialog
  };

  const userInfoComponent = (
    <UserInfo>
      <LinkWrapper href={link}>
        <UserName>{currentDialog?.abbTitle ?? "Нет названия"}</UserName>
      </LinkWrapper>

      <UserStatus>
        {currentDialog && categoryTitles[currentDialog.category]}
      </UserStatus>
    </UserInfo>
  );

  const modal = <RoomInfo active={modalActive} setActive={setModalActive} />;

  return (
    <MessageFeedHeaderStyle>
      <BackSvg onClick={goBackHandle} />
      <UserContainer>
        <LinkWrapper href={link}>
          <DialogAvatar
            theme={currentDialog?.theme}
            type={currentDialog?.category}
            url={currentDialog?.cover}
          />
        </LinkWrapper>
        {userInfoComponent}
      </UserContainer>
      <MenuSvg
        src="/img/menu.svg"
        alt="back"
        onClick={() => setModalActive(true)}
      />
      {modal}
    </MessageFeedHeaderStyle>
  );
};

export default observer(MessageFeedHeader);
