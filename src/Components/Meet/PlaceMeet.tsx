import React from 'react';
import styled from "styled-components";

const PlaceMeet = () => {
    return (
        <Wrapper>
            <div className="name">
                Hotdogger
            </div>
            <div className="category">
                кафе
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  .name {
    font-weight: 400;
    font-size: 14px;
  }

  .category {
    font-weight: 400;
    font-size: 14px;
    color: #666666;
  }
`

export default PlaceMeet;