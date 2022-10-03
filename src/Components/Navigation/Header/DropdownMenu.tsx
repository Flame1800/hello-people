import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { theme } from '../../../../styles/theme';
import Link from 'next/link';

const DropdownMenu = () => {
    const route = useRouter();
    const links = [
        {
            title: "Место",
            route: "/places/add"
        },
        {
            title: "Встреча",
            route: "/meets/add"
        },
        {
            title: "Мероприяте",
            route: "/events/add"
        }
    ]

    return (
        <Wrapper>
            {links.map((link) => {
                return (
                    <Link href={link.route} key={link.route}>
                        <DropdownItem>
                            {link.title}
                        </DropdownItem>
                    </Link>
                )
            })}
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    background-color: white;
    z-index: 9999;
    inset: 0 0 auto auto;
    transform: translate(-16px, 80px);
    min-width: 200px;
    padding: 16px;
    border: 1px solid transparent;
    border-radius: 16px;
    box-shadow: 0 0 10px -6px;
`

const DropdownItem = styled.div`
    display: flex;
    align-items: center;
    padding: 16px;
    border-radius: 8px;
    cursor: pointer;
    user-select: none;
    transition: .05s ease-in-out;

    &:hover {
        background-color: #FAFAFA;
        transition: .05s ease-in-out;
    }
`

export default DropdownMenu;