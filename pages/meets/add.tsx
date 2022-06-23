import React from 'react';
import styled from "styled-components";
import BackButton from "../../src/Components/Common/BackButton";
import {ButtonStyle, InputStyle, TextareaStyle} from "../../styles/commonStyles";

const Add = () => {
    return (
        <Wrapper>
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
                <div className="input-title">
                    Тусовка или для двоих?*
                </div>
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
    width: 100%;
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
      max-width: 350px;
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


export default Add;