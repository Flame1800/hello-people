import React from 'react';
import styled from "styled-components";
import Like from "../../Common/Like";
import PinnedPlace from "../PinnedPlace";
import Comment from "../../Common/Comment";
import Link from "next/link";
import NameService from "../../Common/Services/NameService";
import API from "../../../Libs/API";
import {DateTime} from "luxon";
import EventContent from "../EventContent";
import {theme} from "../../../../styles/theme";
import makeBeautyDate from "../../../Libs/makeBeautyDate";

const EventCard = ({event}) => {

    const [tab, setTab] = React.useState(false)
    const {attributes} = event

    return (
        <Wrapper id={event.id}>
            <div className="card">
                <div className="event">
                    {attributes.cover.data
                        ? <img className="gallery" src={API.url + attributes.cover.data.attributes.url} alt="обложка"/>
                        : <img className='gallery' src='/img/mock-avatar.svg' alt='моковая обложка'/>}
                    <div className="info">
                        <div onClick={() => setTab(!tab)} className="name-wrap">
                            <NameService name={attributes.abbTitle} category='Вечеринки'/>
                        </div>
                        <div className="event-meta">
                            <div>
                                <div className="date">{makeBeautyDate(attributes.dateStart)}</div>
                                <div className="address">
                                    {attributes.place.data ? attributes.place.data.attributes.location : 'не найдено'}
                                </div>
                            </div>
                            <div className="user-meta">
                                <Like value={0} onClick={() => console.log("event like")} active={false}/>
                                <Comment value={0} onClick={() => console.log("event comment")}/>
                            </div>
                        </div>
                    </div>
                </div>
                {attributes.place.data && <PinnedPlace place={attributes.place.data}/>}
            </div>
            {tab && <EventContent event={attributes}/>}
            {tab &&
            <a className="close" onClick={() => setTab(!tab)}>
                <img src="/img/up.svg" alt="up"/>
            </a>}
        </Wrapper>
    );
};

const Wrapper = styled.div`
  max-width: 860px;
  align-items: center;
  background: #FFFFFF;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  padding: 20px;
  margin-bottom: 30px;

  .card {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
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

    img, div {
      border-radius: 15px;
    }

    @media (min-width: 535px) {
      width: 150px;
      height: 150px;
      margin-right: 20px;
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
      padding: 10px;
      align-items: center;
      margin-left: 10px;
      flex-wrap: nowrap;
    }

    .info {
      max-width: 310px;
      width: 100%;
    }
  }


  .event-meta {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-end;

    @media (min-width: 768px) {
      width: 310px;
    }
  }

  .user-meta {
    display: flex;

    > div {
      margin-right: 10px;
    }
  }

  .date {
    font-weight: 700;
    font-size: 18px;
    line-height: 97.9%;
    color: #949494;
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
`

export default EventCard;