import React from 'react';
import styled from "styled-components";
import {ButtonStyle} from "../../../styles/commonStyles";
import Link from "next/link";
import API from "../../Libs/API";

const ProfileButtons = ({me, user}) => {
    const userFriendIds = user.friends.map(({id}) => id)
    const userSubscribersIds = user.subscribers.map(({id}) => id)
    const isMe = user.id === me?.id

    const meInFriendList = userFriendIds.indexOf(me.id) !== -1
    const meInSubscriberList = userSubscribersIds.indexOf(me.id) !== -1

    const isOnlySub = !meInFriendList && meInSubscriberList ? "Вы подписчик" : "Вы знакомы"
    const checkFriendStatus = meInFriendList ? "Вы знакомы" : isOnlySub

    const addUser = async () => {
        const data = await API.updateUser(user.id, {
            friends: [...userFriendIds, me.id]
        })
        console.log(data.data)
    }


    return (
        <Wrapper>
            {!isMe
                ? <ButtonStyle onClick={() => addUser()}>
                    {!meInFriendList && !meInSubscriberList ? "Познакомится" : checkFriendStatus}
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