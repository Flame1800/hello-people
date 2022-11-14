import React, { useLayoutEffect, useRef } from "react";
import styled from "styled-components";
import UserStore from "../../Stores/UserStore";
import chatStore from "../../modules/chat/stores/chatStore";
import dialogsStore from "../../modules/chat/stores/dialogsStore";
import UiStateStore from "../../Stores/UiStateStore";
import { isMobile } from "react-device-detect";
import { useRouter } from "next/router";
import { theme } from "../../../styles/theme";
import API from "../../Helpers/API";

type Props = {
  meet: MeetType;
};

const ChatButtons = ({ meet }: Props) => {
  const meetId = meet.id;
  const router = useRouter();
  const { user } = UserStore;
  const { openChat, leaveChat } = chatStore;
  const { currentDialog } = dialogsStore;

  const vkRef = useRef<HTMLHeadingElement>(null);
  const thisChatIsOpen = currentDialog?.id === meetId;

  const openChatHandle = () => {
    if (!user) {
      return UiStateStore.toggleAuthModal();
    }

    if (thisChatIsOpen) {
      return leaveChat();
    }

    openChat(String(meetId), "meet");
    if (isMobile) {
      return router.push("/messenger");
    }
  };

  useLayoutEffect(() => {
    vkRef.current.innerHTML = VK.Share.button(
      {
        url: `${API.url}/meets/id/${meet.id}`,
        title: meet.attributes.title,
        noparse: false,
      },
      {
        type: "custom",
        text: "<img src='/img/vk-logo.svg' width='24' height='24' />",
      }
    );
  }, []);

  return (
    <Wrapper>
      <ChatBtn onClick={openChatHandle}>
        чат
        <img src="/img/message-blue-icon.svg" alt="smile" />
      </ChatBtn>
      <div className="vk-share-btn" ref={vkRef}></div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;

  .vk-share-btn {
    margin-left: 20px;
    display: flex;
    align-items: center;

    span {
      display: flex;
      align-items: center;
    }
  }
`;

const ChatBtn = styled.div`
  display: flex;
  box-shadow: 0 6px 10px -6px rgba(74, 74, 74, 0.3);
  transition: 0.2s;
  background: #d9f1ff;
  color: #005480;
  border-radius: 6px;
  font-size: 18px;
  width: 100px;
  height: 30px;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  img {
    margin-left: 6px;
  }

  &:hover {
    box-shadow: none;
  }
`;

export default ChatButtons;
