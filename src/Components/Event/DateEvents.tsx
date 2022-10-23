import React from "react";
import styled from "styled-components";
import { DateTime } from "luxon";
import { theme } from "../../../styles/theme";

const DateEvents = ({ date }: { date: string }) => {
  const today = DateTime.now();
  const dt = DateTime.fromISO(date);
  const day = dt.toLocaleString({
    day: "numeric",
  });
  const dayMonth = dt.setLocale("ru").toLocaleString({
    month: "long",
    day: "numeric",
  });

  const todayDayMont = today.toLocaleString({
    month: "long",
    day: "numeric",
  });

  return (
    <Wrapper>
      <div className="date">
        <div className="num">{day}</div>
        &nbsp; {dayMonth.replace(/[0-9]/g, "")}
      </div>
      {todayDayMont === dayMonth && (
        <div className="today">
          <p>Сегодня</p>
        </div>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  height: 40px;
  margin-bottom: 10px;

  .date {
    background: #fff;
    border-radius: 20px;
    padding: 10pt 20px;
    display: flex;
    align-items: center;
    font-weight: 400;
    font-size: 18px;
    line-height: 97.9%;
    color: #fc5130;
    box-shadow: 0 4px 0 rgba(105, 105, 105, 0.13);

    .num {
      font-style: normal;
      font-weight: 700;
      font-size: 21px;
    }
  }

  .today {
    background: #fff;
    border-radius: 20px 20px 0 0;
    padding: 0 20px;
    font-weight: 800;
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${theme.color.orange};
    margin-bottom: -25px;
    box-shadow: ${theme.boxShadow.mainComponent};

    p {
      margin-bottom: 10px;
    }
  }
`;

export default DateEvents;
