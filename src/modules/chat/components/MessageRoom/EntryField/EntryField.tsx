import React, { ChangeEvent, useState } from "react";
import { observer } from "mobx-react-lite";
import chatStore from "../../../stores/chatStore";
import styled, { css } from "styled-components";
import { NewMessageType } from "../../../models/Message";
import dialogsStore from "../../../stores/dialogsStore";

const defaultHeightInput = 32;

const EntryField = () => {
  const [textMessage, setTextMessage] = useState("");
  const { socket, user, isWidget } = chatStore;
  const { currentDialog } = dialogsStore;

  const [heightInput, setHeightInput] = React.useState(defaultHeightInput);

  const inputOnChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setTextMessage(event.currentTarget.value);
  };

  const sendOnClickHandler = () => {
    if (
      textMessage.length < 1 ||
      textMessage.replace(/\s/g, "").length < 1 ||
      !currentDialog
    ) {
      return;
    }

    const newMessage: NewMessageType = {
      chatId: currentDialog.chatId,
      author: user,
      text: textMessage,
      date: new Date(),
      isRead: false,
    };

    if (socket) {
      socket.emit("sendMsg", newMessage);
    }

    setTextMessage("");
    setHeightInput(defaultHeightInput);
  };

  const enterHandler = (e: any) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendOnClickHandler();
    }

    if (e.key === "Enter" && e.shiftKey && heightInput < 100) {
      setHeightInput(heightInput + 20);
    }

    if (e.key === "Backspace" && heightInput > defaultHeightInput) {
      const msg = textMessage;

      if (msg[msg.length - 1] === "\n") {
        setHeightInput(heightInput - 20);
      }
    }
  };

  return (
    <Wrapper isWidget={isWidget} heightInput={heightInput}>
      <textarea
        autoFocus
        className="message-input"
        rows={1}
        onChange={inputOnChangeHandler}
        value={textMessage}
        placeholder="Сообщение..."
        onKeyDown={enterHandler}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div<{ heightInput: number; isWidget: boolean }>`
  height: fit-content;
  position: absolute;
  bottom: 0;
  width: 100%;
  background: #ffffff;
  box-shadow: 0 0 18px rgba(0, 0, 0, 0.07);
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 0 20px;
  z-index: 500;

  ${(props) =>
    !props.isWidget &&
    css`
      border: 1px solid rgba(234, 234, 234, 0.95);
      box-shadow: none;
    `};

  .message-input {
    width: 100%;
    border: none;
    padding: 6px 10px;
    border-radius: 16px;
    height: ${({ heightInput }) => `${heightInput}px`};
    margin: 22px 15px 22px 5px;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    outline: none;
    resize: none;

    ${(props) =>
      !props.isWidget &&
      css`
        margin: 8px 15px 8px 5px;
      `};

    &::placeholder {
      font-size: 16px;
      color: #949494;
    }

    &::-webkit-scrollbar {
      width: 16px;
    }

    &::-webkit-scrollbar-thumb {
      background: rgba(218, 218, 218, 0.8);
      border-radius: 8px;
      border: 5px solid #fff;
    }
  }

  .send-btn {
    width: 32px;
    height: 32px;
    object-fit: scale-down;
    cursor: pointer;
    margin-bottom: 22px;
  }
`;

export default observer(EntryField);
