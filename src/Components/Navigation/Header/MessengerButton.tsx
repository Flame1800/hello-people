import React from 'react';
import styled from "styled-components";
import Link from "next/link";

const MessengerButton = () => {
    return (
        <Wrapper>
            <img src="/img/chat-icon.svg" alt="" />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    font-size: 14px;
    color: #000000;
    cursor: pointer;

    & img {
        width: 26px;
        height: 26px;
    }
`

export default MessengerButton