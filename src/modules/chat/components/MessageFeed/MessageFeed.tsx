import React, {useState} from 'react';
import Message from './Message/Message';
import {User} from '../../models/User';
import UserAvatar from '../common/UserAvatar';
import chatStore from '../../stores/chatStore';
import EntryField from '../EntryField';
import Modal from '../common/Modal';
import Settings from '../common/Settings';

import {observer} from 'mobx-react-lite';
import {findPrivateCompanion} from '../../utils/findPrivateCompanion';
import ArrowToBottom from './ArrowToBottom/ArrowToBottom';
import {MessageType} from '../../models/Message';
import {MessageFeedStyle} from './MessageFeedStyle'

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
        <MessageFeedStyle>
            <div className="head">
                <div className="first-side">
                    <img src='/img/back-icon.svg' alt='back' className="btn-back" onClick={backOnClickHandler}/>
                    <UserAvatar url={type === 'private' ? companion?.avatar : avatar}/>
                    <div className="companion">
                        <span className="name">
                            {type === 'private' ? companion?.name : name}
                        </span>
                        <div className="status">
                            была 3 мин назад
                        </div>
                    </div>

                </div>
                <img src='/img/info-icon.svg' alt='back' onClick={() => setModalActive(true)}/>
            </div>
            <div className="messages">
                {messages.map(message => <Message key={message.id} {...message} type={type}/>)}
                <div id={id + 'messageFeedBottom'}/>
                <ArrowToBottom id={id + 'messageFeedBottom'}/>
            </div>

            <EntryField dialogId={id}/>
            <Modal active={modalActive} setActive={setModalActive}
                   content={<Settings settingsList={getSettingsChat()}/>}/>

        </MessageFeedStyle>
    );
};

export default observer(MessageFeed);