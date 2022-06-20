import React from 'react';
import styled from "styled-components";
import Rating from "./Rating";
import UserStore from "../../Stores/UserStore";
import LikePlace from "./Card/LikePlace";
import Like from "../Common/Like";
import Link from "next/link";
import Comment from "../Common/Comment";

const MetaActionsPlace = ({place}) => {
    const {attributes} = place

    return (
        <Wrapper>
                <Rating size="small" disable={false} place={{}}/>
                <div className="user-meta">
                    {UserStore.user
                        ? <LikePlace likes={attributes.likes} id={place.id} />
                        : <Like value={attributes.likes.data.length} active={false} />}

                    <Link href={`/places/${place.id}#comments`}>
                        <a>
                            <Comment value={attributes.comments.data.length} />
                        </a>
                    </Link>
                </div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 5px;

  .user-meta {
    display: flex;

    > div {
      margin-left: 10px;
    }
  }
`

export default MetaActionsPlace;