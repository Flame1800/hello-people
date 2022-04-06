import React from 'react';
import IndicatorDots from "../../Common/Carousel/IndicatorDots";
import Buttons from "../../Common/Carousel/Buttons";
import styled from "styled-components";
import Carousel from 're-carousel'

const CardPlaceCarousel = () => {
    return (
        <Wrapper>
            <CarouselStyle loop widgets={[IndicatorDots, Buttons]}>
                {/*{pictures.map(picture => (*/}
                {/*    <ImgWrap*/}
                {/*        key={picture.id}*/}
                {/*        src={`${process.env.SERVER_URL}${picture.href}`}*/}
                {/*        alt={picture.description}*/}
                {/*        width={460}*/}
                {/*        height={190}*/}
                {/*    />*/}
                {/*))}*/}
                <img src='/img/event-cover.png' style={{backgroundColor: 'pink', height: '100%'}}/>
                <div style={{backgroundColor: 'orange', height: '100%'}}>Frame 2</div>
                <div style={{backgroundColor: 'orchid', height: '100%'}}>Frame 3</div>
            </CarouselStyle>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  width: 100% !important;
  height: 190px;
`


const CarouselStyle = styled(Carousel)`
  border-radius: 20px 20px 0 0;
  z-index: 0;

  div, img {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    object-fit: cover;
  }
`


export default CardPlaceCarousel;