import React from 'react';
import styled from "styled-components";
import UserAvatar from '../../User/UserAvatar';
import AddButton from './AddButton';
import UserStore from "../../../Stores/UserStore";
import MessengerButton from '../NavButtonsSvg/MessengerButton';
import {observer} from "mobx-react-lite";
import Link from "next/link"
import UiStateStore from "../../../Stores/UiStateStore";

const UserUX = () => {
    if (!UserStore.user) {
        return (
            <ButttonLogin onClick={() => UiStateStore.toggleAuthModal()}>Войти</ButttonLogin>
        )
    }

    return (
        <Wrapper>
            <MessengerButton/>
            <AddButton/>
            <Link href={`/user/${UserStore?.user?.id}`}>
                <a>
                    <UserAvatar url={UserStore?.user?.avatar}/>
                </a>
            </Link>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  display: flex;
  width: 130px;
  align-items: center;
`

const ButttonLogin = styled.div`
  cursor: pointer;
  font-weight: 700;
`

export default observer(UserUX);