import React from "react";
import styled from "styled-components";

const PlaceMeet = ({ place }: { place: string }) => {
  return (
    <Wrapper>
      <div className="category">Место</div>
      <div className="name">{place}</div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-right: 10px;
  margin-left: 20px;

  .name {
    font-weight: 400;
    font-size: 14px;
  }

  .category {
    font-weight: 400;
    font-size: 14px;
    color: #666666;
  }
`;

export default PlaceMeet;
