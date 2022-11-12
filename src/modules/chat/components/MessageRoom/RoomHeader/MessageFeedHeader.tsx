import React, { useState } from "react";
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
import userStore from "../../../../../Stores/UserStore";

const MessageFeedHeader = () => {
  const { currentDialog } = dialogsStore;

  const route = useRouter();

  const [modalActive, setModalActive] = useState(false);

  const linkCategory =
    currentDialog?.category === "private"
      ? "user"
      : `${currentDialog?.category}s`;

  const linkId =
    currentDialog?.category === "private"
      ? currentDialog?.objectId
          .split("_")
          .find((id) => Number(id) !== userStore.user?.id)
      : currentDialog?.objectId;

  const link = `${route.basePath}/${linkCategory}/${linkId}`;

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

  const modal = (
    <RoomInfo link={link} active={modalActive} setActive={setModalActive} />
  );

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
