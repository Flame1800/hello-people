import React from 'react';
import styled from "styled-components";
import PlaceCard from "./Card/PlaceCard";


type Props = {
    cards: any
}

const CatalogCards: React.FC<Props> = ({cards}) => {
    return (
        <Wrapper>
            {cards.map((card: any) => <PlaceCard key={card.id} card={card}/>)}
        </Wrapper>
    );
};

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 20px;
  margin: 40px auto;
  max-width: 1000px;
`

export default CatalogCards;