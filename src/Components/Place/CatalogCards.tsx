import React from 'react';
import styled from "styled-components";
import PlaceCard from "./Card/PlaceCard";
import InfiniteScroll from "react-infinite-scroll-component";
import API from "../../Libs/API";
import {observer} from "mobx-react-lite";
import {theme} from "../../../styles/theme";

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
            <div className="cards">
                {places.map((card: any) => <PlaceCard key={card.id} card={card}/>)}
            </div>
            {hasMore && <div className="btn-more" onClick={getMorePlaces}>Показать больше</div>}
            {!hasMore && <div className="info-msg">Вы посмотрели все</div>}
        </Wrapper>
    );
};


const Wrapper = styled.div`
  .cards {
    display: flex;
    flex-wrap: wrap;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 50px;
    margin: 40px auto;
    max-width: 1000px;
    position: relative;
  }

  .btn-more {
    padding: 20px 40px;
    border-radius: 10px;
    background: #fff;
    margin: 0 auto 150px;
    width: fit-content;
    cursor: pointer;
    font-weight: 800;
    font-size: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.18);
    color: ${theme.color.orange};
  }
  
  .info-msg {
    font-weight: 800;
    font-size: 20px;
    margin: -30px auto 150px;
    color: #000;
    text-align: center;
  }
`

export default observer(CatalogCards);