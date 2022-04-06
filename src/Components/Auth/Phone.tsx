import React from 'react';
import styled from "styled-components";
import {theme} from "../../../styles/theme";
import Link from "next/link";
import {InputStyle} from "../../../styles/commonStyles";
import {ButtonStyle} from "../../../styles/commonStyles";

type Props = {
    mode: string
}

const AuthMainScreen: React.FC<Props> = ({mode}) => {

    return (
        <Wrapper>
            <InputStyle placeholder="Имя" name='name' type='string'/>
            <InputStyle placeholder="Номер телефона" name='phone' type='tel'/>
            <Link href='/auth/code'>
                <a>
                    <ButtonStyle>Войти</ButtonStyle>
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

  a {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .change-btn {
    font-weight: 700;
    font-size: 20px;
    line-height: 27px;
    color: ${theme.color.orange};
    margin-top: 40px;
  }
`
export default AuthMainScreen;