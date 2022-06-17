import React from 'react';
import IndicatorDots from "../../Common/Carousel/IndicatorDots";
import Buttons from "../../Common/Carousel/Buttons";
import styled from "styled-components";
import Carousel from 're-carousel'


const CardPlaceCarousel = ({pictures, cover}) => {

    const [allPictures, setAllPictures] = React.useState([])

    React.useEffect(() => {
        const arr = pictures.data ? pictures.data : []
        arr.reverse().push(cover.data);
        arr.reverse();

        setAllPictures(arr)
    }, [])


    if (!pictures.data) {
        return (
            <Wrapper>
                <img className='cover' src={process.env.SERVER_URL_PROD + cover.data.attributes.url} alt='фото места'/>
            </Wrapper>
        )
    }

    return (
        <Wrapper>
            <CarouselStyle loop widgets={[IndicatorDots, Buttons]}>
                {pictures.data
                && allPictures.map((picture: Object) => {
                    return <img key={picture.id} src={process.env.SERVER_URL_PROD + picture.attributes.url} alt='фото места'/>
                })}
            </CarouselStyle>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  width: 100% !important;
  height: 190px;

  .cover {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    object-fit: cover;
    height: 190px;
    border-radius: 20px 20px 0 0;
  }
`


const CarouselStyle = styled(Carousel)`
  border-radius: 20px 20px 0 0;
  z-index: 0;
  border: 1px solid #dedede;

  div, img {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    object-fit: cover;
  }
`


export default CardPlaceCarousel;