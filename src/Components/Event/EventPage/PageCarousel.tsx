import React from 'react';
import Carousel from 're-carousel'
import styled from "styled-components";
import IndicatorDots from "../../Common/Carousel/IndicatorDots";
import Buttons from "../../Common/Carousel/Buttons";

const PageCarousel = () => {
    return (
        <Wrapper>
            <CarouselStyle loop widgets={[IndicatorDots, Buttons]}>
                <div style={{backgroundColor: 'tomato', height: '100%'}}>Frame 1</div>
                <div style={{backgroundColor: 'orange', height: '100%'}}>Frame 2</div>
                <div style={{backgroundColor: 'orchid', height: '100%'}}>Frame 3</div>
            </CarouselStyle>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  height: 50vh;
  margin-bottom: -8px;
`

const CarouselStyle = styled(Carousel)`
  border-radius: 20px 20px 0 0;
  z-index: 0;
  width: 100%;

  div {
    height: 50vh;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

  }
`

export default PageCarousel;