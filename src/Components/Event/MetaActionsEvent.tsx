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
  const vkRef = useRef<HTMLHeadingElement>(null);

  const imgUrl = attributes.cover?.data
    ? API.url + attributes.cover.data.attributes.url
    : "/img/mock-avatar.svg";

  useLayoutEffect(() => {
    vkRef.current.innerHTML = VK.Share.button(
      {
        url: `${API.url}/events/${event.id}`,
        title: event.attributes.title,
        image: imgUrl,
        noparse: false,
      },
      {
        type: "custom",
        text: "<img src='/img/vk-logo.svg' width='24' height='24' />",
      }
    );
  }, []);

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
      <div className="vk-share-btn" ref={vkRef}></div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-left: 10px;
  margin-top: 20px;
  display: flex;
  align-items: center;

  .vk-share-btn {
    margin-left: 20px;
    display: flex;
    align-items: center;

    span {
      display: flex;
      align-items: center;
    }
  }
`;

export default MetaActionsEvent;
