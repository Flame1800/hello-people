import React, { useEffect, useRef } from "react";
import { observer } from "mobx-react-lite";
import _ from "lodash";
import Message from "../MessageCard";
import styled from "styled-components";
import { theme } from "../../../../../../styles/theme";
import messagesStore from "../../../stores/roomStore";
import dialogsStore from "../../../stores/dialogsStore";

const MessageFeedContent = () => {
  const { currentMessages } = messagesStore;

  const onScrollHandler = _.throttle(() => {}, 50);
  const messagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesRef.current?.scrollTo(0, messagesRef.current.scrollHeight);
  }, [currentMessages]);

  const messageComponents = currentMessages?.map((message) => (
    <Message key={message.entityId} {...message} />
  ));

  const empty = (
    <Empty>Тут пока нету сообщений, но вы можете это исправить</Empty>
  );

  return (
    <MessagesWrapper ref={messagesRef} onScroll={onScrollHandler}>
      {currentMessages?.length ? messageComponents : empty}
    </MessagesWrapper>
  );
};

const MessagesWrapper = styled.div`
  padding-top: 30px;
  overflow: hidden scroll;
  margin-bottom: 80px;

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

export default observer(MessageFeedContent);
