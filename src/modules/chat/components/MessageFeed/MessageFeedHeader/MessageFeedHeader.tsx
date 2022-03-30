import React, {useState} from 'react';
import UserAvatar from "../../common/UserAvatar";
import Modal from "../../common/Modal";
import Settings from "../../common/Settings/Settings";
import {findPrivateCompanion} from "../../../utils/findPrivateCompanion";
import chatStore from "../../../stores/chatStore";
import {MessageType} from "../../../models/Message";
import {User} from "../../../models/User";
import {MessageFeedHeaderStyle} from './MessageFeedHeader.style'


type MessageFeedProps = {
    id: string,
    type: 'private' | 'conversation',
    category: 'chat' | 'place',
    messages: MessageType[],
    members: User[],
    avatar?: string,
    name?: string,
};

const MessageFeedHeader: React.FC<MessageFeedProps> = (props) => {
    const {setCurrentMessageFeed, getSettingsChat, getUser} = chatStore;
    const {name, avatar, members, type} = props

    const companion = findPrivateCompanion(members, getUser());
    const [modalActive, setModalActive] = useState(false);

    const backOnClickHandler = () => {
        setCurrentMessageFeed('');
    }

    return (
        <MessageFeedHeaderStyle>
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
            <Modal active={modalActive} setActive={setModalActive}
                   content={<Settings settingsList={getSettingsChat()}/>}/>
        </MessageFeedHeaderStyle>
    );
};

export default MessageFeedHeader;