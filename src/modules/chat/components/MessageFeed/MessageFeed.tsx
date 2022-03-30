import React from 'react';
import Message from './Message/Message';
import {User} from '../../models/User';
import EntryField from '../EntryField';

import {observer} from 'mobx-react-lite';
import ArrowToBottom from './ArrowToBottom/ArrowToBottom';
import {MessageType} from '../../models/Message';
import {MessageFeedStyle} from './MessageFeed.style'
import MessageFeedHeader from "./MessageFeedHeader/MessageFeedHeader";

type MessageFeedProps = {
    id: string,
    type: 'private' | 'conversation',
    category: 'chat' | 'place',
    messages: MessageType[],
    members: User[],
    avatar?: string,
    name?: string,
};

const MessageFeed: React.FC<MessageFeedProps> = (props) => {
    const {id, messages, type} = props;

    return (
        <MessageFeedStyle>
            <ArrowToBottom id={id + 'messageFeedBottom'}/>
            <MessageFeedHeader {...props} />
            <div className="messages">
                {messages.map(message => <Message key={message.id} {...message} type={type}/>)}
                <div id={id + 'messageFeedBottom'}/>
            </div>
            <EntryField dialogId={id}/>
        </MessageFeedStyle>
    );
};

export default observer(MessageFeed);