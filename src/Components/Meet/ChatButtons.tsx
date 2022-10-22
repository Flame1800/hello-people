import React from "react";
import styled from "styled-components";
import UserStore from "../../Stores/UserStore";
import chatStore from "../../modules/chat/stores/chatStore";
import dialogsStore from "../../modules/chat/stores/dialogsStore";
import UiStateStore from "../../Stores/UiStateStore";
import { isMobile } from "react-device-detect";
import { useRouter } from "next/router";

type Props = {
  meetId: number;
};

const ChatButtons = ({ meetId }: Props) => {
  const router = useRouter();
  const { user } = UserStore;
  const { openChat, leaveChat } = chatStore;
  const { currentDialog } = dialogsStore;

  const thisChatIsOpen = currentDialog?.id === meetId;

  const openChatHandle = () => {
    if (!user) {
      return UiStateStore.toggleAuthModal();
    }

    if (thisChatIsOpen) {
      return leaveChat();
    }

    openChat(meetId, "meet");
    if (isMobile) {
      return router.push("/messenger");
    }
  };

  return (
    <Wrapper onClick={openChatHandle}>
      <div className="btn btn-messenger">
        чат
        <img src="/img/message-blue-icon.svg" alt="smile" />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;

  .btn {
    width: 100px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  .btn-smile {
    background: #ffcbcb;
    border-radius: 6px 0 0 6px;
  }

  .btn-messenger {
    background: #d9f1ff;
    color: #005480;
    border-radius: 6px;
    font-size: 18px;

    img {
      margin-left: 6px;
    }
  }
`;

export default ChatButtons;
