import React from "react";
import styled, { css } from "styled-components";
import { theme } from "../../../../../../styles/theme";
import chatStore from "../../../stores/chatStore";
import dialogsStore from "../../../stores/dialogsStore";
import { observer } from "mobx-react-lite";

const AddChatButton = () => {
  const { addChat, isWidget } = chatStore;
  const { currentDialog } = dialogsStore;

  const addChatHandler = () => {
    if (!currentDialog) return;

    addChat(currentDialog);
  };

  return (
    <Wrapper isWidget={isWidget} onClick={addChatHandler}>
      Присоединиться
    </Wrapper>
  );
};

const Wrapper = styled.div<{ isWidget: boolean }>`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 76px;
  width: 100%;
  background: #ffffff;
  box-shadow: 0 10px 18px rgba(234, 234, 234, 0.6);
  border-radius: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 20px;
  cursor: pointer;
  color: ${theme.color.orange};
  padding: 0 20px;
  z-index: 500;
  transition: 0.3s;

  @media screen and (max-width: 1000px) {
    border-radius: 20px 20px 0 0;
    position: sticky;
  }

  ${(props) =>
    !props.isWidget &&
    css`
      height: 50px;
      font-weight: 500;
      font-size: 20px;
      box-shadow: 0 1px 4px rgba(241, 241, 241, 0.18);
    `}
  &:hover {
    background: rgba(252, 81, 48, 0.07);
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.18);
  }
`;

export default observer(AddChatButton);
