import React from 'react';
import UiStateStore from "../../../Stores/UiStateStore";
import PopupWrapper from "../../Common/PopupWrapper";
import styled from "styled-components";
import UserStore from "../../../Stores/UserStore";
import {observer} from "mobx-react-lite";
import UserCardMini from "../UserCard/UserCardMini";

const UsersListModal = () => {
    const {toggleUsersListModal, usersListModal} = UiStateStore
    const {title, users} = UserStore.users

    if (!users) {
        return null
    }

    return (
        <PopupWrapper setShow={toggleUsersListModal} show={usersListModal}>
            <ListWrapper>
                <div className="title">{title}</div>
                <div className="list">
                    {users && users?.map(user => {
                        return (
                            <div onClick={toggleUsersListModal}>
                                <UserCardMini user={user}/>
                            </div>
                        )
                    })}
                    {users.length === 0
                    &&
                    <div className='not-users'>
                        <div className="caption">Список пуст</div>
                    </div>}
                </div>
            </ListWrapper>
        </PopupWrapper>
    );
};

const ListWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  width: 100%;

  .title {
    font-size: 22px;
    font-weight: 600;
    margin-bottom: 20px;
  }

  .list {
    width: 100%;
  }

  .not-users {
    margin-top: 20px;
    height: 20vh;
    display: flex;
    justify-content: center;
    align-items: center;

    .caption {
      font-weight: 800;
      text-align: center;
      color: #d5d5d5;
      font-size: 30px;
    }
  }
`


export default observer(UsersListModal);