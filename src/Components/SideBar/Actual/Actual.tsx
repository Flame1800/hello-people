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
  height: 100%;
  width: 350px;
  display: none;
  background: #fff;
  box-shadow: 0 0 10px -6px;
  border-radius: ${theme.borderRadius.main};

  @media (min-width: 1424px) {
    display: flex;
    flex-direction: column;
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
