import React from "react";
import styled from "styled-components";
import PinnedPlace from "../PinnedPlace";
import NameService from "../../Common/Services/NameService";
import API from "../../../Helpers/API";
import { theme } from "../../../../styles/theme";
import makeBeautyDate from "../../../Helpers/makeBeautyDate";
import Link from "next/link";
import { observer } from "mobx-react-lite";
import MetaActionsEvent from "../MetaActionsEvent";

const EventCard = ({ event }) => {
  const { attributes } = event;
  const { place } = attributes;
  const categoriesString = attributes.categories.data
    .map(({ attributes }) => attributes.title)
    .join(", ");

  return (
    <Wrapper id={event.id}>
      <div className="card">
        <div className="event">
          <Link href={`/events/${event.id}`}>
            <a className="cover">
              {attributes.cover.data ? (
                <img
                  className="gallery"
                  src={API.url + attributes.cover.data.attributes.url}
                  alt="обложка"
                />
              ) : (
                <img
                  className="gallery"
                  src="/img/mock-avatar.svg"
                  alt="обложка"
                />
              )}
            </a>
          </Link>
          <div className="info">
            <Link href={`/events/${event.id}`}>
              <a>
                <div className="name-wrap">
                  <NameService
                    name={attributes.abbTitle}
                    category={categoriesString}
                  />
                </div>
              </a>
            </Link>
            <div className="event-meta">
              <Link href={`/events/${event.id}`}>
                <a>
                  <div className="date">
                    {makeBeautyDate(attributes.dateStart)}
                  </div>
                  <div className="address">
                    {place?.data
                      ? place?.data.attributes.location
                      : "не найдено"}
                  </div>
                </a>
              </Link>
              <MetaActionsEvent event={event} />
            </div>
          </div>
        </div>
        {place?.data && <PinnedPlace place={attributes.place.data} />}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 840px;
  width: 100%;
  align-items: center;
  background: #ffffff;
  border-radius: 15px;
  padding: 20px;
  margin-bottom: 30px;
  box-shadow: 0 0 10px -6px;

  .card {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    @media (min-width: 870px) {
      flex-wrap: nowrap;
    }
  }

  .cover {
    margin: 0 15px;

    img {
      object-fit: contain;
      background: #eaeaea;
    }

    @media (max-width: 870px) {
      width: 100%;
      margin: 0;
    }
  }

  @media (min-width: 870px) {
    padding: 0;
    flex-wrap: nowrap;
  }

  .gallery {
    height: 230px;
    width: 100%;
    border-radius: 15px;
    margin-bottom: 15px;
    object-fit: cover;
    cursor: pointer;

    img,
    div {
      border-radius: 15px;
    }

    @media (min-width: 535px) {
      width: 150px;
      height: 150px;
      margin-right: 10px;
      margin-bottom: 0;
    }
  }

  .event {
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    width: 100%;

    @media (min-width: 768px) {
      width: auto;
      padding: 5px;
      align-items: center;
      margin-left: 5px;
      flex-wrap: nowrap;
    }

    .info {
      max-width: 300px;
      width: 100%;
    }
  }

  .event-meta {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-end;

    @media (min-width: 768px) {
      max-width: 300px;
      width: 100%;
    }
  }

  .date {
    font-weight: 700;
    font-size: 17px;
    line-height: 97.9%;
    color: #5e4c4c;
    margin-bottom: 5px;
  }

  .address {
    font-weight: 600;
    font-size: 14px;
    line-height: 126.9%;
    color: #000000;
  }

  .close {
    width: 100%;
    background: ${theme.color.lightGray};
    display: flex;
    justify-content: center;
    border-radius: 0 0 15px 15px;
    cursor: pointer;
  }
`;

export default observer(EventCard);
