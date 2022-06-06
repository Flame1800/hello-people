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
                {/* <img src='/img/back-icon.svg' alt='back' className="btn-back" onClick={backOnClickHandler}/> */}
                <svg width="14" height="10" viewBox="0 0 24 10" fill="none" className='btn-back' onClick={backOnClickHandler} xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.03033 1.53033C6.32322 1.23744 6.32322 0.762563 6.03033 0.46967C5.73744 0.176777 5.26256 0.176777 4.96967 0.46967L0.96967 4.46967C0.823223 4.61612 0.75 4.80806 0.75 5C0.75 5.10169 0.770239 5.19866 0.806909 5.28709C0.843509 5.37555 0.897763 5.45842 0.96967 5.53033L4.96967 9.53033C5.26256 9.82322 5.73744 9.82322 6.03033 9.53033C6.32322 9.23744 6.32322 8.76256 6.03033 8.46967L3.31066 5.75H13C13.4142 5.75 13.75 5.41421 13.75 5C13.75 4.58579 13.4142 4.25 13 4.25H3.31066L6.03033 1.53033Z" fill="#000000"/>
                </svg>
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
            {/* <img src='/img/info-icon.svg' alt='back' className='btn-info' onClick={() => setModalActive(true)}/> */}
            <svg width="16" height="4" viewBox="0 0 24 4" fill="none" className='btn-info' xmlns="http://www.w3.org/2000/svg" onClick={() => setModalActive(true)}>
                <path d="M2 0.5C1.17157 0.5 0.5 1.17157 0.5 2C0.5 2.82843 1.17157 3.5 2 3.5C2.82843 3.5 3.5 2.82843 3.5 2C3.5 1.17157 2.82843 0.5 2 0.5Z" fill="black"/>
                <path d="M6.5 2C6.5 1.17157 7.17157 0.5 8 0.5C8.82843 0.5 9.5 1.17157 9.5 2C9.5 2.82843 8.82843 3.5 8 3.5C7.17157 3.5 6.5 2.82843 6.5 2Z" fill="black"/>
                <path d="M12.5 2C12.5 1.17157 13.1716 0.5 14 0.5C14.8284 0.5 15.5 1.17157 15.5 2C15.5 2.82843 14.8284 3.5 14 3.5C13.1716 3.5 12.5 2.82843 12.5 2Z" fill="black"/>
            </svg>

            <Modal active={modalActive} setActive={setModalActive}
                   content={<Settings settingsList={getSettingsChat()}/>}/>
        </MessageFeedHeaderStyle>
    );
};

export default MessageFeedHeader;