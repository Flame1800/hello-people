import React from "react";
import styled from "styled-components";
import UserStore from "../../Stores/UserStore";
import Like from "../Common/Like";
import Link from "next/link";
import Comment from "../Common/Comment";
import LikeEvent from "./LikeEvent";

type MetaActionsType = {
  event: EventEntity;
};

const MetaActionsEvent = ({ event }: MetaActionsType) => {
  const { attributes } = event;

  return (
    <Wrapper>
      {UserStore.user ? (
        <LikeEvent likes={attributes.likes} id={event.id} />
      ) : (
        <Like value={attributes?.likes?.data.length || 0} active={false} />
      )}
      <Link href={`/events/${event.id}#comments`}>
        <a>
          <Comment value={attributes.comments.data.length} />
        </a>
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;

  > div {
    margin-left: 10px;
  }
`;

export default MetaActionsEvent;
