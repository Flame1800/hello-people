import React, { ChangeEvent } from 'react';
import { observer } from 'mobx-react-lite';
import entryFieldStore from '../../stores/entryFieldStore';
import chatStore from '../../stores/chatStore';
import dialogFeedStore from '../../stores/dialogFeedStore';
import styled from 'styled-components';
import messageFeedStore from '../../stores/messageFeedStore';

type EntryFieldProps = {};

const EntryField: React.FC<EntryFieldProps> = (props) => {
    const { getMessage, setMessage } = entryFieldStore;
    const { getSocket, getUser, getCurrentDialogId } = chatStore;
    const { addMessageToDialog, makeAllMessagesIsRead } = dialogFeedStore;
    const { goBottom } = messageFeedStore;
    const dialogId = getCurrentDialogId();
    const socket = getSocket();

    const inputOnChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
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
        goBottom();
    };


    return (
        <Wrapper>
            <textarea
                className="message-input"
                rows={1}
                onChange={inputOnChangeHandler}
                value={getMessage()}
                placeholder="Сообщение..."
                onKeyDown={event => !event.shiftKey && event.key === 'Enter' && sendOnClickHandler()}
            >

            </textarea>
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
  z-index: 40;

  @media (min-width: 1420px) {
    width: 330px;
  }

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
`;

export default observer(EntryField);