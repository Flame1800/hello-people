import React from 'react';
import {UserType} from '../../../models/UserType';
import chatStore from '../../../stores/chatStore';
import CheckMarkICon from "./CheckMarkICon";
import {MessageWrapper, MessageStyle, MessageInfo, MessageAvatar, MeMessageWrapper} from './MessageStyle'
import {DialogType} from '../../../models/DialogType';

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
    const parser = new DOMParser();
    const htmlText = parser.parseFromString(text, 'text/html').querySelector('body').innerHTML


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