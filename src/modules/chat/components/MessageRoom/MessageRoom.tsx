import React, { useEffect } from "react";
import EntryField from "./EntryField";
import { observer } from "mobx-react-lite";
import { MessageRoomEmptyStyle, MessageRoomStyle } from "./MessageRoom.style";
import MessageFeedHeader from "./RoomHeader/MessageFeedHeader";
import MessageFeedContent from "./MessageFeed/MessageFeedContent";
import dialogsStore from "../../stores/dialogsStore";
import AddChatButton from "./AddChatButton/AddChatButton";
import chatStore from "../../stores/chatStore";
import roomStore from "../../stores/roomStore";
import RoomInfo from "../RoomInfo/RoomInfo";
import userStore from "../../../../Stores/UserStore";

const MessageRoom = () => {
  const { dialogs, currentDialog, clearCurrentDialog } = dialogsStore;
  const { addChat, isWidget } = chatStore;

  const isMyChat = dialogs.filter((d) => {
    return d.id === currentDialog?.id;
  })[0];

  const linkCategory =
    currentDialog?.category === "private"
      ? "user"
      : `${currentDialog?.category}s`;

  const linkId =
    currentDialog?.category === "private"
      ? currentDialog?.objectId
          .split("_")
          .find((id) => Number(id) !== userStore.user?.id)
      : `id/${currentDialog?.objectId}`;

  const link = `/${linkCategory}/${linkId}`;

  useEffect(() => {
    if (currentDialog && currentDialog?.category === "private" && !isMyChat) {
      addChat(currentDialog);
    }
  }, []);

  useEffect(() => {
    return () => {
      clearCurrentDialog();
    };
  }, []);

  if (!currentDialog) {
    return (
      <MessageRoomEmptyStyle isWidget={isWidget}>
        <div className="caption">Выберите чат что бы начать общаться</div>
      </MessageRoomEmptyStyle>
    );
  }

  if (roomStore.chatInfoModal) {
    return (
      <MessageRoomStyle isWidget={isWidget}>
        <RoomInfo link={link} />
      </MessageRoomStyle>
    );
  }

  return (
    <MessageRoomStyle isWidget={isWidget}>
      <MessageFeedHeader link={link} />
      <MessageFeedContent />
      {isMyChat ? <EntryField /> : <AddChatButton />}
    </MessageRoomStyle>
  );
};

export default observer(MessageRoom);
