import React, { useEffect, useState } from 'react';

import DialogFeed from './components/DialogFeed';
import chatStore from './stores/chatStore';
import { observer } from 'mobx-react-lite';
import { io } from 'socket.io-client';
import MessageFeed from './components/MessageFeed';
import dialogFeedStore from './stores/dialogFeedStore';
import { ChatTitle, ChatWrapper } from './ChatStyle';
import Tab from './components/common/Tab';
import Search from './components/Header/Search';
import { CategoryType } from './models/CategoryType';
import { DialogProps } from './components/DialogFeed/Dialog/Dialog';

type ChatProps = {
    api: string;
};

const Chat: React.FC<ChatProps> = (props) => {
    const { setCurrentDialogId, getCurrentDialogId, setSocket, getIsDesktop, setIsDesktop } = chatStore;
    const { getDialog } = dialogFeedStore;
    const dialog = getDialog(getCurrentDialogId());

    const [ content, setContent ] = useState<CategoryType>('chat');

    useEffect(() => {
        setSocket(io());
    }, []);

    const switchCategory = (category: CategoryType) => {
        setCurrentDialogId('');
        setContent(category);
    };

    const createTab = (category: CategoryType, name: string) => {
        return (
            <div onClick={() => switchCategory(category)}>
                <Tab active={content === category}>{name}</Tab>
            </div>
        );
    };

    const getDialogContent = (category: CategoryType, dialog: DialogProps | undefined) => {
        return (
            <>
                <DialogFeed category={category}/>
                {dialog && <MessageFeed {...dialog}/>}
            </>
        );
    };

    const viewTypeHandler = () => {
        setIsDesktop(!getIsDesktop());
    };

    return (
        <ChatWrapper>
            <ChatTitle>ЧАТЫ</ChatTitle>
            <Search/>
            <div className="tabs">
                {createTab('chat', 'Чаты')}
                {createTab('place', 'Места')}
                {createTab('meeting', 'Встречи')}

                <img className="viewType"
                     src={getIsDesktop() ? 'https://img.icons8.com/external-xnimrodx-lineal-xnimrodx/344/external-pc-computer-xnimrodx-lineal-xnimrodx.png' :
                         'https://img.icons8.com/material-outlined/344/iphone--v2.png'}
                     alt=""
                     onClick={viewTypeHandler}
                />
            </div>

            <div className="dialogs">
                {getDialogContent(content, dialog)}
            </div>
        </ChatWrapper>
    );
};

export default observer(Chat);