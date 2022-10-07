import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

type Props = {
  pictures: any;
};

const PageCarousel: React.FC<Props> = ({ pictures }) => {
  return (
    <Wrapper>
      {pictures.data ? (
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          modules={[Pagination]}
          pagination={{
            dynamicBullets: true,
          }}
          breakpoints={{
            // when window width is >= 768px
            768: {
              slidesPerView: 3,
            },
          }}
        >
          {pictures.data.map((picture: any) => {
            return (
              <SwiperSlide>
                <img
                  src={process.env.SERVER_URL_PROD + picture.attributes.url}
                  alt="фото места"
                  className="image"
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      ) : (
        <div className="no-photo">Нет фото</div>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 50vh;
  margin-bottom: -8px;

  @media (min-width: 726px) {
    height: 300px;
    margin-top: 24px;
    margin-bottom: 30px;
  }

  .swiper {
    width: 100%;
    height: 100%;
    max-width: 840px;
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
    max-width: 256px;
    max-height: 256px;
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 20px;

    @media (max-width: 726px) {
      border-radius: 20px 20px 0 0;
      margin-top: 10px;
      height: 100%;
      width: 100%;
      max-width: 100%;
      max-height: 100%;
    }
  }
`;

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
`;

export default PageCarousel;
