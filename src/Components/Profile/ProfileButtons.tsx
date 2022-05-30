import React from 'react';
import styled from "styled-components";
import {ButtonStyle} from "../../../styles/commonStyles";
import Link from "next/link";
import API from "../../Libs/API";
import UserStore from "../../Stores/UserStore";

const ProfileButtons = ({me, user}) => {
    const [friendState, setFriendState] = React.useState('')

    const isMe = user.id === me?.id


    React.useEffect(() => {
        const myFriendIds = me.friends.map(({id}) => id)
        const mySubscriberIds = me.subscribers.map(({id}) => id)

        const userInMyFriendList = myFriendIds.indexOf(user.id) !== -1
        const userInMySubscriberList = mySubscriberIds.indexOf(user.id) !== -1

        const userFriendState = {
            isMyFriend: userInMyFriendList && userInMySubscriberList,
            mySubscriber: !userInMyFriendList && userInMySubscriberList,
            meSubscriber: userInMyFriendList && !userInMySubscriberList
        }

        const isFiendLink = userFriendState.isMyFriend || userFriendState.meSubscriber || userFriendState.mySubscriber
        const whoSubscribe = userFriendState.meSubscriber ? "Ты подписан" : "Он подписан"
        const chekStatus = userFriendState.isMyFriend ? "Вы знакомы" : whoSubscribe

        setFriendState(isFiendLink ? chekStatus : "Познакомится")
    }, [])


    const changeFriendState = async () => {
        if (friendState === 'Вы знакомы') {
            await UserStore.deleteFriend(user.id)
            return setFriendState("Он подписан")
        }

        if (friendState === 'Ты подписан') {
            await UserStore.deleteFriend(user.id)
            return setFriendState("Познакомится")
        }

        if (friendState === 'Он подписан') {
            await UserStore.addFriend(user.id)
            return setFriendState("Вы знакомы")
        }

        if (friendState === 'Познакомится') {
            await UserStore.addFriend(user.id)
            return setFriendState("Ты подписан")
        }

    }


    return (
        <Wrapper>
            {!isMe
                ? <ButtonStyle onClick={() => changeFriendState()}>
                    {friendState}
                </ButtonStyle>
                : <Link href="/user/edit">
                    <a>
                        <ButtonStyle>Редактировать</ButtonStyle>
                    </a>
                </Link>}
            <div className="btn-gray">
                <img src="/img/chat.svg" alt="иконка"/>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;
  align-items: center;
  margin-top: 10px;

  > div {
    max-width: 140px;
    margin: 2px 0;
  }

  .btn-gray {
    padding: 10px;
    border-radius: 10px;
    width: 64px;
    height: 35px;
    border: 1px solid #949494;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    font-size: 14px;
    color: #585858;
    margin-left: 10px;
  }
`

export default ProfileButtons;