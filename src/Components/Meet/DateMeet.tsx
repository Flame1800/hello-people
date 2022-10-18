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

  console.log(typeof dateMap);

  return (
    <Wrapper>{dateMap === "Invalid DateTime" ? "Нет даты" : dateMap}</Wrapper>
  );
};

const Wrapper = styled.div`
  margin-bottom: 10px;
  color: #666666;
  font-weight: 400;
  font-size: 14px;
`;

export default DateMeet;
