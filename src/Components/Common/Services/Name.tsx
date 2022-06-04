import React from 'react';
import styled from "styled-components";
import dynamic from "next/dynamic";

type Props = {
    place: any
}

const Name: React.FC<Props> = ({place}) => {
    return (
        <Wrapper>
            <div className="place-title">{place.title}</div>
            <div className="place-category">Категория: {place.category}</div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  align-items: center;

  .place-title {
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 4px;
    transition: .2s;
  }

  .place-category {
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    color: #676767;
  }
`

export default Name