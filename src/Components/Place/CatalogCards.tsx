import React from 'react';
import styled from "styled-components";
import PlaceCard from "./Card/PlaceCard";

const CatalogCards = ({cards}) => {
    return (
        <Wrapper>
            {cards.map((card) => <PlaceCard key={card.id} card={card}/>)}
        </Wrapper>
    );
};

const Wrapper = styled.div`
  padding: 0 20px;
  margin: 40px auto;
  max-width: 890px;
`

export default CatalogCards;