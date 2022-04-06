import React from 'react';
import AuthMainScreen from "../../src/Components/Auth/AuthMainScreen";
import {AuthWrapper, AuthTitle} from "../../src/Components/Auth/AuthStyles";

const Login = () => {
    return (
        <AuthWrapper>
            <img src="/img/logo-big.svg" alt="логотип HelloPeople"/>
            <AuthTitle className="title">Вход в HelloPeople</AuthTitle>
            <AuthMainScreen mode='log'/>
        </AuthWrapper>
    );
};


export default Login;