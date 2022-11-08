import React, { useEffect } from "react";
import EntryField from "./EntryField";
import { observer } from "mobx-react-lite";
import { MessageRoomEmptyStyle, MessageRoomStyle } from "./MessageRoom.style";
import MessageFeedHeader from "./RoomHeader/MessageFeedHeader";
import MessageFeedContent from "./MessageFeed/MessageFeedContent";
import dialogsStore from "../../stores/dialogsStore";
import AddChatButton from "./AddChatButton/AddChatButton";
import chatStore from "../../stores/chatStore";
import { toJS } from "mobx";

const MessageRoom = () => {
  const { fetchedDialogs, currentDialog } = dialogsStore;
  const { addChat, isWidget } = chatStore;

  console.log("fetchedDialogs", toJS(fetchedDialogs));
  const isMyChat = fetchedDialogs.filter((d) => {
    return d.id === currentDialog?.id;
  })[0];

  useEffect(() => {
    if (currentDialog && currentDialog?.category === "private" && !isMyChat) {
      addChat(currentDialog);
    }
  }, []);

  if (!currentDialog) {
    return (
      <MessageRoomEmptyStyle isWidget={isWidget}>
        <div className="caption">Выберите чат что бы начать общаться</div>
      </MessageRoomEmptyStyle>
    );
  }

  return (
    <MessageRoomStyle isWidget={isWidget}>
      <MessageFeedHeader />
      <MessageFeedContent />
      {isMyChat ? <EntryField /> : <AddChatButton />}
    </MessageRoomStyle>
  );
};

export default observer(MessageRoom);
