import React from "react";
import styled from "styled-components";

type Props = {
  place: any;
};

const Name: React.FC<Props> = ({ place }) => {
  return (
    <Wrapper>
      <Title>{place.title}</Title>
      <Category>{place.category}</Category>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: 700;
  transition: 0.2s;
`;

const Category = styled.h3`
  font-weight: 400;
  font-size: 16px;
  color: #676767;
`;

export default Name;
