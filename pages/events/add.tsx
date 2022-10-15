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
      <InputStyle
        placeholder="Название*"
        onInput={() => console.log("input")}
      />
      <InputStyle
        type="date"
        placeholder="Дата начала"
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
      <Label>Добавьте описание для Вашего мероприятия и его адрес.</Label>
      <TextareaStyle rows={5} placeholder="Описание" />
      <div className="input-title">Фото</div>
      <Label>
        Фотографии должны быть качественными. Анкета будет проверяться
        модераторами.
      </Label>
      <ButtonStyle>Отправить анкету</ButtonStyle>
    </div>
  );

  return (
    <Wrapper>
      <SeoHead
        title={`Предложить мероприятие - HelloPeople`}
        description={`Предлагайте свои мероприятия в HelloPeople ${CITY}`}
      />
      <div className="banner">
        <img src="/img/calendar.svg" alt="календарь" />
        <div className="title">Добавить мероприятие</div>
        <div className="sub-title">
          Отправьте анкету на добавление события и после модерации вы сможете
          найти ее в афише HelloPeople
        </div>
      </div>
      <br />
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSdPx5iXdOPS2-JVnZyR2J4q_J1HgdrwlzQBofVVpbnz1YcSqA/viewform?usp=sharing"
        target="_blank"
      >
        <ButtonStyle>Отправить анкету</ButtonStyle>
      </a>
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
    max-width: 400px;
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
