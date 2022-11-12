import React, { Dispatch, SetStateAction } from "react";
import styled, { css } from "styled-components";
import BackSvg from "../MessageRoom/RoomHeader/back.svg";
import { theme } from "../../../../../styles/theme";
import chatStore from "../../stores/chatStore";
import Profile from "./Profile/Profile";
import Members from "./Members/Members";
import { observer } from "mobx-react-lite";
import dialogsStore from "../../stores/dialogsStore";

type Props = {
  active: boolean;
  setActive: Dispatch<SetStateAction<boolean>>;
  link: string;
};

const RoomInfo = (props: Props) => {
  const { active, setActive, link } = props;
  const { deleteChat, isWidget } = chatStore;
  const { currentDialog } = dialogsStore;

  if (!active) {
    return null;
  }

  const deleteChatHandle = () => {
    deleteChat();
  };

  return (
    <Wrapper>
      <div className="head">
        <div className="back">
          <BackSvg onClick={() => setActive(false)} />
        </div>
        <div className="title">Информация</div>
      </div>
      <Profile link={link} />
      {currentDialog?.category !== "private" && <Members />}
      <ButtonOut isWidget={isWidget} onClick={deleteChatHandle}>
        Покинуть чат
      </ButtonOut>
    </Wrapper>
  );
};

const ButtonOut = styled.div<{ isWidget: boolean }>`
  font-size: 17px;
  font-weight: 700;
  color: ${theme.color.orange};
  text-align: center;
  cursor: pointer;
  bottom: 0;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: #fff;
  position: absolute;

  &:hover {
    background: rgb(255, 221, 216);
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fff;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  z-index: 600;
  border-radius: 20px;

  .head {
    .back {
      position: absolute;
      left: 25px;
      top: 22px;
    }
    display: flex;
    justify-content: center;
    margin-bottom: 40px;

    .title {
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      line-height: 33px;
      text-align: center;
    }
  }

  .content {
    padding: 20px;
    border-radius: 12px;
  }
`;

export default observer(RoomInfo);
