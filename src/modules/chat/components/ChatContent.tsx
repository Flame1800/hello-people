import React, { useState } from "react";
import RoomList from "./RoomList/Dialogs";
import { observer } from "mobx-react-lite";
import MessageRoom from "./MessageRoom";
import { CategoryType } from "../models/CategoryType";
import styled from "styled-components";
import dialogsStore from "../stores/dialogsStore";

type ChatProps = {
  isWidget?: boolean;
};

const ChatContent = ({ isWidget }: ChatProps) => {
  const { currentDialog } = dialogsStore;
  const [currentCategory, setCurrentCategory] = useState<CategoryType>("all");

  const roomList = (
    <RoomList
      category={currentCategory}
      currentCategory={currentCategory}
      setCurrentCategory={setCurrentCategory}
    />
  );

  const contentFull = (
    <>
      {roomList}
      <MessageRoom />
    </>
  );

  const contentWidget = currentDialog ? <MessageRoom /> : roomList;

  return <ChatStyle>{isWidget ? contentWidget : contentFull}</ChatStyle>;
};

const ChatStyle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export default observer(ChatContent);
