import React, { useRef } from 'react';
import chatStore from '../../stores/chatStore';
import EntryField from '../EntryField';
import { observer } from 'mobx-react-lite';
import ArrowToBottom from './ArrowToBottom/ArrowToBottom';
import { getMessageFeedStyle } from './MessageFeed.style';
import MessageFeedHeader from './MessageFeedHeader/MessageFeedHeader';
import MessageFeedContent from './MessageFeedContent';

type MessageFeedProps = {};

const MessageFeed: React.FC<MessageFeedProps> = (props) => {
    const { getIsDesktop } = chatStore;
    const messagesRef = useRef<HTMLDivElement>(null);
    const MessageFeedStyle = getMessageFeedStyle(getIsDesktop());

    React.useEffect(() => {
        if (document.documentElement.clientWidth < 750)
        document.body.style.overflow = 'hidden'

        return () => {
            return document.body.style.overflow = 'auto'

        }
    })

    return (
        <MessageFeedStyle>
            <ArrowToBottom messagesRef={messagesRef}/>
            <MessageFeedHeader {...props} />
            <MessageFeedContent/>
            <EntryField/>
        </MessageFeedStyle>
    );

};

export default observer(MessageFeed);