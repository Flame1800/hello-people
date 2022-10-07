import React from "react";
import styled from "styled-components";
import Rating from "./Rating";
import UserStore from "../../Stores/UserStore";
import LikePlace from "./Card/LikePlace";
import Like from "../Common/Like";
import Link from "next/link";
import Comment from "../Common/Comment";
import { observer } from "mobx-react-lite";

type MetaActionsType = {
  place: PlaceType;
};

const MetaActionsPlace = ({ place }: MetaActionsType) => {
  const { attributes } = place;

  return (
    <Wrapper>
      {UserStore.user ? (
        <LikePlace likes={attributes.likes} id={place.id} />
      ) : (
        <Like value={attributes?.likes?.data.length || 0} active={false} />
      )}

      <Link href={`/places/${place.id}#comments`}>
        <a>
          <Comment value={attributes.comments.data.length} />
        </a>
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 5px;
`;

export default observer(MetaActionsPlace);
