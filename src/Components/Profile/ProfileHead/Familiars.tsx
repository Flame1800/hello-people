import React from "react";
import styled from "styled-components";
import UserStore from "../../../Stores/UserStore";
import { observer } from "mobx-react-lite";
import UiStateStore from "../../../Stores/UiStateStore";

const Familiars = ({ user }: { user: User }) => {
  const openUsersList = (title: string) => {
    UserStore.setUserSubscribers({
      title,
      users: title === "Подписчики" ? user.subscribers : user.friends,
    });
    UiStateStore.toggleUsersListModal();
  };

  return (
    <Wrapper>
      <div className="caption" onClick={() => openUsersList("Подписки")}>
        <div className="value">
          подписки &nbsp;
          <b>{user?.friends?.length || 0}</b>
        </div>
      </div>
      <div
        className="subscribers caption"
        onClick={() => openUsersList("Подписчики")}
      >
        <div className="value">
          подписчики &nbsp;
          <b>{user?.subscribers?.length || 0}</b>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;

  .caption {
    width: 100%;
    font-weight: 500;
    font-size: 14.5px;
    color: #373737;
    white-space: nowrap;
    display: flex;
    flex-direction: column;
    cursor: pointer;
    border-radius: 10px;
    padding: 8px 0;
  }

  .main-stat {
    display: flex;
    align-items: center;
  }

  .subscribers {
    color: #ff7373;
  }
`;

export default observer(Familiars);
