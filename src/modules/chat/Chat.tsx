import React, { useEffect, useState } from 'react';

import DialogFeed from './components/DialogFeed';
import chatStore from './stores/chatStore';
import { observer } from 'mobx-react-lite';
import { io } from 'socket.io-client';
import MessageFeed from './components/MessageFeed';
import dialogFeedStore from './stores/dialogFeedStore';
import { ChatWrapper } from './ChatStyle';
import Tab from './components/common/Tab';
import ComponentName from './components/Header/ComponentName';
import Search from './components/Header/Search';
import { CategoryType } from './models/CategoryType';
import { DialogProps } from './components/DialogFeed/Dialog/Dialog';

type ChatProps = {
    api?: string;
};

const Chat: React.FC<ChatProps> = (props) => {
    const { setCurrentDialogId, getCurrentDialogId, setSocket } = chatStore;
    const { getDialog } = dialogFeedStore;
    const dialog = getDialog(getCurrentDialogId());

    const [ content, setContent ] = useState<CategoryType>('chat');

    useEffect(() => {
        // setSocket(io());
    }, []);

    const switchCategory = (category: CategoryType) => {
        setCurrentDialogId('');
        setContent(category);
    };

    const createTab = (category: CategoryType, name: string) => {
        return (
            <div className='tabContent' onClick={() => switchCategory(category)}>
                <Tab active={content === category}>{name}</Tab>
            </div>
        );
    };

    const getDialogContent = (category: CategoryType, dialog: DialogProps | undefined) => {
        return (
            <>
                <DialogFeed category={category}/>
                {dialog && <MessageFeed/>}
            </>
        );
    };

    return (
        <ChatWrapper>
            <ComponentName/>
            <Search/>
            <div className="tabs">
                {createTab('chat', 'Чаты')}
                {createTab('place', 'Места')}
                {createTab('meeting', 'Встречи')}
            </div>

            <div className="dialogs">
                {getDialogContent(content, dialog)}
            </div>
        </ChatWrapper>
    );
};

export default observer(Chat);