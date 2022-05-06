import React from 'react';
import styled from "styled-components";
import {DateTime} from "luxon";
import {theme} from "../../../styles/theme";

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
            {todayDayMont === dayMonth && <div className="today">
                <p>Сегодня</p>
            </div>}
        </Wrapper>
    );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  margin-bottom: 10px;

  .date {
    background: #fff;
    border-radius: 20px;
    padding: 15px;
    display: flex;
    align-items: center;
    font-weight: 400;
    font-size: 18px;
    line-height: 97.9%;
    color: #FC5130;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.12);

    .num {
      font-style: normal;
      font-weight: 700;
      font-size: 24px;
    }
  }

  .today {
    background: #fff;
    border-radius: 20px 20px 0 0;
    padding: 20px;
    font-weight: 800;
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${theme.color.orange};
    margin-bottom: -25px;

    p {
      margin-bottom: 15px;
    }
  }
`

export default DateEvents;