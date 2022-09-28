import React from "react";
import styled from "styled-components";
import CardPlaceCarousel from "./CardPlaceCarousel";
import Link from "next/link";
import { observer } from "mobx-react-lite";
import MetaActionsPlace from "../MetaActionsPlace";

type Props = {
  card: any;
};

const PlaceCard: React.FC<Props> = ({ card }) => {
  const { attributes } = card;

  return (
    <Wrapper>
      <CardPlaceCarousel
        pictures={attributes.pictures}
        cover={attributes.cover}
      />
      <div className="content">
        <Link href={`/places/${card.id}`}>
          <a>
            <div className="name">{attributes.title}</div>
            <div className="location">{attributes.location}</div>
          </a>
        </Link>
        <MetaActionsPlace place={card} />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 390px;
  margin: 20px auto;
  height: 300px;
  width: 100%;
  background: #ffffff;
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
  }
`;

export default observer(PlaceCard);
