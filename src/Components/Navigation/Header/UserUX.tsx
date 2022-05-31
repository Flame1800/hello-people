import React from 'react';
import styled from "styled-components";
import Link from "next/link";
import UserAvatar from '../../User/UserAvatar';
import AddButton from './AddButton';
import UserStore from "../../../Stores/UserStore";

const UserUX = () => {
    return (
        <Wrapper>
            <AddButton/>
            <UserAvatar url={UserStore?.user?.avatar}/>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  display: flex;
  width: 130px;
`

export default UserUX;