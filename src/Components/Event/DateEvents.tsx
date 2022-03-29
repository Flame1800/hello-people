import React from 'react';
import styled from "styled-components";

const DateEvents = () => {
    return (
        <Wrapper>
            <div className="date">
                <div className="num">01</div>
                марта
            </div>
            <div className="today">сегодня</div>
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