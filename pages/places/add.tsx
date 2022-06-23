import React from 'react';
import styled from "styled-components";
import BackButton from "../../src/Components/Common/BackButton";
import {InputStyle, TextareaStyle, ButtonStyle, Label} from "../../styles/commonStyles";

const AddEvent = () => {
    return (
        <Wrapper>
            <div className="banner">
                <img src="/img/Map-location.svg" alt="место"/>
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
                    Добавьте описание вашего места и его адрес.
                </Label>
                <TextareaStyle rows={5} placeholder='Описание'/>
                <div className="input-title">Фото</div>
                <Label>
                    Фотографии должны быть качественными. Анкета будет проверятся модераторами.
                </Label>
                <ButtonStyle>Отправить анкету</ButtonStyle>
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
  border-radius: 16px;

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
`

export default AddEvent;