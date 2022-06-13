import React from 'react';
import styled from "styled-components";
import Link from "next/link";
import UserAvatar from '../../User/UserAvatar';
import AddButton from './AddButton';
import UserStore from "../../../Stores/UserStore";
import MessengerButton from '../NavButtonsSvg/MessengerButton';

const UserUX = () => {
    return (
        <Wrapper>
            <MessengerButton/>
            <AddButton/>
            <UserAvatar url={UserStore?.user?.avatar}/>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  display: flex;
  width: 130px;
  align-items: center;
`

export default UserUX;