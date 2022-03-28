import React, { useEffect } from 'react';

import style from './ArrowToBottom.module.css';
import { observer } from 'mobx-react-lite';
import messageFeedStore from '../../../stores/messageFeedStore';

type ArrowToBottomProps = {
    messagesRef: React.RefObject<HTMLDivElement>;
};

const ArrowToBottom: React.FC<ArrowToBottomProps> = (props) => {
    const { messagesRef } = props;
    const scroll = messagesRef.current;

    useEffect(() => {}, [messageFeedStore.onScrollToggle])

    useEffect(() => {
        messagesRef.current?.scrollTo(0, messagesRef.current?.scrollHeight);
    }, [ messageFeedStore.goBottomToggle ]);

    const onClickHandler = (ref: React.RefObject<HTMLDivElement>) => {
        ref.current?.scrollTo(0, ref.current?.scrollHeight);
    };

    return (
        <>
            { scroll && scroll.scrollTop + scroll.clientHeight + 100 < scroll.scrollHeight &&
                <div className={style.component} onClick={() => onClickHandler(messagesRef)}>
                    V
                </div>
            }
        </>

    );
};

export default observer(ArrowToBottom);