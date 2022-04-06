import React from 'react';
import styled from "styled-components";
import EventCard from './Card/EventCard';
import DateEvents from "./DateEvents";
import Switch from "./Switch";


const CatalogCards = () => {
    return (
        <Wrapper>
            <Switch/>
            <DateEvents/>
            <EventCard/>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  margin-top: 25px;
  padding: 0 20px;

  .meta {
    display: flex;
    justify-content: space-between;

    .date {
      display: flex;
      font-weight: 400;
      font-size: 18px;
      line-height: 97.9%;
      color: #FC5130;

      .num {
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
      }
    }
  }


`

export default CatalogCards;