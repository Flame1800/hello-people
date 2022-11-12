import React, { useState } from "react";
import IndicatorDots from "../../Common/Carousel/IndicatorDots";
import Buttons from "../../Common/Carousel/Buttons";
import styled from "styled-components";
import Carousel from "re-carousel";
import uuid from "react-uuid";

type Props = {
  pictures: { data: Image[] };
  cover: { data: Image };
};

const CardPlaceCarousel = ({ pictures, cover }: Props) => {
  const [allPictures, setAllPictures] = React.useState([]);

  React.useEffect(() => {
    const arr: any = pictures.data ? pictures.data : [];
    arr.reverse().push(cover.data);
    arr.reverse();

    setAllPictures(arr);
  }, []);

  if (!pictures.data) {
    return (
      <Wrapper>
        <img
          className="cover"
          src={process.env.SERVER_URL_PROD + cover.data.attributes.url}
          alt="фото места"
        />
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <CarouselStyle loop widgets={[IndicatorDots, Buttons]}>
        {pictures.data &&
          allPictures.map((picture: any) => {
            return (
              <img
                key={uuid()}
                src={process.env.SERVER_URL_PROD + picture.attributes.url}
                alt="фото места"
              />
            );
          })}
      </CarouselStyle>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100% !important;
  height: 170px;
  cursor: pointer;

  .cover {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    object-fit: cover;
    height: 190px;
    border-radius: 20px 20px 0 0;
  }
`;

const CarouselStyle = styled(Carousel)`
  border-radius: 20px 20px 0 0;
  z-index: 0;

  div,
  img {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default CardPlaceCarousel;
