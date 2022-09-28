import React, { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import BackSvg from "../MessageRoom/RoomHeader/back.svg";
import { theme } from "../../../../../styles/theme";
import chatStore from "../../stores/chatStore";
import Profile from "./Profile/Profile";
import Members from "./Members/Members";

type ModalProps = {
  active: boolean;
  setActive: Dispatch<SetStateAction<boolean>>;
};

const RoomInfo: React.FC<ModalProps> = (props) => {
  const { active, setActive } = props;
  const { deleteChat } = chatStore;

  if (!active) {
    return null;
  }

  const deleteChatHandle = () => {
    deleteChat();
  };

  return (
    <Wrapper>
      <div className="head">
        <BackSvg onClick={() => setActive(false)} />
        <div className="title">Информация</div>
      </div>
      <Profile />
      <Members />
      <ButtonOut onClick={deleteChatHandle}>Покинуть чат</ButtonOut>
    </Wrapper>
  );
};

const ButtonOut = styled.div`
  font-size: 17px;
  font-weight: 500;
  color: ${theme.color.orange};
  text-align: center;
  width: 90%;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.2s;
  position: absolute;
  bottom: 20px;

  &:hover {
    background: rgba(252, 81, 48, 0.06);
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
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 20px;
  z-index: 600;

  .head {
    display: flex;
    margin-bottom: 40px;

    .title {
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      line-height: 33px;
      text-align: center;
      margin-left: 20%;
    }
  }

  .content {
    padding: 20px;
    border-radius: 12px;
  }
`;

export default RoomInfo;
