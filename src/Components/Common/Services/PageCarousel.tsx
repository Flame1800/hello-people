import React from 'react';
import Carousel from 're-carousel'
import styled from "styled-components";
import IndicatorDots from "../Carousel/IndicatorDots";
import Buttons from "../Carousel/Buttons";

const PageCarousel = ({pictures}) => {
    console.log(pictures)
    return (
        <Wrapper>
            {pictures.data
                ?
                (
                    <CarouselStyle loop widgets={[IndicatorDots, Buttons]}>
                        {
                            pictures.data.map((picture: Object) => {
                                return <img src={process.env.SERVER_URL_PROD + picture.attributes.url}
                                            alt='фото места'/>
                            })
                        }
                    </CarouselStyle>

                )
                : <div className="no-photo">Нет фото</div>
            }
        </Wrapper>
    );
};

const Wrapper = styled.div`
  height: 50vh;
  margin-bottom: -8px;

  .no-photo {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #0002;
    font-size: 50px;
    font-weight: 500;
    color: #0005;
    height: 100%;
  }

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