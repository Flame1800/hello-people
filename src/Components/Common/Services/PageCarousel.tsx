import React from 'react';
import styled from "styled-components";
import IndicatorDots from "../Carousel/IndicatorDots";
import Buttons from "../Carousel/Buttons";
import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination} from "swiper";

import "swiper/css";
import "swiper/css/pagination";

const PageCarousel = ({pictures}) => {
    return (
        <Wrapper>
            {pictures.data
                ?
                (
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        modules={[Pagination]}
                        pagination={{
                            dynamicBullets: true,
                        }}
                        breakpoints={{

                        }}
                    >
                        {
                            pictures.data.map((picture: Object) => {
                                return (
                                    <SwiperSlide>
                                        <img
                                            src={process.env.SERVER_URL_PROD + picture.attributes.url}
                                            alt='фото места'
                                            className='image'
                                        />
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>

                )
                : <div className="no-photo">Нет фото</div>
            }
        </Wrapper>
    );
};

const Wrapper = styled.div`
  height: 50vh;
  margin-bottom: -8px;

  .swiper {
    width: 100%;
    height: 100%;
  }

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

  .image {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 20px;
  }
`

const CarouselStyle = styled.div`
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