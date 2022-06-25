import React, {useEffect} from 'react';

import {observer} from 'mobx-react-lite';
import messageFeedStore from '../../../stores/messageFeedStore';
import styled from "styled-components";

type ArrowToBottomProps = {
    messagesRef: React.RefObject<HTMLDivElement>;
};

const ArrowToBottom: React.FC<ArrowToBottomProps> = (props) => {
    const {messagesRef} = props;
    const scroll = messagesRef.current;

    useEffect(() => {
    }, [messageFeedStore.onScrollToggle])

    useEffect(() => {
        console.log('go bottom')
        messagesRef.current?.scrollTo(0, messagesRef.current?.scrollHeight);
    }, [messageFeedStore.goBottomToggle]);

    const onClickHandler = (ref: React.RefObject<HTMLDivElement>) => {
        ref.current?.scrollTo(0, ref.current?.scrollHeight);
    };

    if (scroll) {
        console.log(scroll.scrollTop + scroll.clientHeight + 100 < scroll.scrollHeight )
    }

    return (
        <>
            {scroll && scroll.scrollTop + scroll.clientHeight + 100 < scroll.scrollHeight &&
            <Wrapper onClick={() => onClickHandler(messagesRef)}>
                <img src="/img/arrow-bottom-icon.svg" alt="down"/>
            </Wrapper>
            }
        </>

    );
};

const Wrapper = styled.a`
  position: fixed;
  width: 54px;
  height: 54px;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 100px;
  right: 10px;
  cursor: pointer;
  z-index: 1;
  background: #FFFFFF;
  box-shadow: 0 4px 7px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
`

export default observer(ArrowToBottom);
