import React from 'react';
import { User } from '../../../models/User';
import chatStore from '../../../stores/chatStore';

import style from './Message.module.css';
import Icon from '../../common/Icon';

export type MessageProps = {
    id: string,
    author: User,
    text: string,
    date: string,
    isRead: boolean,
    type: 'private' | 'conversation',
};

const Message: React.FC<MessageProps> = (props) => {
    const { id, text, date, isRead, author, type } = props;
    const { getUser } = chatStore;
    const currentUser = getUser();

    return (
        <div className={currentUser.id === author.id ? style.component : style.companion}>
            {type === 'private' ?
                <>
                    <p>{author.name}: </p>
                    <p>{text}</p>
                </>
                :
                <>
                    <Icon url={author.avatar}/>
                    <>{author.name}:</>
                    <p>{text}</p>
                </>
            }
            <div className={style.info}>
                <p>{date}</p>
                {author.id === currentUser.id &&
                (!isRead ?
                        <Icon url="https://cdn-icons-png.flaticon.com/512/54/54346.png"/>
                        :
                        <Icon url='https://cdn-icons.flaticon.com/png/512/5299/premium/5299035.png?token=exp=1647864949~hmac=358ac284f43973146df5c07b47209679' />
                )}
            </div>
        </div>
    );
};

export default Message;