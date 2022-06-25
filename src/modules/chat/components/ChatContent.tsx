import React, { useEffect, useState } from 'react';

import DialogFeed from '../components/DialogFeed';
import chatStore from '../stores/chatStore';
import { observer } from 'mobx-react-lite';
import { io } from 'socket.io-client';
import MessageFeed from '../components/MessageFeed';
import dialogFeedStore from '../stores/dialogFeedStore';
import Tab from '../components/common/Tab';
import ComponentName from '../components/Header/ComponentName';
import Search from '../components/Header/Search';
import { CategoryType } from '../models/CategoryType';
import { DialogProps } from './DialogFeed/Dialog/Dialog';
import UserStore from "../../../Stores/UserStore";

type ChatProps = {
    api?: string;
};

const Chat: React.FC<ChatProps> = (props) => {
    const { setCurrentDialogId, getCurrentDialogId, setSocket, socket } = chatStore;
    const { getDialog } = dialogFeedStore;
    const dialog = getDialog(getCurrentDialogId());
    const {user} = UserStore
    const [ content, setContent ] = useState<CategoryType>('chat');

    useEffect(() => {
        // подключкение к сокетам
        const socket = io('http://localhost:1337', {query: {userId: user.id}})

        socket.on('user-chat-list', (data) => {
            console.log(data)
        })
        setSocket(socket);

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
                {dialog && <MessageFeed/>}
            </>
        );
    };

    return (
        <>
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
        </>
    );
};

export default observer(Chat);