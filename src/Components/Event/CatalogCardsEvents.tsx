import React from 'react';
import styled from "styled-components";
import EventCard from './Card/EventCard';
import DateEvents from "./DateEvents";
import * as _ from 'lodash'
import {DateTime} from "luxon";

type Props = {
    events: any
}

const CatalogCardsEvents: React.FC<Props> = ({events}) => {
    const eventsWithDayField = events.map((item: any) => {
        const dt = DateTime.fromISO(item.attributes.dateStart)
        const dateString = dt.toLocaleString({
            month: 'long',
            day: 'numeric',
            year: 'numeric'
        })

        return {...item, dateString}
    })


    const sortedEvents = _.groupBy(eventsWithDayField, (item) => item.dateString)
    const SortedEventsParse = Object.keys(sortedEvents)

    if (SortedEventsParse.length === 0) {
        return (
            <Wrapper>
                <div className="empty">
                    Ничего не нашлось...
                </div>
            </Wrapper>
        )
    }

    return (
        <Wrapper>
            {SortedEventsParse.map((date, id) => {
                return (
                    <div key={id}>
                        <DateEvents date={sortedEvents[date][0].attributes.dateStart}/>
                        {sortedEvents[date].map(event => <EventCard  key={event.id} event={event}/>)}
                    </div>
                )
            })}
        </Wrapper>
    );
};

const Wrapper = styled.div`
  padding: 0 20px;
  max-width: 900px;
  margin: 5px auto;
  
  .empty {
    margin-top: 80px;
    font-weight: 700;
    font-size: 26px;
    text-align: center;
  }

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

export default CatalogCardsEvents;