import React from "react";
import styled from "styled-components";
import EventCard from "./Card/EventCard";
import DateEvents from "./DateEvents";
import * as _ from "lodash";
import { DateTime } from "luxon";
import eventsStore from "../../Stores/EventsStore";
import { observer } from "mobx-react-lite";
import Loader from "../Common/Loader";
import CategoriesStore from "../../Stores/CategoriesStore";
import { theme } from "../../../styles/theme";

const CatalogCardsEvents = () => {
  const { mode, loading, getNewEvents, getPastEvents } = eventsStore;
  const { clearCategories } = CategoriesStore;
  const currEvents = mode === "new" ? getNewEvents() : getPastEvents();

  const eventsWithDayField = currEvents.map((item: any) => {
    const dt = DateTime.fromISO(item.attributes.dateStart);
    const dateString = dt.toLocaleString({
      month: "long",
      day: "numeric",
      year: "numeric",
    });

    return { ...item, dateString };
  });

  const sortedEvents = _.groupBy(eventsWithDayField, (item) => item.dateString);
  const SortedEventsParse = Object.keys(sortedEvents);

  if (SortedEventsParse.length === 0 && !loading) {
    return (
      <Wrapper>
        <div className="empty">Ничего не нашлось</div>
        <div className="btn" onClick={() => clearCategories()}>
          Очистить
        </div>
      </Wrapper>
    );
  }

  if (loading) {
    return (
      <Wrapper>
        <div className="empty">
          <Loader />
        </div>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      {SortedEventsParse.map((date, id) => {
        return (
          <div key={id}>
            <DateEvents date={sortedEvents[date][0].attributes.dateStart} />
            {sortedEvents[date].map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 0 20px;
  max-width: 900px;
  margin-bottom: 100px;
  margin-left: auto;
  margin-right: auto;

  .empty {
    margin-top: 80px;
    font-weight: 700;
    font-size: 26px;
    text-align: center;
  }

  .btn {
    background: #fff;
    text-align: center;
    width: fit-content;
    margin: 20px auto;
    padding: 5px 20px;
    border-radius: 10px;
    font-weight: 500;
    cursor: pointer;
    box-shadow: ${theme.boxShadow.mainComponent};
  }

  .meta {
    display: flex;
    justify-content: space-between;

    .date {
      display: flex;
      font-weight: 400;
      font-size: 18px;
      line-height: 97.9%;
      color: #fc5130;

      .num {
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
      }
    }
  }
`;

export default observer(CatalogCardsEvents);
