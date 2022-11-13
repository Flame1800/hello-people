import React, { ChangeEvent, useState } from "react";
import { observer } from "mobx-react-lite";
import chatStore from "../../../stores/chatStore";
import styled, { css } from "styled-components";
import { NewMessageType } from "../../../models/Message";
import dialogsStore from "../../../stores/dialogsStore";
import EmodjiPicker from "./EmojiPicker";
import { TextareaAutosize } from "@mui/material";
import { theme } from "../../../../../../styles/theme";

const EntryField = () => {
  const [textMessage, setTextMessage] = useState("");
  const { socket, user, isWidget } = chatStore;
  const { currentDialog } = dialogsStore;

  const inputOnChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setTextMessage(event.target.value);
  };

  const handleSendMessage = () => {
    if (!user) return;

    if (
      textMessage.length < 1 ||
      textMessage.replace(/\s/g, "").length < 1 ||
      !currentDialog
    ) {
      return;
    }

    const newMessage: NewMessageType = {
      chatId: currentDialog.id,
      author: user,
      text: textMessage.trim(),
      date: new Date(),
      isRead: false,
    };

    if (socket) {
      socket.emit("sendMsg", newMessage);
    }
    setTextMessage("");
  };

  const enterHandler = (e: any) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <Wrapper isWidget={isWidget}>
      <TextareaAutosize
        autoFocus
        className="message-input"
        onChange={inputOnChangeHandler}
        aria-label="Message"
        placeholder="Введите сообщение..."
        onKeyDown={enterHandler}
        value={textMessage}
      />
      <EmodjiPicker setTextMessage={setTextMessage} />
      <img
        onClick={handleSendMessage}
        className="send-img"
        src="/img/send.svg"
        alt="отправить"
      />
    </Wrapper>
  );
};

const Wrapper = styled.div<{ isWidget: boolean }>`
  height: fit-content;
  position: absolute;
  bottom: 0;
  width: 100%;
  background: #ffffff;
  box-shadow: 0 0 18px rgba(0, 0, 0, 0.18);
  border-radius: ${theme.borderRadius.main};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  z-index: 500;

  @media screen and (max-width: 1000px) {
    border-radius: 22px 22px 0 0;
  }

  .emodji-btn {
    margin-right: 10px;
    width: 22px;
    cursor: pointer;
  }

  .send-img {
    cursor: pointer;
  }

  ${(props) =>
    !props.isWidget &&
    css`
      border: 1px solid rgba(234, 234, 234, 0.95);
      border-radius: 0 0 28px 0;
      box-shadow: none;
    `};

  .message-input {
    width: 100%;
    border: none;
    padding: 6px 10px;
    border-radius: 16px;
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
