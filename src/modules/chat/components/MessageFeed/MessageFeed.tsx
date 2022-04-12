import React, {MutableRefObject, useRef, useState} from 'react';
import _ from 'lodash';
import Message from './Message/Message';
import {UserType} from '../../models/UserType';
import chatStore from '../../stores/chatStore';
import EntryField from '../EntryField';
import {findPrivateCompanion} from '../../utils/findPrivateCompanion';
import {observer} from 'mobx-react-lite';
import ArrowToBottom from './ArrowToBottom/ArrowToBottom';
import {MessageType} from '../../models/Message';
import {getMessageFeedStyle} from './MessageFeed.style'
import MessageFeedHeader from "./MessageFeedHeader/MessageFeedHeader";
import {CategoryType} from '../../models/CategoryType';
import {DialogType} from '../../models/DialogType';
import messageFeedStore from '../../stores/messageFeedStore';

type MessageFeedProps = {
    id: string,
    type: DialogType,
    category: CategoryType,
    messages: MessageType[],
    members: UserType[],
    avatar?: string,
    name?: string,
};

const MessageFeed: React.FC<MessageFeedProps> = (props) => {

    const {id, messages, type} = props;
    const {onScroll} = messageFeedStore;
    const { getIsDesktop } = chatStore;
    const messagesRef = useRef<HTMLDivElement>(null);
    const MessageFeedStyle = getMessageFeedStyle(getIsDesktop());

    const onScrollHandler = _.throttle(onScroll, 50);

    return (
        <MessageFeedStyle>
            <ArrowToBottom messagesRef={messagesRef}/>
            <MessageFeedHeader {...props} />
            <div className="messages" ref={messagesRef} onScroll={onScrollHandler}>
                {messages.map(message => <Message key={message.id} {...message} type={type}/>)}
                <div id={id + 'messageFeedBottom'}/>
            </div>
            <EntryField dialogId={id}/>
        </MessageFeedStyle>
    );

};

export default observer(MessageFeed);