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
            <InputStyle placeholder="Код" name='password' type='tel'/>
            <ButtonStyle>Продолжить</ButtonStyle>
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

export default AuthMainScreen;