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
import { isMobile } from "react-device-detect";

const MessageFeedHeader = ({ link }: { link: string }) => {
  const { currentDialog } = dialogsStore;

  const router = useRouter();

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
        onClick={() => roomStore.toggleChatInfoModal()}
      />
    </MessageFeedHeaderStyle>
  );
};

export default observer(MessageFeedHeader);
