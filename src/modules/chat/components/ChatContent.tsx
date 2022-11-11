import React from "react";
import RoomList from "./RoomList/Dialogs";
import { observer } from "mobx-react-lite";
import MessageRoom from "./MessageRoom";
import styled from "styled-components";
import dialogsStore from "../stores/dialogsStore";

type ChatProps = {
  isWidget?: boolean;
};

const ChatContent = ({ isWidget }: ChatProps) => {
  const { currentDialog } = dialogsStore;

  const contentFull = (
    <>
      <RoomList />
      <MessageRoom />
    </>
  );

  const contentWidget = currentDialog ? <MessageRoom /> : <RoomList />;
  return <ChatStyle>{isWidget ? contentWidget : contentFull}</ChatStyle>;
};

const ChatStyle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export default observer(ChatContent);
