import React, { useRef } from "react";
import chatStore from "../../../stores/chatStore";
import CheckMarkICon from "./CheckMarkICon";
import {
  MessageWrapper,
  MessageStyle,
  MessageInfo,
  MessageAvatar,
  MeMessageWrapper,
  MessageUserName,
  MessageTextStyle,
  UnreadMark,
} from "./MessageStyle";
import { MessageType } from "../../../models/Message";
import dialogsStore from "../../../stores/dialogsStore";
import makeMsgDate from "../../../utils/makeMsgDate";
import { API_URL } from "../../../../../Constants/api";
import { observer } from "mobx-react-lite";

const Message = (props: MessageType) => {
  const elementRef = useRef<HTMLDivElement>(null);

  const { text, date, isNew, author } = props;
  const { user } = chatStore;
  const { currentDialog } = dialogsStore;
  const currentUser = author;

  const isMe = currentUser?.id === user?.id;

  const avatar = currentDialog?.category !== "private" && !isMe && (
    <MessageAvatar
      alt="avatar"
      src={
        currentUser?.avatar ? API_URL + currentUser?.avatar : "/img/avatar.svg"
      }
    />
  );

  const userNameInMessage = !isMe && currentDialog?.category !== "private" && (
    <MessageUserName>{currentUser?.username}</MessageUserName>
  );

  const messageInfo = (
    <MessageInfo>
      <p className="date">{makeMsgDate(date)}</p>
      {/*TODO: добавить позже*/}
      {/*{isMe && <CheckMarkICon active={!isNew} />}*/}
    </MessageInfo>
  );

  const content = (
    <>
      {avatar}
      <MessageStyle>
        {userNameInMessage}
        <MessageTextStyle>
          {text}
          {messageInfo}
        </MessageTextStyle>
        {!isMe && isNew && <UnreadMark />}
      </MessageStyle>
    </>
  );

  if (currentUser?.id === user?.id) {
    return <MeMessageWrapper ref={elementRef}>{content}</MeMessageWrapper>;
  }
  return <MessageWrapper ref={elementRef}>{content}</MessageWrapper>;
};

export default observer(Message);
