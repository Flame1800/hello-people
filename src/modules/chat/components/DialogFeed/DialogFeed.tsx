import React from 'react';

import dialogFeedStore from '../../stores/dialogFeedStore';
import Dialog from './Dialog';
import {observer} from 'mobx-react-lite';
import {CategoryType} from '../../models/CategoryType';
import entryFieldStore from '../../stores/entryFieldStore';
import chatStore from "../../stores/chatStore";

type DialogFeedProps = {
    category: CategoryType,
}

const DialogFeed: React.FC<DialogFeedProps> = (props) => {
    const {category} = props;
    const {getSearchText} = entryFieldStore;
    const {getDialogsByTypeAndFilter} = dialogFeedStore;
    const {socket} = chatStore
    const dialogs = getDialogsByTypeAndFilter(category, getSearchText());

    return dialogs && dialogs.map(dialog => <Dialog key={dialog.id} {...dialog}/>)
};

export default observer(DialogFeed);