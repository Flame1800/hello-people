import React from 'react';
import styled from "styled-components";
import IndicatorDots from "./IndicatorDots";
import Buttons from "./Buttons";
import Carousel from 're-carousel'

type CarouselType = {
    pictures: any
}

const CarouselComponent: React.FC<CarouselType> = ({pictures, cover}) => {

    const [allPictures, setAllPictures] = React.useState([])

    React.useEffect(() => {
        const arr = pictures ? pictures : []
        arr.reverse().push(cover);
        arr.reverse();

        setAllPictures(arr)
    }, [])

    if (allPictures.length === 0) {
        return 'no photo'
    }

    return (
        <Wrapper>
            <CarouselStyle loop widgets={[IndicatorDots, Buttons]}>
                {allPictures.map(({attributes, id}) => {
                    return (
                        <img
                            src={process.env.SERVER_URL_PROD + attributes?.url}
                            alt='фото места'
                            className='image'
                            key={id}
                        />
                    )
                })}
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