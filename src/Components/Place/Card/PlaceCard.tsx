import React from 'react';
import styled from "styled-components";
import Carousel from "../../Common/Carousel/Carousel";
import Rating from "../Rating";
import Like from "../../Common/Like";
import Comment from "../../Common/Comment";
import CardPlaceCarousel from "./CardPlaceCarousel";
import Link from "next/link";

const PlaceCard = ({card}) => {
    const {attributes} = card

    console.log(attributes)

    return (
        <Wrapper>
            <CardPlaceCarousel pictures={attributes.pictures} cover={attributes.cover}/>
            <div className="content">
                <Link href={`/places/${card.id}`}>
                    <a>
                        <div className="name">{attributes.title}</div>
                        <div className="location">{attributes.location}</div>
                    </a>
                </Link>
                <div className="meta">
                    <Rating size="small" disable={false} place={{}}/>
                    <div className="user-meta">
                        <Like value={0} onClick={() => console.log("event like")} active={false}/>
                        <Comment value={attributes.comments.data.length} onClick={() => console.log("event comment")}/>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  margin-bottom: 40px;
  max-width: 390px;
  height: 300px;
  width: 100%;
  background: #FFFFFF;
  box-shadow: 0 8px 17px rgba(0, 0, 0, 0.1);
  border-radius: 20px;

  @media (min-width: 1400px) {
    max-width: 290px;
    margin-right: 10px;
    margin-left: 10px;
  }

  .content {
    padding: 15px;

    .name {
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 97.9%;
    }

    .location {
      margin-top: 3px;
      font-weight: 500;
      font-size: 14px;
      color: #676767;
    }

    .meta {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 5px;
    }

    .user-meta {
      display: flex;

      > div {
        margin-left: 10px;
      }
    }
  }
`

export default PlaceCard;

