import React from "react";
import styled from "styled-components";
import UiStateStore from "../../Stores/UiStateStore";
import PopupWrapper from "../Common/PopupWrapper";
import { observer } from "mobx-react-lite";
import { theme } from "../../../styles/theme";
import Link from "next/link";

const CreateEventListModal = () => {
  const { toggleCreateEventListModal, createEventListModal } = UiStateStore;

  return (
    <PopupWrapper
      setShow={toggleCreateEventListModal}
      width={400}
      show={createEventListModal}
    >
      <Wrapper>
        <div className="title">Что хотите создать?</div>
        <div className="list">
          <Link href="/events/add">
            <ListItem onClick={toggleCreateEventListModal}>
              <div className="listItemTitle">Мероприятие</div>
            </ListItem>
          </Link>
          <Link href="/meets/add">
            <ListItem onClick={toggleCreateEventListModal}>
              <div className="listItemTitle">Встреча</div>
            </ListItem>
          </Link>
          <Link href="/places/add">
            <ListItem onClick={toggleCreateEventListModal}>
              <div className="listItemTitle">Место</div>
            </ListItem>
          </Link>
        </div>
      </Wrapper>
    </PopupWrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  width: 100%;

  .title {
    font-size: 22px;
    font-weight: 800;
    margin-bottom: 48px;
  }

  .list {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  .list {
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  .listItemTitle {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    font-weight: 700;
    width: 100%;
  }

  .listItemImg {
    display: flex;
    position: absolute;
  }
`;

const ListItem = styled.div`
  display: flex;
  align-items: center;
  padding: 22px 30px;
  border-radius: 16px;
  width: 100%;
  cursor: pointer;
  transition: 0.1s;

  &:hover {
    background: rgba(231, 231, 231, 0.4);
  }
`;

export default observer(CreateEventListModal);
