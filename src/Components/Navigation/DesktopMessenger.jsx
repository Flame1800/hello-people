import React from 'react';
import MessengerButton from "./NavButtonsSvg/MessengerButton";
import Chat from "../../modules/chat";
import styled from "styled-components";
import {theme} from "../../../styles/theme";

const DesktopMessenger = () => {
    const [messenger, toggleMessenger] = React.useState(false)

    return (
        <>
            <Button active={messenger} onClick={() => toggleMessenger(!messenger)}>
                <MessengerButton/>
            </Button>
            {messenger && <Chat/>}
        </>
    );
};

const Button = styled.div`
  cursor: pointer;

  svg {
    fill: ${({active}) => active ? theme.color.orange : '#000'};
  }
`

export default DesktopMessenger;