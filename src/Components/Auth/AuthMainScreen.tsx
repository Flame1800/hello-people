import React from 'react';
import styled from "styled-components";
import {theme} from "../../../styles/theme";
import Link from "next/link";

type Props = {
    mode: string
}

const AuthMainScreen: React.FC<Props> = ({mode}) => {

    return (
        <Wrapper>
            <Link href={`/auth/phone?mode=${mode}`}>
                <RegButton>
                    <img src="/img/phone.svg" alt="телефон"/>
                    <div className="name">Номер телефона</div>
                </RegButton>
            </Link>
            <RegButton>
                <img src="/img/vk.svg" alt="телефон"/>
                <div className="name">Вконтакте</div>
            </RegButton>
            <RegButton>
                <img src="/img/google.svg" alt="телефон"/>
                <div className="name">Google</div>
            </RegButton>
            <Link href={mode === 'reg' ? "/auth/login" : "/auth/register"}>
                <a>
                    <div className="change-btn">{mode === 'reg' ? "Вход" : "Регистрация"}</div>
                </a>
            </Link>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  width: 100%;
  padding: 0 20px;

  .change-btn {
    font-weight: 700;
    font-size: 20px;
    line-height: 27px;
    color: ${theme.color.orange};
    margin-top: 40px;
  }
`

const RegButton = styled.a`
  cursor: pointer;
  background: #fff;
  width: 100%;
  max-width: 350px;
  height: 67px;
  display: flex;
  align-items: center;
  border: 2px solid #DFDFDF;
  box-sizing: border-box;
  border-radius: 10px;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 27px;
  margin-bottom: 10px;
  padding: 15px;
  transition: .3s;

  &:hover {
    background: #f1f1f1;
  }

  img {
    margin-right: 15px;
  }
`

export default AuthMainScreen;