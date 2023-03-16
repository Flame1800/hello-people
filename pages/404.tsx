import React from "react";
import SeoHead from "../src/Components/Layouts/SeoHead";
import Link from "next/link";
import styled from "styled-components";
import { theme } from "../styles/theme";
import { ButtonStyle } from "../styles/commonStyles";

const NotFound = () => {
  return (
    <Wrapper>
      <div className="banner">
        <SeoHead title={`Не найдено 404`} description={`Ничего не найдено`} />
        <h1>404</h1>
        <h3>ничего не найдено</h3>
        <br />

        <Link href="/">
          <ButtonStyle>Вернуться на главную</ButtonStyle>
        </Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 0 20px 64px 20px;
  padding: 0 20px;
  display: flex;
  max-height: 80vh;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: ${theme.borderRadius.main};
  box-shadow: ${theme.boxShadow.mainComponent} !important;

  h1 {
    font-size: 60px;
  }

  @media (min-width: 600px) {
    background: #fff;
    padding-top: 50px;
    padding-bottom: 30px;
    margin-bottom: 0;
  }

  @media screen and (max-width: 600px) {
    box-shadow: none !important;
  }

  .banner {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

export default NotFound;
