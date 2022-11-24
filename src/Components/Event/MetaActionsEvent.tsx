import React, { useEffect, useLayoutEffect, useRef } from "react";
import styled from "styled-components";
import UserStore from "../../Stores/UserStore";
import Like from "../Common/Like";
import Link from "next/link";
import Comment from "../Common/Comment";
import LikeEvent from "./LikeEvent";
import { useRouter } from "next/router";
import API from "../../Helpers/API";

type MetaActionsType = {
  event: EventType;
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
      <Link href={`/events/${event.attributes.slug}#comments`}>
        <a>
          <Comment value={attributes.comments.data.length} />
        </a>
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 15px;
  display: flex;
  align-items: center;
`;

export default MetaActionsEvent;
