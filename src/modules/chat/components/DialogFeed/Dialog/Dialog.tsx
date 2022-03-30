import React from 'react';
import {User} from '../../../models/User';
import chatStore from '../../../stores/chatStore';
import {observer} from 'mobx-react-lite';
import {findPrivateCompanion} from '../../../utils/findPrivateCompanion';
import {MessageType} from '../../../models/Message';
import UserAvatar from "../../common/UserAvatar";
import {DialogWrapper} from './DialogStyles'
import {DateTime} from 'luxon'

export type DialogProps = {
    id: string,
    type: 'private' | 'conversation',
    category: 'chat' | 'place',
    messages: MessageType[],
    members: User[],
    avatar?: string,
    name?: string,
    author?: User,
    pined?: boolean,
};


const Dialog: React.FC<DialogProps> = (props) => {
    const {id, type, messages, avatar, name, members, category, author} = props;
    const {getUser, setCurrentMessageFeed} = chatStore;
    const companion = findPrivateCompanion(members, getUser());
    const lastMessage = messages[messages.length - 1];
    const newMessagesCount = messages.filter(message => !message.isRead && message.author.id !== getUser().id).length;

    const dialogOnClickHandler = () => {
        setCurrentMessageFeed(id);
    };

    return (
        <DialogWrapper onClick={dialogOnClickHandler}>
            {type === 'conversation' ? <UserAvatar url={avatar}/> : <UserAvatar url={companion.avatar}/>}
            <div className="content">
                <div className='head'>
                <span className="user-name">
                    {type === 'conversation' ? name || 'Нет имени' : companion.name}
                </span>
                    <span className='date'>
                    {type === 'conversation' ? `активны ${members.length} чел` : lastMessage.date}
                </span>
                </div>
                <div className="info">
                    <p className='last-message'>
                        {type === 'conversation' && (lastMessage.author.id === getUser().id ?
                            `Вы: ${lastMessage.text}` :
                            `${lastMessage.author.name.split(' ')[0]}: ${lastMessage.text}`)}
                        {type === 'private' && (lastMessage.author.id === getUser().id ?
                            `Вы: ${lastMessage.text}` :
                            `${lastMessage.text}`)
                        }
                    </p>
                    {(newMessagesCount > 0) && <span className='notification'><p>{newMessagesCount}</p></span>}
                </div>
            </div>
        </DialogWrapper>
    );
};


export default observer(Dialog);