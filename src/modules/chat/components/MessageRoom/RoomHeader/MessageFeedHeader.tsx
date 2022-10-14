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

const MessageFeedHeader = () => {
  const { currentDialog } = dialogsStore;
  const { onlineUsers } = roomStore;

  const route = useRouter();

  const [modalActive, setModalActive] = useState(false);
  const link = `${route.basePath}/${currentDialog?.category}s/${currentDialog?.id}`;

  const goBackHandle = () => {
    chatStore.leaveChat(); // clear dialog
  };

  const userInfoComponent = (
    <UserInfo>
      <LinkWrapper href={link}>
        <UserName>{currentDialog?.abbTitle}</UserName>
      </LinkWrapper>

      <UserStatus>в сети {onlineUsers?.length} человек</UserStatus>
    </UserInfo>
  );

  const modal = <RoomInfo active={modalActive} setActive={setModalActive} />;

  return (
    <MessageFeedHeaderStyle>
      <UserContainer>
        <BackSvg onClick={goBackHandle} />
        <LinkWrapper href={link}>
          <Avatar url={currentDialog?.cover} />
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
