import React from 'react';
import styled from "styled-components";
import API from "../../../src/Libs/API";
import {NextPage} from "next";
import {observer} from "mobx-react-lite";
import Link from "next/link";
import UserAvatar from "../../../src/Components/User/UserAvatar";
import UserListTabs from '../../../src/Components/User/UsersList/UserListTabs'
import Search from './Search';
import Familiars from '../../../src/Components/Profile/ProfileHead/Familiars';
import {useRouter} from "next/router";
import UserStore from "../../../src/Stores/UserStore";
import UserCardMini from "../../../src/Components/User/UserCard/UserCardMini";

interface Props {
    users: any
}


const Users: NextPage<Props> = ({users}) => {
    const [peoples, setPeoples] = React.useState(users)
    const [user, setUser] = React.useState(UserStore.user)
    const router = useRouter()


    React.useEffect(() => {
        if (user && router.query.category === 'friends') {
            return setPeoples(user.friends)
        }
        if (user && router.query.category === 'subscribers') {
            return setPeoples(user.subscribers)
        }
        if (router.query.category === 'all') {
            return setPeoples(users)
        }
    }, [router.query.category])

    React.useEffect(() => {
        const getUser = async () => {
            if (UserStore.user) {
                const currUser = await API.getUser(UserStore.user.id)
                return setUser(currUser.data)
            }
            return
        }

        getUser()
    }, [UserStore])

    return (
        <Wrapper>
            <div className="users">
                <UserListTabs/>
                <Search/>
                {peoples.map((user: any) => <UserCardMini user={user}/>)}
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  min-height: 80vh;
  padding: 40px 20px;
  background: #fff;
  border-radius: 40px;

  .users {
    width: 600px;
    margin: 0 auto;

    .title {
      font-size: 30px;
      font-weight: 600;
      padding: 0 20px;
    }
  }

  .user {
    padding: 16px 24px;
    font-size: 16px;
    cursor: pointer;
    margin: 10px 0;
    border-radius: 16px;
    display: flex;
    align-items: center;

    .username {
      margin-left: 15px;
    }

    &:hover {
      background: #f5f5f5;
    }
  }

  @media (max-width: 1424px) {
    background: #fff;
    padding: 10px;
  }
`


Users.getInitialProps = async () => {
    // const userReq = await axios(`http://185.185.69.74:1337/api/users/${ctx.query.id}?populate=*`)
    const userReq = await API.getUsers()

    return {users: userReq.data}
}

export default observer(Users);