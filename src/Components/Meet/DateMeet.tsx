import React from "react";
import styled from "styled-components";
import makeBeautyDate from "../../Helpers/makeBeautyDate";
import { DateTime } from "luxon";

const DateMeet = ({ date }: { date: string }) => {
  const dt = DateTime.fromISO(date);

  const dateMap = dt.setLocale("ru").toLocaleString({
    day: "numeric",
    month: "long",
    hour: "numeric",
    minute: "numeric",
  });

  return (
    <Wrapper>
      <div className="category">Время</div>
      <div className="name">{date ? dateMap : "Неизвестно"}</div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-left: 20px;
  .name {
    font-weight: 400;
    font-size: 14px;
  }

  .category {
    font-weight: 400;
    font-size: 14px;
    color: #666666;
  }
`;

export default DateMeet;
