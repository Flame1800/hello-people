import React, {useEffect, useState} from 'react';

import DialogFeed from './components/DialogFeed';
import chatStore from './stores/chatStore';
import {observer} from 'mobx-react-lite';
import {io} from 'socket.io-client';
import MessageFeed from './components/MessageFeed';
import dialogFeedStore from './stores/dialogFeedStore';
import MeetingFeed from './components/MeetingFeed';
import {ChatWrapper} from './ChatStyle'
import Tab from "./components/common/Tab";
import Search from "./components/Header/Search";

type ChatProps = {
    api: string;
};

const Chat: React.FC<ChatProps> = (props) => {
    const {getCurrentMessageFeed, setCurrentMessageFeed, setSocket} = chatStore;
    const {getDialog} = dialogFeedStore;
    const dialog = getDialog(getCurrentMessageFeed());

    const [content, setContent] = useState<'chat' | 'place' | 'meeting'>('chat');

    useEffect(() => {
        setSocket(io());
    }, []);

    const switchCategory = (category: 'chat' | 'place' | 'meeting') => {
        setCurrentMessageFeed('');
        setContent(category);
    };

    return (
        <ChatWrapper>
            <Search/>
            <div className="tabs">
                <div onClick={() => switchCategory('chat')}>
                    <Tab active={content === 'chat'}>Чаты</Tab>
                </div>
                <div onClick={() => switchCategory('place')}>
                    <Tab active={content === 'place'}>Места</Tab>
                </div>
                <div onClick={() => switchCategory('meeting')}>
                    <Tab active={content === 'meeting'}>Встречи</Tab>
                </div>
            </div>


            <div>
                {content === 'chat' && <DialogFeed category='chat'/>}
                {content === 'chat' && (dialog && <MessageFeed {...dialog}/>)}

                {content === 'place' && <DialogFeed category='place'/>}
                {content === 'place' && (dialog && <MessageFeed {...dialog}/>)}

                {content === 'meeting' && <MeetingFeed/>}
            </div>
        </ChatWrapper>
    );
};

export default observer(Chat);