import React from "react";
import styled from "styled-components";

type PropTypes = {
  date?: Date | string;
  address?: string;
  link?: string;
  phone?: string;
  link2gis?: string;
};

const InfoListServices = ({ date, address, link, phone }: PropTypes) => {
  return (
    <Wrapper>
      {date && (
        <div className="item">
          <img src="/img/date-icon.svg" alt="дата" />
          <div className="caption">{date}</div>
        </div>
      )}
      {address && (
        <div className="item">
          <img src="/img/location.svg" alt="адресс" />
          <div className="caption">{address}</div>
        </div>
      )}
      {phone && (
        <a className="item" href={`tel:${phone}`}>
          <img src="/img/phone.svg" alt="телефон" />
          <div className="caption">{phone}</div>
        </a>
      )}
      {link && (
        <a href={link} target="_blank" className="item">
          <img src="/img/globe.svg" alt="ссылка" />
          <div className="caption">Перейти на сайт</div>
        </a>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 35px 0;

  a {
    font-weight: 600;
    color: #1170ff;
  }

  .item {
    display: flex;
    align-items: center;
    margin-bottom: 30px;

    img {
      width: 24px;
      height: 24px;
      margin-right: 7px;
    }
  }
`;

export default InfoListServices;
