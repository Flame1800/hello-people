import React from 'react';
import styled from "styled-components";
import {DateTime} from "luxon";

const DateEvents = ({date}) => {
    const today = DateTime.now()
    const dt = DateTime.fromISO(date)
    const day = dt.toLocaleString({
        day: 'numeric',
    })
    const dayMonth = dt.toLocaleString({
        month: 'long',
        day: 'numeric',
    })

    const todayDayMont = today.toLocaleString({
        month: 'long',
        day: 'numeric',
    })


    return (
        <Wrapper>
            <div className="date">
                <div className="num">{day}</div>
                &nbsp; {dayMonth.replace(/[0-9]/g, '')}
            </div>
            {todayDayMont === dayMonth && <div className="today">сегодня</div>}
        </Wrapper>
    );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  margin-bottom: 20px;

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

  .today {
    background: #FFB8B8;
    border-radius: 20.5px;
    padding: 2px 9px;
    font-weight: 400;
    font-size: 16px;
  }
`

export default DateEvents;