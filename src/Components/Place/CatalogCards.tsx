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
  display: flex;
  flex-wrap: wrap;
  padding: 0 20px;
  margin: 40px auto;
  max-width: 1000px;
`

export default CatalogCards;