import React, { MutableRefObject, useRef, useState } from 'react';
import _ from 'lodash';
import Message from './Message/Message';
import UserAvatar from '../common/UserAvatar';
import {UserType} from '../../models/UserType';
import chatStore from '../../stores/chatStore';
import EntryField from '../EntryField';
import Modal from '../common/Modal';

import Settings from '../common/Settings';

import {observer} from 'mobx-react-lite';
import {findPrivateCompanion} from '../../utils/findPrivateCompanion';
import ArrowToBottom from './ArrowToBottom/ArrowToBottom';
import {MessageType} from '../../models/Message';
import {MessageFeedStyle} from './MessageFeedStyle'
import { CategoryType } from '../../models/CategoryType';
import { DialogType } from '../../models/DialogType';
import messageFeedStore from '../../stores/messageFeedStore';

type MessageFeedProps = {
    id: string,
    type: DialogType,
    category: CategoryType,
    messages: MessageType[],
    members: UserType[],
    avatar?: string,
    name?: string,
};

const MessageFeed: React.FC<MessageFeedProps> = (props) => {
    const {id, messages, name, avatar, members, type, category} = props;
    const {setCurrentDialogId, getSettingsChat, getUser} = chatStore;
    const { onScroll } = messageFeedStore;
    const [modalActive, setModalActive] = useState(false);
    const messagesRef = useRef<HTMLDivElement>(null);

    const companion = findPrivateCompanion(members, getUser());

    const backOnClickHandler = () => {
        setCurrentDialogId('');
    }

    const onScrollHandler = _.throttle(onScroll, 50);

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
            <div className="messages" ref={messagesRef} onScroll={onScrollHandler}>
                {messages.map(message => <Message key={message.id} {...message} type={type}/>)}
                <ArrowToBottom messagesRef={messagesRef}/>
            </div>

            <EntryField dialogId={id}/>
            <Modal active={modalActive} setActive={setModalActive}
                   content={<Settings settingsList={getSettingsChat()}/>}/>

        </MessageFeedStyle>
    );
};

export default observer(MessageFeed);