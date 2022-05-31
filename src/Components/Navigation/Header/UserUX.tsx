import React from 'react';
import styled from "styled-components";
import Link from "next/link";
import UserAvatar from '../../User/UserAvatar';
import AddButton from './AddButton';

const UserUX = () => {
    return (
        <Wrapper>
            <AddButton/>
            <UserAvatar/>

        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
`

export default UserUX;