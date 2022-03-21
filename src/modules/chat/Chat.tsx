import React, { useEffect, useState } from 'react';

import DialogFeed from './components/DialogFeed';
import chatStore from './stores/chatStore';
import { observer } from 'mobx-react-lite';
import { io } from 'socket.io-client';
import style from './Chat.module.css';
import MessageFeed from './components/MessageFeed';
import dialogFeedStore from './stores/dialogFeedStore';
import MeetingFeed from './components/MeetingFeed';

type ChatProps = {
    api: string;
};

const Chat: React.FC<ChatProps> = (props) => {
    const { getCurrentMessageFeed, setCurrentMessageFeed, setSocket } = chatStore;
    const { getDialog } = dialogFeedStore;
    const dialog = getDialog(getCurrentMessageFeed());

    const [ content, setContent ] = useState<'chat' | 'place' | 'meeting'>('chat');

    useEffect(() => {
        setSocket(io());
    }, []);

    const switchCategory = (category: 'chat' | 'place' | 'meeting') => {
        setCurrentMessageFeed('');
        setContent(category);
    };

    return (
        <div className={style.component}>
            <h2>Диалоги</h2>
            <button type={'button'} onClick={() => switchCategory('chat')}>Чаты</button>
            <button onClick={() => switchCategory('place')}>Места</button>
            <button onClick={() => switchCategory('meeting')}>Встречи</button>

            <div className={style.content}>
                {content === 'chat' && <DialogFeed category='chat'/>}
                {content === 'chat' && ((dialog && <MessageFeed {...dialog}/>) || <div>Диалог не выбран</div>)}

                {content === 'place' && <DialogFeed category='place'/>}
                {content === 'place' && ((dialog && <MessageFeed {...dialog}/>) || <div>Место не выбрано</div>)}

                {content === 'meeting' && <MeetingFeed />}
            </div>
        </div>
    );
};

export default observer(Chat);