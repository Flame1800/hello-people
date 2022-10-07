import React from "react";
import styled from "styled-components";
import UserStore from "../../../Stores/UserStore";
import chatStore from "../../../modules/chat/stores/chatStore";
import UiStateStore from "../../../Stores/UiStateStore";

type Props = {
  currUser: UserAttributes;
};

const OpenChatWithUser = ({ currUser }: Props) => {
  const { user } = UserStore;
  const { openChat } = chatStore;

  const openChatHandle = () => {
    if (!user) {
      return UiStateStore.toggleAuthModal();
    }

    const chatId = [currUser.id, user.id].sort().join("_");

    openChat(chatId, "private");
  };

  return (
    <Wrapper onClick={openChatHandle}>
      <img src="/img/chat.svg" alt="иконка" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 10px;
  border-radius: 10px;
  width: 64px;
  height: 40px;
  border: 1px solid #949494;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 14px;
  color: #585858;
  margin-left: 10px;
  cursor: pointer;
`;

export default OpenChatWithUser;
