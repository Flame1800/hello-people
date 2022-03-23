import React from 'react';

import dialogFeedStore from '../../stores/dialogFeedStore';
import Dialog from './Dialog';
import {observer} from 'mobx-react-lite';

type DialogFeedProps = {
    category: string,
}

const DialogFeed: React.FC<DialogFeedProps> = (props) => {
    const {category} = props;
    const {getDialogs} = dialogFeedStore;
    const dialogs = getDialogs();

    return (
        <div>
            {category === 'chat' && dialogs && dialogs
                .slice()
                .filter(dialog => dialog.category === 'chat')
                .sort((a, b) => {
                    if (a.pined && b.pined) return 0;
                    if (a.pined && !b.pined) return -1;
                    return 1;
                })
                .map(dialog => <Dialog key={dialog.id} {...dialog}/>)}
            {category === 'place' && dialogs && dialogs
                .slice()
                .filter(dialog => dialog.category === 'place')
                .sort((a, b) => {
                    if (a.pined && b.pined) return 0;
                    if (a.pined && !b.pined) return -1;
                    return 1;
                })
                .map(dialog => <Dialog key={dialog.id} {...dialog}/>)}
        </div>
    );
};

export default observer(DialogFeed);