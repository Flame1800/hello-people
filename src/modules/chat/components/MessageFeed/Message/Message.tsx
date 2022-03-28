import React from 'react';
import {UserType} from '../../../models/UserType';
import chatStore from '../../../stores/chatStore';

import Icon from '../../common/UserAvatar';
import CheckMarkICon from "./CheckMarkICon";
import {MessageWrapper, MessageStyle, MessageInfo, MessageAvatar, MyMessageWrapper} from './MessageStyle'
import { DialogType } from '../../../models/DialogType';

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
            <div className='text'>
                {type !== 'private' && author.id !== currentUser.id
                    && <div className='user-name'>{author.name}</div>}
                {text}
            </div>
            <MessageInfo>
                <p className='date'>{date}</p>
                {author.id === currentUser.id && <CheckMarkICon active={isRead}/>}
            </MessageInfo>
        </MessageStyle>
    </>)

    if (author.id === currentUser.id) {
        return (
            <MyMessageWrapper>
                {content}
            </MyMessageWrapper>
        )
    }

    return (
        <MessageWrapper>
            {content}
        </MessageWrapper>
    );
};

export default Message;