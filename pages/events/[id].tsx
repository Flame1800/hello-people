import React from 'react';
import styled from "styled-components";
import BackButton from "../../src/Components/Common/BackButton";
import EventContent from "../../src/Components/Event/EventContent";
import API from "../../src/Libs/API";
import {NextPage} from "next";
import EventCard from "../../src/Components/Event/Card/EventCard";
import {Comment} from "postcss";
import CommentsBlock from "../../src/Components/Comments/CommnetsBlock";

type EventProps = {
    event: any
}

const EventPage: NextPage<EventProps> = ({event}) => {
    console.log(event)
    return (
        <Wrapper>
            <div className="card">
                <EventCard event={event}/>
            </div>
            <EventContent event={event.attributes}/>
            {/*<CommentsBlock/>*/}
        </Wrapper>
    );
};

const Wrapper = styled.div`
  min-height: 80vh;
  padding: 0px;

  .card {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .event-cover {
    width: 200px;
    height: 200px;
    border-radius: 15px;
    object-fit: cover;
  }

  .head {
    display: flex;
    align-items: center;
    padding: 10px;

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