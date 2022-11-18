import React, { useEffect, useRef } from "react";
import { observer } from "mobx-react-lite";
import _ from "lodash";
import Message from "../MessageCard";
import styled from "styled-components";
import { theme } from "../../../../../../styles/theme";
import roomStore from "../../../stores/roomStore";
import { BeatLoader } from "react-spinners";
import chatStore from "../../../stores/chatStore";
import { MessageType } from "../../../models/Message";
import getSortMessages from "../../../utils/groupMessages";

const MessageFeedContent = () => {
  const { currentMessages } = roomStore;
  const { isWidget, loading, readMessages, user } = chatStore;

  const onScrollHandler = _.throttle(() => {}, 50);
  const messagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesRef.current?.scrollTo(0, messagesRef.current.scrollHeight);
  }, [currentMessages]);

  useEffect(() => {
    const unreadMessagesIds = currentMessages
      .filter((message: MessageType) => {
        return message.isNew && message.author.id !== user?.id;
      })
      .map((m) => m.id);

    if (unreadMessagesIds.length === 0) {
      return;
    }

    readMessages(unreadMessagesIds);
  });

  const messagesDayBlocks = getSortMessages(currentMessages).map(
    ([date, messages]) => {
      return (
        <div key={date}>
          <Date>{date}</Date>
          {messages.map((message) => (
            <Message key={message.id} {...message} />
          ))}
        </div>
      );
    }
  );

  const empty = (
    <Empty>Тут пока нету сообщений, но вы можете это исправить</Empty>
  );

  if (loading) {
    return (
      <Loading>
        <BeatLoader color={theme.color.orange} size={8} />
      </Loading>
    );
  }

  return (
    <MessagesWrapper
      isWidget={isWidget}
      ref={messagesRef}
      onScroll={onScrollHandler}
    >
      {currentMessages?.length ? messagesDayBlocks : empty}
    </MessagesWrapper>
  );
};

const MessagesWrapper = styled.div<{ isWidget: boolean }>`
  padding-top: 100px;
  overflow: hidden scroll;
  margin-bottom: ${(props) => (props.isWidget ? "80px" : "50px")};
  height: calc(100vh - 75px);
  height: -webkit-fill-available;

  @media screen and (max-width: 1000px) {
    margin-bottom: 0 !important;
  }

  &::-webkit-scrollbar {
    width: 16px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(218, 218, 218, 0.8);
    border-radius: 8px;
    border: 5px solid #fff;
  }
`;

const Empty = styled.div`
  text-align: center;
  width: 100%;
  padding: 0 20px;
  font-weight: 700;
  color: ${theme.color.gray};
`;

const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const Date = styled.div`
  margin-left: 20px;
  margin-bottom: 20px;
  font-size: 14px;
  display: flex;
  justify-content: center;
  padding-bottom: 10px;
  color: #5e5e5e;
`;

export default observer(MessageFeedContent);
