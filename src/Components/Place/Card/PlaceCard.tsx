import React from 'react';
import styled from "styled-components";
import Carousel from "../../Common/Carousel/Carousel";
import Rating from "../Rating";
import Like from "../../Common/Like";
import Comment from "../../Common/Comment";
import CardPlaceCarousel from "./CardPlaceCarousel";
import Link from "next/link";

const PlaceCard = () => {
    return (
        <Wrapper>
            <CardPlaceCarousel/>
            <div className="content">
                <Link href={`/places/${1}`}>
                    <a>
                        <div className="name">Gloria Jean's coffees</div>
                    </a>
                </Link>
                <div className="meta">
                    <Rating size="small" disable={false} place={{}}/>
                    <div className="user-meta">
                        <Like value={34} onClick={() => console.log("event like")} active={false}/>
                        <Comment value={34} onClick={() => console.log("event comment")}/>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  margin-bottom: 40px;
  max-width: 390px;
  height: 290px;
  width: 100%;
  background: #FFFFFF;
  box-shadow: 0 4px 17px rgba(0, 0, 0, 0.2);
  border-radius: 20px;

  .content {
    padding: 15px;

    .name {
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 97.9%;
    }

    .meta {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 20px;
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

