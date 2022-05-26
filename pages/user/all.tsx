import React from 'react';
import styled from "styled-components";
import API from "../../src/Libs/API";
import {NextPage} from "next";
import {observer} from "mobx-react-lite";
import Link from "next/link";

interface Props {
    users: any
}


const Users: NextPage<Props> = ({users}) => {
    console.log(users)
    return (
        <Wrapper>
            <div className="users">
                <div className="title">Люди</div>
                {users.map((user: any) => {
                    return (
                        <Link href={`/user/${user.id}`}>
                            <a className='user'>
                                <div className="round"/>
                                <div className=" nick">{user.username}</div>
                            </a>
                        </Link>
                    )
                })}
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  margin-top: 20px;
  min-height: 100vh;
  padding: 40px 20px;
  background: #fff;
  border-radius: 40px;

  .users {
    width: 800px;
    margin: 0 auto;

    .title {
      font-size: 30px;
      font-weight: 600;
      padding: 0 20px;
    }
  }

  .user {
    padding: 20px;
    font-size: 18px;
    cursor: pointer;
    margin: 20px 0;
    transition: .1s;
    border-radius: 30px;
    display: flex;

    .round {
      border-radius: 50%;
      width: 25px;
      height: 25px;
      background: #cbcbcb;
      margin-right: 20px;
    }

    &:hover {
      background: #f3f3f3;
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