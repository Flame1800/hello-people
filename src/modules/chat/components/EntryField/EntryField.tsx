import React, {ChangeEvent} from 'react';
import {observer} from 'mobx-react-lite';
import entryFieldStore from '../../stores/entryFieldStore';
import chatStore from '../../stores/chatStore';
import dialogFeedStore from '../../stores/dialogFeedStore';
import styled from 'styled-components';
import messageFeedStore from '../../stores/messageFeedStore';

type EntryFieldProps = {};

const EntryField: React.FC<EntryFieldProps> = (props) => {
    const {getMessage, setMessage} = entryFieldStore;
    const {getSocket, getUser, getCurrentDialogId} = chatStore;
    const {addMessageToDialog, makeAllMessagesIsRead} = dialogFeedStore;
    const {goBottom} = messageFeedStore;
    const dialogId = getCurrentDialogId();
    const socket = getSocket();

    const inputOnChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        makeAllMessagesIsRead(getUser().id, dialogId);
        setMessage(event.currentTarget.value);
    };

    const sendOnClickHandler = () => {
        console.log(getMessage().length)
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
        setMessage("")
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
            {/* <img src="/img/send-icon.svg" alt="send" className="send-btn" onClick={sendOnClickHandler}/> */}
            <svg width="19" height="18" viewBox="0 0 19 18" fill="none" className="send-btn" xmlns="http://www.w3.org/2000/svg" onClick={sendOnClickHandler}>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M18.75 9C18.75 9.27238 18.6023 9.52334 18.3642 9.65562L16.0819 10.9236C11.5705 13.4299 6.81474 15.4687 1.88879 17.008L1.22371 17.2159C0.995977 17.287 0.747976 17.2456 0.555747 17.1043C0.363519 16.9629 0.249999 16.7386 0.249999 16.5L0.25 10.75C0.25 10.359 0.550415 10.0336 0.940191 10.0024L1.16752 9.9842C3.31898 9.81209 5.45387 9.48288 7.5552 8.99968C5.42436 8.50979 3.25902 8.17824 1.0769 8.00826L0.941755 7.99773C0.551315 7.96732 0.25 7.64162 0.25 7.25L0.25 1.5C0.25 1.26141 0.36352 1.03706 0.555748 0.895733C0.747976 0.754409 0.995977 0.712976 1.22371 0.784141L1.88878 0.991977C6.81474 2.53134 11.5705 4.57008 16.0819 7.07642L18.3642 8.34438C18.6023 8.47666 18.75 8.72762 18.75 9ZM16.4557 9L15.3534 8.38766C11.0256 5.98333 6.46847 4.018 1.75 2.52088L1.75 6.55957C4.68008 6.82384 7.57829 7.37016 10.4043 8.19118L10.7092 8.27978C11.0299 8.37293 11.2503 8.66683 11.25 9.00073C11.2497 9.33462 11.0287 9.62809 10.7078 9.72063L10.3173 9.83328C7.51882 10.6404 4.65003 11.1784 1.75 11.44L1.75 15.4791C6.46846 13.982 11.0256 12.0167 15.3534 9.61235L16.4557 9Z" fill="black"/>
            </svg>

        </Wrapper>
    );
};

const Wrapper = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  background: #FFFFFF;
  box-shadow: 0 0 18px rgba(0, 0, 0, 0.07);
  border-radius: 20px 20px 0 0;
  height: 72px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  z-index: 500;


  .message-input {
    width: 100%;
    border: none;
    padding: 6px 10px;
    border-radius: 15px;
    height: fit-content;
    margin-left: 5px;
    margin-right: 15px;
    font-weight: 400;
    font-size: 16px;
    line-height: 25px;
    outline: none;
    resize: none;

    &::-webkit-scrollbar {
      opacity: 0;
    }

    &::placeholder {
      font-size: 16px;
      color: #949494;
    }
  }

  .send-btn {
    width: 32px;
    height: 32px;
    object-fit: scale-down;
  }
`;

export default observer(EntryField);