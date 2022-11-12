import React from "react";
import styled from "styled-components";
import UserStore from "../../../Stores/UserStore";
import chatStore from "../../../modules/chat/stores/chatStore";
import UiStateStore from "../../../Stores/UiStateStore";
import { isMobile } from "react-device-detect";
import { useRouter } from "next/router";
import { observer } from "mobx-react-lite";
import dialogsStore from "../../../modules/chat/stores/dialogsStore";

type Props = {
  currUser: User;
};

const OpenChatWithUser = ({ currUser }: Props) => {
  const router = useRouter();
  const { user } = UserStore;
  const { openChat, leaveChat } = chatStore;
  const { currentDialog } = dialogsStore;

  const thisChatIsOpen =
    currentDialog?.objectId === `${user?.id}_${currUser.id}` ||
    currentDialog?.objectId === `${currUser.id}_${user?.id}`;

  console.log("thisChatIsOpen", thisChatIsOpen);

  const openChatHandle = () => {
    if (!user) {
      return UiStateStore.toggleAuthModal();
    }

    const chatId = [currUser.id, user.id].sort().join("_");

    if (thisChatIsOpen) {
      return leaveChat();
    }

    if (isMobile) {
      openChat(chatId, "private");
      return router.push("/messenger");
    }

    return openChat(chatId, "private");
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

export default observer(OpenChatWithUser);
