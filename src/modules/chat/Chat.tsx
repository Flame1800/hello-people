import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { ChatWrapper } from "./Chat.style";
import UserStore from "../../Stores/UserStore";
import ChatContent from "./components/ChatContent";
import styled from "styled-components";
import { ButtonStyle } from "../../../styles/commonStyles";
import UiStateStore from "../../Stores/UiStateStore";
import chatStore from "./stores/chatStore";

type Props = {
  isWidget?: boolean;
};

const Chat = ({ isWidget }: Props) => {
  const { user } = UserStore;
  const { setScreenMode } = chatStore;
  const socketUrl = "https://hellopeople.online"; // http://192.168.210.10:1337

  useEffect(() => {
    setScreenMode(isWidget ?? true);
    if (document.documentElement.clientWidth < 750) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const regDialog = (
    <Plug>
      <div className="caption">
        Войдите в HelloPeople что бы пользоваться мессенджером
      </div>
      <ButtonStyle outline onClick={() => UiStateStore.toggleAuthModal()}>
        Войти
      </ButtonStyle>
    </Plug>
  );

  return (
    <ChatWrapper>
      {!user ? (
        regDialog
      ) : (
        <ChatContent isWidget={isWidget} apiUrl={socketUrl} user={user} />
      )}
    </ChatWrapper>
  );
};

const Plug = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  max-width: 90%;
  margin: 0 auto;
  height: 80vh;

  @media (max-width: 1424px) {
    height: 100vh;
  }

  .caption {
    font-weight: 600;
    font-size: 18px;
    color: #2f2f2f;
    margin-bottom: 20px;
  }
`;

export default observer(Chat);
