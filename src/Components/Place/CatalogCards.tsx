import React from 'react';
import styled from "styled-components";
import PlaceCard from "./Card/PlaceCard";

const CatalogCards = () => {
    return (
        <Wrapper>
            <PlaceCard/>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  margin-top: 40px;
  padding: 0 20px;
`

export default CatalogCards;