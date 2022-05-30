import React, {useState} from 'react';
import UserAvatar from "../../common/UserAvatar";
import Modal from "../../common/Modal";
import Settings from "../../common/Settings/Settings";
import {findPrivateCompanion} from "../../../utils/findPrivateCompanion";
import chatStore from "../../../stores/chatStore";
import {MessageFeedHeaderStyle} from './MessageFeedHeader.style'
import {Tooltip} from "@mui/material";
import dialogFeedStore from '../../../stores/dialogFeedStore/dialogFeedStore';

type MessageFeedProps = {};

const MessageFeedHeader: React.FC<MessageFeedProps> = (props) => {
    const {setCurrentDialogId, getSettingsChat, getUser, getCurrentDialogId} = chatStore;
    const {getDialog} = dialogFeedStore;
    const dialog = getDialog(getCurrentDialogId());

    const companion = findPrivateCompanion(dialog.members, getUser());
    const [modalActive, setModalActive] = useState(false);

    const backOnClickHandler = () => {
        setCurrentDialogId('');
    }

    return (
        <MessageFeedHeaderStyle>
            <div className="first-side">
                <img src='/img/back-icon.svg' alt='back' className="btn-back" onClick={backOnClickHandler}/>
                <UserAvatar url={dialog.type === 'private' ? companion?.avatar : dialog.avatar}/>
                <div className="companion">
                    <Tooltip title={dialog.type === 'private' ? companion?.name : dialog.name}>
                        <span className="name">
                            {dialog.type === 'private' ? companion?.name : dialog.name}
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