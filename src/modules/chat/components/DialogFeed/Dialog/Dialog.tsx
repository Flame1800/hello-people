import React from 'react';
import { User } from '../../../models/User';
import chatStore from '../../../stores/chatStore';
import Icon from '../../common/Icon';

import style from './Dialog.module.css';
import { observer } from 'mobx-react-lite';
import { findPrivateCompanion } from '../../../utils/findPrivateCompanion';
import { MessageType } from '../../../models/Message';

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
    const { id, type, messages, avatar, name, members, category, author } = props;
    const { getUser, setCurrentMessageFeed } = chatStore;
    const companion = findPrivateCompanion(members, getUser());
    const lastMessage = messages[messages.length - 1];
    const newMessagesCount = messages.filter(message => !message.isRead && message.author.id !== getUser().id).length;

    const dialogOnClickHandler = () => {
        setCurrentMessageFeed(id);
    };

    return (
        <div className={style.component} onClick={dialogOnClickHandler}>
            {type === 'conversation' ? <Icon url={avatar}/> : <Icon url={companion.avatar}/>}
            <div>
                <span>{type === 'conversation' ? name || 'Нет имени' : companion.name}</span>
                <p>
                    {type === 'conversation' && (lastMessage.author.id === getUser().id ?
                        `Вы: ${lastMessage.text}` :
                        `${lastMessage.author.name.split(' ')[0]}: ${lastMessage.text}`)}
                    {type === 'private' && (lastMessage.author.id === getUser().id ?
                        `Вы: ${lastMessage.text}` :
                        `${lastMessage.text}`)
                    }
                </p>
            </div>
            <div className={style.info}>
                <span>{type === 'conversation' ? `активны ${members.length} чел` : lastMessage.date}</span>
                {(newMessagesCount > 0) && <span className={style.newMessage}><p>{ newMessagesCount}</p></span>}
            </div>

        </div>
    );
};

export default observer(Dialog);