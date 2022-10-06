import React from "react";
import chatStore from "../../../stores/chatStore";
import CheckMarkICon from "./CheckMarkICon";
import {
  MessageWrapper,
  MessageStyle,
  MessageInfo,
  MessageAvatar,
  MeMessageWrapper,
} from "./MessageStyle";
import { MessageType } from "../../../models/Message";
import dialogsStore from "../../../stores/dialogsStore";
import makeMsgDate from "../../../utils/makeMsgDate";
import roomStore from "../../../stores/roomStore";
import { API_URL } from "../../../../../Constants/api";

const Message = (props: MessageType) => {
  const { text, date, isRead, authorId } = props;
  const { user } = chatStore;
  const { currentDialog } = dialogsStore;
  const { chatUsers } = roomStore;

  const currentUser = chatUsers.filter((u) => u.id === Number(authorId))[0];

  const avatar = currentDialog?.category !== "private" && (
    <MessageAvatar alt="avatar" src={API_URL + currentUser?.avatar} />
  );

  const userNameInMessage = currentUser?.id !== user.id && (
    <>{currentUser?.username}</>
  );

  const messageInfo = (
    <MessageInfo>
      <p className="date">{makeMsgDate(date)}</p>
      {currentUser?.id === user.id && <CheckMarkICon active={isRead} />}
    </MessageInfo>
  );

  const content = (
    <>
      {avatar}
      <MessageStyle>
        {userNameInMessage}
        <>
          {text}
          {messageInfo}
        </>
      </MessageStyle>
    </>
  );

  if (currentUser?.id === user.id) {
    return <MeMessageWrapper>{content}</MeMessageWrapper>;
  }

  return <MessageWrapper>{content}</MessageWrapper>;
};

export default Message;
