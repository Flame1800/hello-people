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
      <Footer />
    </Wrapper>
  );
};

export const Wrapper = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  background: #fff;
  box-shadow: 0 0 10px -6px;
  border-radius: ${theme.borderRadius.main};
  height: 100%;

  @media (max-width: 1424px) {
    position: relative;
    border: 1px solid #e8e8e8;
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
`;

export default Actual;
