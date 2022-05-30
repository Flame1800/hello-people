import React from 'react';
import styled from "styled-components";
import Link from "next/link";
import UserAvatar from '../../User/UserAvatar';

const UserUX = () => {
    return (
        <Wrapper>
            <UserAvatar />
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
`

export default UserUX;