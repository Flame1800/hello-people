import React from 'react';
import styled from "styled-components";
import Carousel from "../Common/Carousel/Carousel";

const PinnedPlace = () => {
    return (
        <Wrapper>
            <div className="title">Место</div>
            <div className="place">
                <div className="name">Название</div>
                <Carousel pictures={[]}/>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  margin-top: 15px;
  margin-bottom: 30px;
  border-top: 2px dashed #949494;
  padding-top: 20px;
  width: 100%;
  position: relative;

  .title {
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    color: #000000;
    margin-bottom: 9px;

    @media (min-width: 870px) {
      position: absolute;
      left: -45px;
      top: 50%;
      transform: rotate(-90deg);
      text-transform: lowercase;
    }
  }

  .place {
    height: 200px;
    position: relative;
    max-width: 400px;

    img, div {
      border-radius: 15px;
    }


    @media (min-width: 870px) {
      height: 205px;
    }
  }

  .name {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
    border-radius: 0 0 15px 15px;
    background: #FFFFFF;
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 97.9%;
    z-index: 1;
    padding: 7px 30px;
    text-align: center;
    margin: 0 20px;

  }

  @media (min-width: 870px) {
    border-top: none;
    width: 305px;
    margin-left: 30px;
    padding: 0;
    margin-top: 0;
    margin-bottom: 0;

  }
`

export default PinnedPlace;