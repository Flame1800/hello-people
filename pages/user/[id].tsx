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
  userPlaces: PlaceType[];
  userEvents: EventType[];
  userMeets: MeetType[];
}

const Profile: NextPage<Props> = ({
  user,
  userPlaces,
  userEvents,
  userMeets,
}) => {
  const userName = user?.username;

  console.log(userMeets);

  return (
    <Wrapper>
      <SeoHead
        title={`${userName}`}
        description={`Страница ${userName} в HelloPeople`}
        keywords={`@${userName}, профиль, персональная страница`}
      />
      <ProfileHead user={user} />
      <UserContent
        userMeets={userMeets}
        userPlaces={userPlaces}
        userEvents={userEvents}
        user={user}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  @media (max-width: 1424px) {
    background: #fff;
    margin: 0;
  }
`;

Profile.getInitialProps = async (ctx) => {
  const userReq = await API.getUser(ctx.query.id);
  const userPlacesReq = await API.getUserPlaces(ctx.query.id);
  const userEventsReq = await API.getUserEvents(ctx.query.id);
  const userMeetsReq = await API.getUserMeets(ctx.query.id);

  return {
    user: userReq.data,
    userPlaces: userPlacesReq.data.data,
    userEvents: userEventsReq.data.data,
    userMeets: userMeetsReq.data.data,
  };
};

export default observer(Profile);
