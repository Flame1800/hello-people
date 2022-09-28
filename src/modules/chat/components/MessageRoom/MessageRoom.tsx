import React, { useEffect, useRef } from "react";
import EntryField from "./EntryField";
import { observer } from "mobx-react-lite";
import ArrowToBottom from "./ArrowToBottom/ArrowToBottom";
import { MessageRoomEmptyStyle, MessageRoomStyle } from "./MessageRoom.style";
import MessageFeedHeader from "./RoomHeader/MessageFeedHeader";
import MessageFeedContent from "./MessageFeed/MessageFeedContent";
import dialogsStore from "../../stores/dialogsStore";
import AddChatButton from "./AddChatButton/AddChatButton";
import chatStore from "../../stores/chatStore";

const MessageRoom = () => {
  const messagesRef = useRef<HTMLDivElement>(null);
  const { dialogs, currentDialog } = dialogsStore;
  const { isWidget } = chatStore;

  const isMyChat = dialogs.filter((d) => d.id === currentDialog?.id)[0];

  if (!currentDialog) {
    return (
      <MessageRoomEmptyStyle isWidget={isWidget}>
        <div className="caption">Выберите чат что бы начать общаться</div>
      </MessageRoomEmptyStyle>
    );
  }

  return (
    <MessageRoomStyle isWidget={isWidget}>
      <ArrowToBottom messagesRef={messagesRef} />
      <MessageFeedHeader />
      <MessageFeedContent />
      {isMyChat ? <EntryField /> : <AddChatButton />}
    </MessageRoomStyle>
  );
};

export default observer(MessageRoom);
