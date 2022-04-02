import React from 'react';
import styled from "styled-components";
import BackButton from "../../src/Components/Common/BackButton";
import {InputStyle, TextareaStyle, ButtonStyle} from "../../styles/commonStyles";

const AddEvent = () => {
    return (
        <Wrapper>
            <div className="head">
                <BackButton/>
            </div>
            <div className="banner">
                <img src="/img/calendar.svg" alt="календарь"/>
                <div className="title">Добавить мероприятие</div>
                <div className="sub-title">
                    Напишите интересное описание и доавьте фотографии или обложку.
                </div>
            </div>
            <div className="form">
                <InputStyle placeholder='Название*' onInput={() => console.log('input')}/>
                <InputStyle type='date' placeholder='Дата начала' onInput={() => console.log('input')}/>
                <InputStyle type='tel' placeholder='Номер телефона*' onInput={() => console.log('input')}/>
                <InputStyle type='tel' placeholder='Веб-сайт или паблик' onInput={() => console.log('input')}/>
                <div className="caption">
                    Напишите где будет проходить ваше мероприятие, и что на нем будет происходить
                </div>
                <TextareaStyle rows={5} placeholder='Описание'/>
                <div className="label">Фото</div>
                <div className="caption">
                    Фотографии должны быть качественными, анкета будет проверятся модераторами
                </div>
            </div>
            <ButtonStyle>Отправить анкету</ButtonStyle>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  background: #fff;
  min-height: 100vh;
  padding: 50px 20px;

  .head {
    margin-bottom: 30px;
  }

  .banner {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 60px;
    margin-left: auto;
    margin-right: auto;
    width: 90%;

    .title {
      margin: 10px 0;
      font-style: normal;
      font-weight: 400;
      font-size: 24px;
      line-height: 33px;
      text-align: center;
      color: #000000;
    }

    .sub-title {
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 25px;
      text-align: center;
      color: #585858;
    }
  }

  .label {
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 25px;
    color: #585858;
    padding: 0 10px;
    margin-top: 30px;
    margin-bottom: -10px;
  }

  .caption {
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 25px;
    color: #585858;
    padding: 0 10px;
    margin-bottom: 15px;
    margin-top: 15px;
  }
`

export default AddEvent;