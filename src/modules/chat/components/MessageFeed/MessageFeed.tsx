import React, {useState} from 'react';
import Message from './Message/Message';
import {User} from '../../models/User';
import Icon from '../common/UserAvatar';
import chatStore from '../../stores/chatStore';
import EntryField from '../EntryField';
import Modal from '../common/Modal';
import Settings from '../common/Settings';

import style from './MessageFeed.module.css';
import {observer} from 'mobx-react-lite';
import {findPrivateCompanion} from '../../utils/findPrivateCompanion';
import ArrowToBottom from './ArrowToBottom/ArrowToBottom';
import {MessageType} from '../../models/Message';

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
    const {id, messages, name, avatar, members, type, category} = props;
    const {setCurrentMessageFeed, getSettingsChat, getUser} = chatStore;
    const companion = findPrivateCompanion(members, getUser());

    const [modalActive, setModalActive] = useState(false);

    const backOnClickHandler = () => {
        setCurrentMessageFeed('');
    }

    return (
        <div className={style.component}>
            <div className={style.header}>
                <span className={style.back} onClick={backOnClickHandler}><Icon
                    url='https://cdn-icons-png.flaticon.com/512/54/54509.png'/></span>
                {type === 'private' ? <Icon url={companion?.avatar}/> : <Icon url={avatar}/>}
                <span>
                    {type === 'private' ? companion?.name : name}
                </span>
                <div
                    className={style.settings}
                    onClick={() => setModalActive(true)}
                >
                    <Icon
                        url='https://cdn-icons.flaticon.com/png/512/4254/premium/4254068.png?token=exp=1647863159~hmac=ec3a60557d0557ab28e6276d5c674b9f'/>
                </div>
            </div>
            <div className={style.messages}>
                {messages.map(message => <Message key={message.id} {...message} type={type}/>)}
                <div id={id + 'messageFeedBottom'}/>
                <ArrowToBottom id={id + 'messageFeedBottom'}/>
            </div>

            <EntryField dialogId={id}/>
            <Modal active={modalActive} setActive={setModalActive}
                   content={<Settings settingsList={getSettingsChat()}/>}/>

        </div>
    );
};

export default observer(MessageFeed);