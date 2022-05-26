import React from 'react';
import styled from "styled-components";
import BackButton from "../../src/Components/Common/BackButton";
import {InputStyle, TextareaStyle, ButtonStyle, Label} from "../../styles/commonStyles";

const AddEvent = () => {
    return (
        <Wrapper>
            <div className="banner">
                <img src="/img/Map-location.svg" alt="календарь"/>
                <div className="title">Добавить место</div>
                <div className="sub-title">
                    Напишите интересное описание и доавьте фотографии или обложку.
                </div>
            </div>
            <div className="form">
                <InputStyle placeholder='Название*' onInput={() => console.log('input')}/>
                <InputStyle type='tel' placeholder='Номер телефона*' onInput={() => console.log('input')}/>
                <InputStyle type='tel' placeholder='Веб-сайт или паблик' onInput={() => console.log('input')}/>
                <Label>
                    Напишите где находится ваше место и детально опишите его
                </Label>
                <TextareaStyle rows={5} placeholder='Описание'/>
                <div className="input-title">Фото</div>
                <Label>
                    Фотографии должны быть качественными, анкета будет проверятся модераторами
                </Label>
            </div>
            <ButtonStyle>Отправить анкету</ButtonStyle>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 600px) {
    background: #fff;
    padding-top: 50px;
    padding-bottom: 30px;
    margin-bottom: 0;
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
`

export default AddEvent;