import React from 'react';
import styled from "styled-components";
import {theme} from "../../../../styles/theme";

type PropTypes = {
    date?: Date | string,
    address: string,
    link?: string,
    phone?: string,
    link2gis?: string
}

const InfoListServices: React.FC<PropTypes> = ({date, address, link, phone, link2gis}) => {
    return (
        <Wrapper>
            {date
            &&
            <div className="item">
                <img src="/img/date-icon.svg" alt="дата"/>
                <div className="caption">{date}</div>
            </div>}
            {address
            &&
            <div className="item">
                <img src="/img/location.svg" alt="адресс"/>
                <div className="caption">{address}</div>
            </div>}
            {phone
            &&
            <a className="item" href={`tel:${phone}`}>
                <img src="/img/phone.svg" alt="телефон"/>
                <div className="caption">{phone}</div>
            </a>}
            {link
            &&
            <a href={link} target='_blank' className="item">
                <img src="/img/globe.svg" alt="ссылка"/>
                <div className="caption">Перейти на сайт</div>
            </a>}
            {link2gis
            &&
            <a href={link2gis} target="_blank" className="item two-gis-wrap">
                <div className="caption">Найти в</div>
                <img src="/img/2GIS_logo.svg" className='two-gis' alt="ссылка"/>
            </a>}

        </Wrapper>
    );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 35px;
  margin-bottom: 10px;

  a {
    font-weight: 600;
    color: #1170FF;
  }

  .item {
    display: flex;
    align-items: center;
    margin-bottom: 20px;

    img {
      width: 24px;
      height: 24px;
      margin-right: 7px;
    }
  }


  .two-gis-wrap {
    margin-top: 10px;
    padding: 5px 10px;
    border-radius: 5px;
    border: 2px solid rgb(120, 185, 62);
    width: max-content;
    cursor: pointer;
    color: #000;

    .two-gis {
      width: 54px !important;
      height: 30px;
      margin-left: 6px;


    }
  }
`

export default InfoListServices;