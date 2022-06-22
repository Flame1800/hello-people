import React from 'react';
import styled from "styled-components";
import {ButtonStyle} from "../../../styles/commonStyles";
import Link from "next/link";
import API from "../../Libs/API";
import UserStore from "../../Stores/UserStore";

const ProfileButtons = ({me, user}) => {
    const [subscribe, setSubscribe] = React.useState('')

    const isMe = user.id === me?.id


    React.useEffect(() => {
        const myFriendIds = me.friends.map(({id}) => id)
        const userInMyFriendList = myFriendIds.indexOf(user.id) !== -1

        const chekStatus = userInMyFriendList ? "Отписаться" : "Подписаться"
        setSubscribe(chekStatus)
    }, [UserStore.user])


    const changeFriendState = async () => {
        if (subscribe === 'Отписаться') {
            await UserStore.unsubscribe(user.id)
            return setSubscribe("Подписаться")
        }

        if (subscribe === 'Подписаться') {
            await UserStore.subscribe(user.id)
            return setSubscribe("Отписаться")
        }
    }


    return (
        <Wrapper>
            {!isMe
                ?   <ButtonStyle onClick={() => changeFriendState()}>
                        {subscribe}
                    </ButtonStyle>
                :   <Link href="/user/edit">
                        <a>
                            <ButtonStyle>Редактировать</ButtonStyle>
                        </a>
                    </Link>}
                    <a href="/messenger">
                        <div className="btn-gray">
                            <img src="/img/chat.svg" alt="иконка"/>
                        </div>
                    </a>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  display: flex;
  margin-bottom: 2px;
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
    height: 40px;
    border: 1px solid #949494;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    font-size: 14px;
    color: #585858;
    margin-left: 10px;
    cursor: pointer;
  }
`

const ButtonMessage = styled.div`
    
`

export default ProfileButtons;