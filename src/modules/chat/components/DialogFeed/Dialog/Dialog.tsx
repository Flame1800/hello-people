import React from 'react';
import {UserType} from '../../../models/UserType';
import chatStore from '../../../stores/chatStore';

import style from './Dialog.module.css';
import {observer} from 'mobx-react-lite';
import {findPrivateCompanion} from '../../../utils/findPrivateCompanion';
import {MessageType} from '../../../models/Message';
import styled from "styled-components";
import UserAvatar from "../../common/UserAvatar";
import { CategoryType } from '../../../models/CategoryType';
import { DialogType } from '../../../models/DialogType';

export type DialogProps = {
    id: string,
    type: DialogType,
    category: CategoryType,
    messages: MessageType[],
    members: UserType[],
    avatar?: string,
    name?: string,
    author?: UserType,
    pined?: boolean,
};


const Dialog: React.FC<DialogProps> = (props) => {
    const {id, type, messages, avatar, name, members, category, author} = props;
    const {getUser, setCurrentDialogId} = chatStore;
    const companion = findPrivateCompanion(members, getUser());
    const lastMessage = messages[messages.length - 1];
    const newMessagesCount = messages.filter(message => !message.isRead && message.author.id !== getUser().id).length;

    const dialogOnClickHandler = () => {
        setCurrentDialogId(id);
    };

    return (
        <div className={style.component} onClick={dialogOnClickHandler}>
            {type === 'conversation' ? <UserAvatar url={avatar}/> : <UserAvatar url={companion.avatar}/>}
            <div>
                <span>{type === 'conversation' ? name || 'Нет имени' : companion.name}</span>
                <p>
                    {type === 'conversation' && (lastMessage.author.id === getUser().id ?
                        `Вы: ${lastMessage.text}` :
                        `${lastMessage.author.name.split(' ')[0]}: ${lastMessage.text}`)}
                    {type === 'private' && (lastMessage.author.id === getUser().id ?
                        `Вы: ${lastMessage.text}` :
                        `${lastMessage.text}`)
                    }
                </p>
            </div>
            <div className={style.info}>
                <span>{type === 'conversation' ? `активны ${members.length} чел` : lastMessage.date}</span>
                {(newMessagesCount > 0) && <span className={style.newMessage}><p>{newMessagesCount}</p></span>}
            </div>

        </div>
    );
};

const Wrapper = styled.div`
  max-width: 380px;
  width: 100%;
  height: 50px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;

`

export default observer(Dialog);