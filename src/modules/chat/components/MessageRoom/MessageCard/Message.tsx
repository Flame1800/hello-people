import React, { memo } from "react";
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
} from "./MessageStyle";
import { MessageType } from "../../../models/Message";
import dialogsStore from "../../../stores/dialogsStore";
import makeMsgDate from "../../../utils/makeMsgDate";
import roomStore from "../../../stores/roomStore";
import { API_URL } from "../../../../../Constants/api";
import { observer } from "mobx-react-lite";
import { toJS } from "mobx";

const Message = (props: MessageType) => {
  const { text, date, isRead, authorId } = props;
  const { user } = chatStore;
  const { currentDialog } = dialogsStore;
  const { chatUsers } = roomStore;

  const currentUser = chatUsers.filter((u) => u.id === Number(authorId))[0];
  console.log(toJS(currentUser));

  const avatar = currentDialog?.category !== "private" && (
    <MessageAvatar alt="avatar" src={API_URL + currentUser?.avatar} />
  );

  const userNameInMessage = currentUser?.id !== user.id && (
    <MessageUserName>{currentUser?.username}</MessageUserName>
  );

  const messageInfo = (
    <MessageInfo>
      <p className="date">{makeMsgDate(date)}</p>
      {currentUser?.id === user?.id && <CheckMarkICon active={isRead} />}
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
      </MessageStyle>
    </>
  );

  if (currentUser?.id === user.id) {
    return <MeMessageWrapper>{content}</MeMessageWrapper>;
  }

  return <MessageWrapper>{content}</MessageWrapper>;
};

export default observer(Message);
