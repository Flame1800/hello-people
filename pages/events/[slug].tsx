import React from "react";
import styled from "styled-components";
import EventContent from "../../src/Components/Event/EventContent";
import API from "../../src/Helpers/API";
import { NextPage } from "next";
import EventCard from "../../src/Components/Event/Card/EventCard";
import CommentsBlock from "../../src/Components/Comments/CommnetsBlock";
import SeoHead from "../../src/Components/Layouts/SeoHead";
import { CITY } from "../../src/Constants/city";
import Head from "next/head";

type EventProps = {
  event: EventType;
};

const EventPage: NextPage<EventProps> = ({ event }) => {
  return (
    <Wrapper>
      <SeoHead
        title={`${event.attributes.title} - ${CITY} HelloPeople`}
        description={event.attributes.description}
        keywords={event.attributes.categories?.data
          .map((cat) => cat.attributes.title)
          .join(", ")}
      />
      <div className="card">
        <EventCard event={event} />
      </div>
      <EventContent event={event} />
      <CommentsBlock id={event.id} model={"party"} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-height: 80vh;
  padding: 0;

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
`;

EventPage.getInitialProps = async (ctx) => {
  const eventRequest = await API.getEvent(ctx.query.slug);

  return { event: eventRequest.data.data[0] };
};

export default EventPage;
