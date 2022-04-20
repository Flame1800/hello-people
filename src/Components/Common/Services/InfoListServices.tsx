import React from 'react';
import styled from "styled-components";

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
            <div className="item">
                <img src="/img/phone.svg" alt="телефон"/>
                <a href={`tel:${phone}`} className="caption">{phone}</a>
            </div>}
            {link
            &&
            <div className="item">
                <img src="/img/globe.svg" alt="ссылка"/>
                <a href={link} className="caption">{link}</a>
            </div>}
            {link2gis
            &&
            <div className="item two-gis-wrap">
                <a href={link2gis} className="caption">Найти в </a>
                <img src="/img/2GIS_logo.svg" className='two-gis' alt="ссылка"/>
            </div>}

        </Wrapper>
    );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 35px;
  margin-bottom: 10px;

  .item {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;

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
    
    .two-gis {
      width: 54px !important;
      height: 30px;
      margin-left: 6px;
    }
  }
`

export default InfoListServices;