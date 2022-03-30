import React from 'react';
import {UserType} from '../../../models/UserType';
import chatStore from '../../../stores/chatStore';

import Icon from '../../common/UserAvatar';
import CheckMarkICon from "./CheckMarkICon";
<<<<<<< HEAD
import {MessageWrapper, MessageStyle, MessageInfo, MessageAvatar, MeMessageWrapper} from './MessageStyle'
=======
import {MessageWrapper, MessageStyle, MessageInfo, MessageAvatar, MyMessageWrapper} from './MessageStyle'
import { DialogType } from '../../../models/DialogType';
>>>>>>> 997970c8a2bf63499360254e13db873bbb2b80e5

export type MessageProps = {
    id: string,
    author: UserType,
    text: string,
    date: string,
    isRead: boolean,
    type: DialogType,
};

const Message: React.FC<MessageProps> = (props) => {
    const {id, text, date, isRead, author, type} = props;
    const {getUser} = chatStore;
    const currentUser = getUser();

    const content = (<>
        {type !== 'private' && <MessageAvatar alt='avatar' src={author.avatar}/>}
        <MessageStyle>
            {type !== 'private' && author.id !== currentUser.id
                && <div className='user-name'>{author.name}</div>}
            <p className='message-text'>
                {text}
                <MessageInfo>
                    <p className='date'>{date}</p>
                    {author.id === currentUser.id && <CheckMarkICon active={isRead}/>}
                </MessageInfo>
            </p>
        </MessageStyle>
    </>)

    if (author.id === currentUser.id) {
        return (
            <MeMessageWrapper>
                {content}
            </MeMessageWrapper>
        )
    }

    return (
        <MessageWrapper>
            {content}
        </MessageWrapper>
    );
};

export default Message;