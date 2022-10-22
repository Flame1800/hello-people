import React, { useEffect, useRef } from "react";
import { observer } from "mobx-react-lite";
import _ from "lodash";
import Message from "../MessageCard";
import styled from "styled-components";
import { theme } from "../../../../../../styles/theme";
import messagesStore from "../../../stores/roomStore";
import dialogsStore from "../../../stores/dialogsStore";
import { BeatLoader } from "react-spinners";
import chatStore from "../../../stores/chatStore";
import { toJS } from "mobx";
import { DateTime } from "luxon";

const MessageFeedContent = () => {
  const { currentMessages } = messagesStore;
  const { isWidget, loading } = chatStore;

  const onScrollHandler = _.throttle(() => {}, 50);
  const messagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesRef.current?.scrollTo(0, messagesRef.current.scrollHeight);
  }, [currentMessages]);

  const MessagesWithDayField = currentMessages.map((item: any) => {
    const dt = DateTime.fromISO(item.date);
    const dateString = dt.setLocale("ru").toLocaleString({
      month: "long",
      day: "numeric",
      year: "numeric",
    });

    return { ...item, dateString };
  });

  const sortedMessages = _.groupBy(
    MessagesWithDayField,
    (item) => item.dateString
  );

  const messgaesDayBlocks = Object.entries(sortedMessages).map(
    ([date, messages]) => {
      return (
        <>
          <Date>{date}</Date>
          {messages.map((message) => (
            <Message key={message.entityId} {...message} />
          ))}
        </>
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
      {currentMessages?.length ? messgaesDayBlocks : empty}
    </MessagesWrapper>
  );
};

const MessagesWrapper = styled.div<{ isWidget: boolean }>`
  padding-top: 30px;
  overflow: hidden scroll;
  margin-bottom: ${(props) => (props.isWidget ? "80px" : "50px")};

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
  margin-bottom: 20px;
  font-size: 14px;
  display: flex;
  justify-content: center;
  padding-bottom: 10px;
  color: #5e5e5e;
`;

export default observer(MessageFeedContent);
