import React from 'react';
import UiStateStore from "../../../Stores/UiStateStore";
import {NavLinkStyle} from "./SideBar";
import ProfileButtonIcon from "../NavButtonsSvg/ProfileButtonChanger";
import UserStore from "../../../Stores/UserStore";
import Link from "next/link";
import {useRouter} from "next/router";
import {observer} from "mobx-react-lite";

const ProfileLink = () => {
    const route = useRouter()

    if (!UserStore.user) {
        return (
            <div>
                <NavLinkStyle
                    onClick={() => UiStateStore.toggleAuthModal(true)}
                >
                    <ProfileButtonIcon/>
                    Войти
                </NavLinkStyle>
            </div>
        );
    }

    return (
        <Link href={`/user/${UserStore.user.id}`}>
            <NavLinkStyle
                active={route.asPath === "/user"}
            >
                <ProfileButtonIcon/>
                {UserStore.user.username}
            </NavLinkStyle>
        </Link>
    );
};

export default observer(ProfileLink);