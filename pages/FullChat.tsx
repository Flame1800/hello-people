import React, { useEffect, useState } from 'react';

import DialogFeed from '../src/modules/chat/components/DialogFeed';
import chatStore from '../src/modules/chat/stores/chatStore';
import { observer } from 'mobx-react-lite';
import { io } from 'socket.io-client';
import MessageFeed from '../src/modules/chat/components/MessageFeed';
import dialogFeedStore from '../src/modules/chat/stores/dialogFeedStore';
import styled from 'styled-components';
import Tab from '../src/modules/chat/components/common/Tab';
import ComponentName from './messenger/ComponentName';
import Search from './messenger/Search';
import { CategoryType } from '../src/modules/chat/models/CategoryType';
import { DialogProps } from '../src/modules/chat/components/DialogFeed/Dialog/Dialog';

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
        <ChatWrapper>
            <LeftSide>
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
            </LeftSide>
        </ChatWrapper>
    );
};

const ChatWrapper = styled.div`
    background: #FFF;
    display: flex;
    flex-direction: column;
    padding: 48px 24px;
    min-width: 100%;

    @media (max-width: 1424px) {
        height: 100vh;
    }

    .tabs {
        display: flex;
        justify-content: space-between;
        margin-top: 24px;
        margin-bottom: 24px;
    }

    .dialogs {
        display: flex;
        flex-direction: column;
        width: 100%;
    }
`

const LeftSide = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 332px;
`

const DialogContent = styled.div`
    background-color: #454545;
`

const MessengerContent = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
`
export default observer(Chat);