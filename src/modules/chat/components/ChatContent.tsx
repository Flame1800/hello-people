import React, { useState } from "react";
import RoomList from "./RoomList/RoomList";
import { observer } from "mobx-react-lite";
import MessageRoom from "./MessageRoom";
import { CategoryType } from "../models/CategoryType";
import styled from "styled-components";
import { UserType } from "../models/UserType";
import dialogsStore from "../stores/dialogsStore";
import useChat from "../hooks/useChat";

type ChatProps = {
  apiUrl: string;
  user: UserType;
  isWidget?: boolean;
};

const ChatContent = ({ apiUrl, isWidget }: ChatProps) => {
  const { currentDialog } = dialogsStore;
  const [currentCategory, setCurrentCategory] = useState<CategoryType>("all");

  useChat(apiUrl);

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
`;

export default observer(ChatContent);
