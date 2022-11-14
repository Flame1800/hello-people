import React from "react";
import styled from "styled-components";
import {
  InputStyle,
  TextareaStyle,
  ButtonStyle,
  Label,
} from "../../styles/commonStyles";
import SeoHead from "../../src/Components/Layouts/SeoHead";
import { CITY } from "../../src/Constants/city";
import { theme } from "../../styles/theme";

const AddEvent = () => {
  const form = (
    <div className="form">
      Напишите интересное описание и доавьте фотографии или обложку.
      <InputStyle
        placeholder="Название*"
        onInput={() => console.log("input")}
      />
      <InputStyle
        type="tel"
        placeholder="Номер телефона*"
        onInput={() => console.log("input")}
      />
      <InputStyle
        type="tel"
        placeholder="Веб-сайт или паблик"
        onInput={() => console.log("input")}
      />
      <Label>Добавьте описание вашего места и его адрес.</Label>
      <TextareaStyle rows={5} placeholder="Описание" />
      <div className="input-title">Фото</div>
      <Label>
        Фотографии должны быть качественными. Анкета будет проверятся
        модераторами.
      </Label>
      <ButtonStyle>Отправить анкету</ButtonStyle>
    </div>
  );

  return (
    <Wrapper>
      <SeoHead
        title={`Предложить место - HelloPeople`}
        description={`Предлагайте свои места в HelloPeople ${CITY}`}
      />
      <div className="banner">
        <img src="/img/Map-location.svg" alt="место" />
        <h1 className="title">Добавить место</h1>
        <div className="sub-title">
          Отправьте анкету на добавление места и после модерации вы сможете
          найти ее в местах HelloPeople
        </div>
        <br />
        <a
          target="_blank"
          href="https://docs.google.com/forms/d/e/1FAIpQLSfDC-RFYage7c1W7CgXNF4yAlfYzix9y_a09wWdFhF41Bpvlw/viewform"
        >
          <ButtonStyle>Отправить анкету</ButtonStyle>
        </a>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 0 20px 64px 20px;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: ${theme.borderRadius.main};
  box-shadow: ${theme.boxShadow.mainComponent} !important;

  @media (min-width: 600px) {
    background: #fff;
    padding-top: 50px;
    padding-bottom: 30px;
    margin-bottom: 0;
  }

  @media screen and (max-width: 600px) {
    box-shadow: none !important;
  }

  .form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 350px;
    margin: 40px 0;
  }

  .banner {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    .title {
      margin: 10px 0;
      font-size: 24px;
      font-weight: 700;
    }

    .sub-title {
      font-size: 16px;
      color: #585858;
      max-width: 400px;
    }
  }

  .input-title {
    font-weight: 600;
    font-size: 18px;
    color: #585858;
    margin-top: 30px;
    text-align: left;
    width: 100%;
  }
`;

export default AddEvent;
