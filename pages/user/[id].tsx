import React from 'react';
import styled from "styled-components";
import ProfileHead from "../../src/Components/Profile/ProfileHead/ProfileHead";
import UserContent from "../../src/Components/Profile/UserContent/UserContent";
import API from "../../src/Libs/API";
import PlacePage from "../places/[id]";
import {NextPage} from "next";
import {observer} from "mobx-react-lite";
import axios from "axios";

interface Props {
    user: any
}


const Profile: NextPage<Props> = ({user}) => {
    console.log(user)
    return (
        <Wrapper>
            <ProfileHead user={user}/>
            <UserContent/>
        </Wrapper>
    );
};

const Wrapper = styled.div`

  @media (max-width: 1424px) {
    background: #fff;
    padding: 10px;
  }
`


Profile.getInitialProps = async (ctx) => {
    // const userReq = await axios(`http://185.185.69.74:1337/api/users/${ctx.query.id}?populate=*`)
    const userReq = await API.getUser(ctx.query.id)

    return {user: userReq.data}
}

export default observer(Profile);