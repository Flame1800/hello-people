import React from "react";
import styled from "styled-components";
import { theme } from "../../../../styles/theme";
import Footer from "./Footer/Footer";
import ActualPosts from "./ActualPosts/ActualPosts";

const Actual = () => {
  return (
    <Wrapper>
      <Title>Актуальное</Title>
      <ActualPosts />
    </Wrapper>
  );
};

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  @media (max-width: 1424px) {
    position: relative;
    border-radius: 21px;
    box-shadow: none;
  }
`;

const Title = styled.div`
  margin-top: 20px;
  width: 100%;
  text-align: center;
  font-weight: 700;
  font-size: 20px;
  line-height: 27px;
  color: #000000;

  @media (max-width: 1424px) {
    text-align: left;
  }
`;

export default Actual;
