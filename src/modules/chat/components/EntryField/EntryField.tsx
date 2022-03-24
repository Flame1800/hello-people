import React, { ChangeEvent } from 'react';
import { observer } from 'mobx-react-lite';
import entryFieldStore from '../../stores/entryFieldStore';
import chatStore from '../../stores/chatStore';
import dialogFeedStore from '../../stores/dialogFeedStore';

import style from './EnrtyField.module.css';
import messageFeedStore from '../../stores/messageFeedStore';

type EntryFieldProps = {
    dialogId: string,
};

const EntryField: React.FC<EntryFieldProps> = (props) => {
    const { dialogId } = props;
    const { getMessage, setMessage } = entryFieldStore;
    const { getSocket, getUser } = chatStore;
    const { addMessageToDialog, makeAllMessagesIsRead } = dialogFeedStore;
    const { goBottom } = messageFeedStore;
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
        goBottom();
    };

    return (
        <div className={style.component}>
            <input
                onChange={inputOnChangeHandler}
                type="text" value={getMessage()}
                onKeyDown={event => event.key === 'Enter' && sendOnClickHandler()}
            />
            <button onClick={sendOnClickHandler}> ОТПРАВИТЬ </button>
        </div>
    );
};

export default observer(EntryField);