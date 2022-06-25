import React from 'react';
import { observer } from 'mobx-react-lite';
import { ChatWrapper } from './ChatStyle';
import UserStore from "../../Stores/UserStore";
import ChatContent from "./components/ChatContent";
import styled from "styled-components";
import {ButtonStyle} from "../../../styles/commonStyles";
import UiStateStore from "../../Stores/UiStateStore";

type ChatProps = {
    api?: string;
};

const Chat: React.FC<ChatProps> = (props) => {
    const {user} = UserStore

    if (!user) {
        return (
            <ChatWrapper>
                <Plug>
                    <div className="caption">Войдите в HelloPeople что бы пользоваться мессенджером</div>
                    <ButtonStyle outline onClick={() => UiStateStore.toggleAuthModal()}>Войти</ButtonStyle>
                </Plug>
            </ChatWrapper>
        )
    }

    return (
        <ChatWrapper>
            <ChatContent />
        </ChatWrapper>
    );
};

const Plug = styled.div`
  height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  max-width: 90%;
  margin: 0 auto;

  .caption {
    font-weight: 600;
    font-size: 18px;
    color: #2f2f2f;
    margin-bottom: 20px;
  }
`

export default observer(Chat);