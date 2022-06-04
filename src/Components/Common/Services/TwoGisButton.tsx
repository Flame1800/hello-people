import React from 'react';
import styled from "styled-components";

const TwoGisButton = ({link2gis}) => {
    return (
        <Wrapper href={link2gis} target="_blank" className="item two-gis-wrap">
            <div className="caption">Найти в</div>
            <img src="/img/2GIS_logo.svg" className='two-gis' alt="ссылка"/>
        </Wrapper>
    );
};

const Wrapper = styled.a`
  padding: 5px 10px;
  border-radius: 10px;
  border: 2px solid rgb(120, 185, 62);
  width: 100%;
  cursor: pointer;
  color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  transition: .2s;
  margin: 0 5px;

  &:hover {
    background: rgb(120, 185, 62);
    color: #fff;

    .two-gis {
      background: #fff;
    }
  }

  .two-gis {
    width: 54px !important;
    height: 22px;
    margin-left: 6px;
    padding: 2px;
    border-radius: 5px;
  }
`

export default TwoGisButton;