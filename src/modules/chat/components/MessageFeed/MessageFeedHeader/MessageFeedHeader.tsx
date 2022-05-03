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
import dialogFeedStore from '../../../stores/dialogFeedStore/dialogFeedStore';
import messageFeedStore from '../../../stores/messageFeedStore/messageFeedStore';

type MessageFeedProps = {
};

const MessageFeedHeader: React.FC<MessageFeedProps> = (props) => {
    const {setCurrentDialogId, getSettingsChat, getUser, getCurrentDialogId} = chatStore;
    const { getDialog } = dialogFeedStore;
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
                    <span className="name">
                        {dialog.type === 'private' ? companion?.name : dialog.name}
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