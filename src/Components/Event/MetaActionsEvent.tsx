import React from 'react';
import styled from "styled-components";
import Rating from "./Rating";
import UserStore from "../../Stores/UserStore";
import LikePlace from "./Card/LikePlace";
import Like from "../Common/Like";
import Link from "next/link";
import Comment from "../Common/Comment";
import LikeEvent from "./LikeEvent";

const MetaActionsPlace = ({event}) => {
    const {attributes} = event

    return (
        <Wrapper>
                {UserStore.user
                    ? <LikeEvent likes={attributes.likes} id={event.id}/>
                    : <Like value={attributes.likes.data.length} active={false} />}
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
`

export default MetaActionsPlace;