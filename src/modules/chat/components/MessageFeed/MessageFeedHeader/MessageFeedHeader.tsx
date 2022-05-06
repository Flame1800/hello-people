import React, {useState} from 'react';
import UserAvatar from "../../common/UserAvatar";
import Modal from "../../common/Modal";
import Settings from "../../common/Settings/Settings";
import {findPrivateCompanion} from "../../../utils/findPrivateCompanion";
import chatStore from "../../../stores/chatStore";
import {MessageType} from "../../../models/Message";
import {MessageFeedHeaderStyle} from './MessageFeedHeader.style'
import {UserType} from "../../../models/UserType";
import {DialogType} from "../../../models/DialogType";
import {CategoryType} from "../../../models/CategoryType";
import {Tooltip} from "@mui/material";

type MessageFeedProps = {
    id: string,
    type: DialogType,
    category: CategoryType,
    messages: MessageType[],
    members: UserType[],
    avatar?: string,
    name?: string,
};

const MessageFeedHeader: React.FC<MessageFeedProps> = (props) => {
    const {setCurrentDialogId, getSettingsChat, getUser} = chatStore;
    const {name, avatar, members, type} = props

    const companion = findPrivateCompanion(members, getUser());
    const [modalActive, setModalActive] = useState(false);

    const backOnClickHandler = () => {
        setCurrentDialogId('');
    }

    return (
        <MessageFeedHeaderStyle>
            <div className="first-side">
                <img src='/img/back-icon.svg' alt='back' className="btn-back" onClick={backOnClickHandler}/>
                <UserAvatar url={type === 'private' ? companion?.avatar : avatar}/>
                <div className="companion">
                    <Tooltip title={type === 'private' ? companion?.name : name}>
                        <span className="name">
                            {type === 'private' ? companion?.name : name}
                        </span>
                    </Tooltip>
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