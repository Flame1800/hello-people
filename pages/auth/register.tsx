import React from 'react';
import styled from "styled-components";
import AuthMainScreen from "../../src/Components/Auth/AuthMainScreen";
import {AuthTitle, AuthWrapper} from "../../src/Components/Auth/AuthStyles";

const Login = () => {
    return (
        <AuthWrapper>
            <img src="/img/logo-big.svg" alt="логотип HelloPeople"/>
            <AuthTitle className="title">Создайте профиль</AuthTitle>
            <AuthMainScreen mode='reg'/>
        </AuthWrapper>
    );
};


export default Login;