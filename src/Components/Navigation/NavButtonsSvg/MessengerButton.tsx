import React from 'react';
import styled from 'styled-components';

const MessengerButton = () => {
    return (
        <Wrapper href='/messenger'>
            <img src="img/chat.svg" alt="" />
        </Wrapper>
    );
};

const Wrapper = styled.a`
    display: flex;
    align-items: center;
`

export default MessengerButton;