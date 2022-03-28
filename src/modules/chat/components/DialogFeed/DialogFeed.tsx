import React from 'react';

import dialogFeedStore from '../../stores/dialogFeedStore';
import Dialog from './Dialog';
import { observer } from 'mobx-react-lite';
import { CategoryType } from '../../models/CategoryType';
import entryFieldStore from '../../stores/entryFieldStore';

type DialogFeedProps = {
    category: CategoryType,
}

const DialogFeed: React.FC<DialogFeedProps> = (props) => {
    const { category } = props;
    const { getSearchText } = entryFieldStore;
    const { getDialogsByTypeAndFilter } = dialogFeedStore;
    const dialogs = getDialogsByTypeAndFilter(category, getSearchText());

    return (
        <div>
            {dialogs && dialogs.map(dialog => <Dialog key={dialog.id} {...dialog}/>)}
        </div>
    );
};

export default observer(DialogFeed);