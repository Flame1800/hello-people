import React from 'react';
import styled from "styled-components";
import BackButton from "../../src/Components/Common/BackButton";
import {ButtonStyle, InputStyle, TextareaStyle} from "../../styles/commonStyles";

const Add = () => {
    return (
        <Wrapper>
            <div className="head">
                <BackButton/>
            </div>
            <div className="banner">
                <img src="/img/big-fire.svg" alt="календарь"/>
                <div className="title">Добавить встречу</div>
                <div className="sub-title">
                    Расскажите кого вы ищете и в каком месте хотели бы провести время
                </div>
            </div>
            <div className="form">
                <TextareaStyle rows={5} placeholder='Сообщение'/>
                <InputStyle type='text' placeholder='Место' onInput={() => console.log('input')}/>
                <div className="caption">
                    Тусовка или для двоих?*
                </div>
                <label>
                    тусовка
                    <input type="radio"/>
                </label>
                <label>
                    пара
                    <input type="radio"/>
                </label>
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


export default Add;