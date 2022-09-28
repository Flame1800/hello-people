import React from "react";
import styled from "styled-components";
import UserStore from "../../../Stores/UserStore";
import { observer } from "mobx-react-lite";
import UiStateStore from "../../../Stores/UiStateStore";

const Familiars = ({ user }: { user: UserAttributes }) => {
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
                    {user.friends.length}
                </div>
                {user.friends.length === 1 ? 'подписка' : 'подписки'}
            </div>
            <div className="subscribers caption" onClick={() => openUsersList("Подписчики")}>
                <div className="value">
                    {user.subscribers.length}
                </div>
                {user.subscribers.length === 1 ? 'подписчик' : 'подписчиков'}
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
    width: 48%;
    font-weight: 500;
    font-size: 14px;
    color: #373737;
    white-space: nowrap;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    border-radius: 10px;
    border: 1px dashed #a2a2a2;
    padding: 3px 10px;

    .value {
      font-weight: 900;
    }
  }

  .main-stat {
    display: flex;
    align-items: center;
  }

  .subscribers {
    color: #ff7373;
    border: 1px dashed #ff7373;
  }
`;

export default observer(Familiars);
