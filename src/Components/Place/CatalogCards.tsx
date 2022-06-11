import React from 'react';
import styled from "styled-components";
import PlaceCard from "./Card/PlaceCard";
import InfiniteScroll from "react-infinite-scroll-component";
import API from "../../Libs/API";
import {CircularProgress} from "@mui/material";


type Props = {
    count: number
    cards: any
}

const CatalogCards: React.FC<Props> = ({cards, count}) => {
    const [places, setPlaces] = React.useState(cards)
    const [hasMore, setHasMore] = React.useState(cards)


    const getMorePlaces = async () => {
        const resPlaces = await API.getPlaces(places.length)
        const newPlaces = resPlaces.data.data

        setPlaces((places: any) => [...places, ...newPlaces])
    }

    React.useEffect(() => {
        setHasMore(count > places.length)
    }, [places])

    return (
        <Wrapper>
            <InfiniteScroll
                next={getMorePlaces}
                hasMore={hasMore}
                loader={<div className='caption'>загрузка</div>}
                dataLength={places.length}
                endMessage={
                    <p style={{textAlign: "center"}}>
                        <b>Ура! Вы посмотрели все карточки :)</b>
                    </p>
                }
            >
                {places.map((card: any) => <PlaceCard key={card.id} card={card}/>)}
            </InfiniteScroll>
        </Wrapper>
    );
};


const Wrapper = styled.div`
  .infinite-scroll-component {
    display: flex;
    flex-wrap: wrap;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 50px;
    margin: 40px auto;
    max-width: 1000px;
    position: relative;

    .caption {

    }
  }
`

export default CatalogCards;