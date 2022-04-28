import React from 'react';
import {AuthTitle, AuthWrapper} from "../../src/Components/Auth/AuthStyles";
import Phone from "../../src/Components/Auth/Phone";
import BackButton from "../../src/Components/Common/BackButton";
import styled from "styled-components";

const PhonePage = () => {
    return (
        <Wrapper>
            <div className="head">
                <BackButton/>
            </div>
            <AuthWrapper>
                <img src="/img/logo-big.svg" alt="логотип HelloPeople"/>
                <AuthTitle className="title">Вход в HelloPeople</AuthTitle>
                <Phone mode='log'/>
            </AuthWrapper>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  padding-top: 40px;

  @media (max-width: 1000px) {
    background: #fff;
  }

  .head {
    margin-left: 20px;
  }
`

export default PhonePage;