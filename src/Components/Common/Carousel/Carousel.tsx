import React from 'react';
import styled from "styled-components";
import IndicatorDots from "./IndicatorDots";
import Buttons from "./Buttons";
import Carousel from 're-carousel'

type CarouselType = {
    pictures: any
}

const CarouselComponent: React.FC<CarouselType> = ({pictures}) => {
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

const ImgWrap = styled.img`
  max-width: 460px;
  width: 100%;
  object-fit: cover;
`

const Wrapper = styled.div`
  width: 100%;
  height: inherit;
`


const CarouselStyle = styled(Carousel)`
  z-index: 0;

  div, img {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    object-fit: cover;
  }
`

export default CarouselComponent;