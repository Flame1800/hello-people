import React from "react";
import PlaceCard from "../../../Place/Card/PlaceCard";
import styled from "styled-components";
import { observer } from "mobx-react-lite";
import UserContentStore from "../../../../Stores/UserContentStore";

const UserPlaces = () => {
  const { userPlaces } = UserContentStore;

  return (
    <Wrapper>
      {userPlaces.map((place) => {
        return <PlaceCard key={place.id} card={place} />;
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;

  @media screen and (max-width: 700px) {
    justify-content: center;
  }
`;

export default observer(UserPlaces);
