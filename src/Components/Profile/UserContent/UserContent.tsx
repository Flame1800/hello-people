import React, { useEffect, useState } from "react";
import styled from "styled-components";
import UserContentTabs from "./UserContentTabs";
import { theme } from "../../../../styles/theme";
import UserPLaces from "./UserPlaces/UserPlaces";
import userContentStore from "../../../Stores/UserContentStore";
import UserEvents from "./UserEvents/UserEvents";
import UserMeets from "./UserMeets/UserMeets";

type Props = {
  userPlaces: PlaceType[];
  userEvents: EventType[];
  userMeets: MeetType[];
  user: User;
};

const UserContent = ({ userPlaces, userEvents, userMeets, user }: Props) => {
  const [active, setActive] = useState();
  const { setUserPlaces, setUserEvents, setUserMeets } = userContentStore;

  useEffect(() => {
    setUserPlaces(userPlaces);
    setUserEvents(userEvents);
    setUserMeets(userMeets);
  }, [user]);

  return (
    <Wrapper>
      <UserContentTabs active={active} setActive={setActive} />
      {active === "places" && <UserPLaces />}
      {active === "events" && <UserEvents />}
      {active === "meets" && <UserMeets />}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding-top: 20px;
  padding-bottom: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1000px;
  margin: 20px auto;
  background: rgba(255, 255, 255, 0.67);
  border-radius: 32px;
  min-height: 61.5vh;

  @media (min-width: 1424px) {
    box-shadow: ${theme.boxShadow.mainComponent};
  }

  .caption {
    font-size: 18px;
    text-align: center;
    font-weight: 400;
    color: #7e7e7e;
    max-width: 370px;
    user-select: none;
  }

  @media (max-width: 1424px) {
    background: #fff;
    padding: 20px 0;
  }
`;

export default UserContent;
