import React from 'react';
import UiStateStore from "../../../Stores/UiStateStore";
import {AvatarWrapper, NavLinkStyle} from "./SideBar";
import ProfileButtonIcon from "../NavButtonsSvg/ProfileButtonChanger";
import UserStore from "../../../Stores/UserStore";
import Link from "next/link";
import {useRouter} from "next/router";
import {observer} from "mobx-react-lite";
import UserAvatar from "../../User/UserAvatar";
import styled from "styled-components";

const ProfileLink = () => {
    const route = useRouter()

    if (!UserStore.user) {
        return (
            <div>
                <NavLinkStyle onClick={() => UiStateStore.toggleAuthModal(true)}>
                    <ProfileButtonIcon/>
                    Войти
                </NavLinkStyle>
            </div>
        );
    }

    return (
        <Link href={`/user/${UserStore.user.id}`}>
            <a>
                <AvatarWrapper active={route.asPath === `/user/${UserStore.user.id}`}>
                    <UserAvatar url={UserStore.user.avatar} size='sm'/>
                    <div className="username">
                        {UserStore.user.username}
                    </div>
                </AvatarWrapper>
            </a>
        </Link>
    );
};

export default observer(ProfileLink);