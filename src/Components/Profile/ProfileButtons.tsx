import React, { memo } from "react";
import styled from "styled-components";
import { ButtonStyle } from "../../../styles/commonStyles";
import Link from "next/link";
import UserStore from "../../Stores/UserStore";
import OpenChatWithUser from "./openChatWithUser/openChatWithUser";
import { observer } from "mobx-react-lite";

type Props = {
  user: User;
  me: User;
};

const ProfileButtons = ({ me, user }: Props) => {
  const [subscribe, setSubscribe] = React.useState("");

  const isMe = user.id === me?.id;

  React.useEffect(() => {
    const myFriendIds = me.friends.map(({ id }) => id);
    const userInMyFriendList = myFriendIds.indexOf(user.id) !== -1;

    const chekStatus = userInMyFriendList ? "Отписаться" : "Подписаться";
    setSubscribe(chekStatus);
  }, [UserStore.user]);

  const changeFriendState = async () => {
    if (subscribe === "Отписаться") {
      await UserStore.unsubscribe(user.id);
      return setSubscribe("Подписаться");
    }

    if (subscribe === "Подписаться") {
      await UserStore.subscribe(user.id);
      return setSubscribe("Отписаться");
    }
  };

  return (
    <Wrapper>
      {!isMe ? (
        <ButtonStyle onClick={() => changeFriendState()}>
          {subscribe}
        </ButtonStyle>
      ) : (
        <Link href="/user/edit">
          <a>
            <ButtonStyle>Редактировать</ButtonStyle>
          </a>
        </Link>
      )}
      <OpenChatWithUser currUser={user} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  margin-bottom: 2px;
  align-items: center;
  margin-top: 10px;
`;

export default observer(ProfileButtons);
