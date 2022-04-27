import React from 'react';
import styled from "styled-components";
import BackButton from "../../src/Components/Common/BackButton";
import PageCarousel from "../../src/Components/Common/Services/PageCarousel";
import EventContent from "../../src/Components/Event/EventContent";
import API from "../../src/Libs/API";
import PlacePage from "../places/[id]";

const EventPage = ({event}) => {
    return (
        <Wrapper>
            <div className="head">
                <BackButton/>
                <div className="head-title">
                    Мероприятие
                </div>
            </div>
            <img src={API.url + event.attributes.cover.data.attributes.url} className='event-cover' alt=""/>
            <EventContent event={event.attributes}/>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  padding-top: 50px;
  background: #fff;
  min-height: 100vh;

  .event-cover {
    width: 100%;
    height: 700px;
    object-fit: cover;
  }

  .head {
    display: flex;
    align-items: center;
    padding: 0 20px;
    margin-bottom: 20px;

    .head-title {
      font-style: normal;
      font-weight: 400;
      font-size: 24px;
      color: #000000;
      margin-left: 20px;
      margin-bottom: 5px;
    }
  }
`

EventPage.getInitialProps = async (ctx) => {
    const eventRequest = await API.getEvent(ctx.query.id)

    return {event: eventRequest.data.data}
}

export default EventPage;