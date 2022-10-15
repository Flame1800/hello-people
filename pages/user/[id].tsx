import React from "react";
import styled from "styled-components";
import ProfileHead from "../../src/Components/Profile/ProfileHead/ProfileHead";
import UserContent from "../../src/Components/Profile/UserContent/UserContent";
import API from "../../src/Helpers/API";
import { NextPage } from "next";
import { observer } from "mobx-react-lite";
import SeoHead from "../../src/Components/Layouts/SeoHead";

interface Props {
  user: User;
}

const Profile: NextPage<Props> = ({ user }) => {
  const userName = user?.username;

  return (
    <Wrapper>
      <SeoHead
        title={`${userName}`}
        description={`Страница ${userName} в HelloPeople`}
        keywords={`@${userName}, профиль, персональная страница`}
      />
      <ProfileHead user={user} />
      <UserContent />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 0 20px;

  @media (max-width: 1424px) {
    background: #fff;
    padding: 10px;
    margin: 0;
  }
`;

Profile.getInitialProps = async (ctx) => {
  const userReq = await API.getUser(ctx.query.id);

  return { user: userReq.data };
};

export default observer(Profile);
