import React, { MutableRefObject, useRef, useState } from 'react';
import Message from './Message/Message';
import {UserType} from '../../models/UserType';
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
import { CategoryType } from '../../models/CategoryType';
import { DialogType } from '../../models/DialogType';

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
    const [modalActive, setModalActive] = useState(false);
    const messagesRef = useRef<HTMLDivElement>(null);

    const companion = findPrivateCompanion(members, getUser());

    const backOnClickHandler = () => {
        setCurrentDialogId('');
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
            <div className={style.messages} ref={messagesRef}>
                {messages.map(message => <Message key={message.id} {...message} type={type}/>)}
                <ArrowToBottom messagesRef={messagesRef}/>
            </div>

            <EntryField dialogId={id}/>
            <Modal active={modalActive} setActive={setModalActive}
                   content={<Settings settingsList={getSettingsChat()}/>}/>

        </div>
    );
};

export default observer(MessageFeed);