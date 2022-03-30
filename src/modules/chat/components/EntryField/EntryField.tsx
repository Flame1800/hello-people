import React, {ChangeEvent} from 'react';
import {observer} from 'mobx-react-lite';
import entryFieldStore from '../../stores/entryFieldStore';
import chatStore from '../../stores/chatStore';
import dialogFeedStore from '../../stores/dialogFeedStore';

import styled from "styled-components";

type EntryFieldProps = {
    dialogId: string,
};

const EntryField: React.FC<EntryFieldProps> = (props) => {
    const {dialogId} = props;
    const {getMessage, setMessage} = entryFieldStore;
    const {getSocket, getUser} = chatStore;
    const {addMessageToDialog, makeAllMessagesIsRead} = dialogFeedStore;
    const socket = getSocket();

    const inputOnChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        makeAllMessagesIsRead(getUser().id, dialogId);
        setMessage(event.currentTarget.value);
    };

    const sendOnClickHandler = () => {
        if (getMessage().length < 1) return;
        addMessageToDialog(dialogId, {
            id: new Date().toISOString(),
            author: getUser(),
            text: getMessage(),
            date: new Date().toDateString(),
            isRead: false,
        });
        if (socket) {
            socket.send(getMessage());
            setMessage('');
        }
    };


    return (
        <Wrapper>
            <textarea
                className="message-input"
                rows="1"
                onChange={inputOnChangeHandler}
                value={getMessage()}
                placeholder="Сообщение..."
                autoFocus
                onKeyDown={event => !event.shiftKey && event.key === 'Enter' && sendOnClickHandler()}
            />
            <img src="/img/send-icon.svg" alt="send" className="send-btn" onClick={sendOnClickHandler}/>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  background: #FFFFFF;
  box-shadow: 0 0 18px rgba(0, 0, 0, 0.07);
  border-radius: 20px 20px 0 0;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;

  .message-input {
    width: 100%;
    border: none;
    padding: 6px 10px;
    border-radius: 15px;
    height: fit-content;
    margin-left: 5px;
    margin-right: 15px;
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;
    outline: none;
    resize: none;

    &::-webkit-scrollbar {
      opacity: 0;
    }

    &::placeholder {
      color: #949494;
    }
  }

  .send-btn {
    object-fit: scale-down;
  }
`

export default observer(EntryField);