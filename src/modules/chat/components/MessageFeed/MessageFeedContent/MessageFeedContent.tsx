import React from 'react';
import { observer } from 'mobx-react-lite';
import chatStore from '../../../stores/chatStore/chatStore';
import dialogFeedStore from '../../../stores/dialogFeedStore/dialogFeedStore';
import messageFeedStore from '../../../stores/messageFeedStore/messageFeedStore';
import _ from 'lodash';
import Message from '../Message';

type MessageFeedContentProps = {};

const MessageFeedContent: React.FC<MessageFeedContentProps> = (props) => {
    const { getCurrentDialogId } = chatStore;
    const { getDialog } = dialogFeedStore;
    const { onScroll } = messageFeedStore;
    const dialog = getDialog(getCurrentDialogId());

    const onScrollHandler = _.throttle(onScroll, 50);

    return (
        <div className="messages" onScroll={onScrollHandler}>
            {dialog && dialog.messages.map(message => <Message key={message.id} {...message} type={dialog.type}/>)}
        </div>
    );
};

export default observer(MessageFeedContent);