import React from 'react';
import PopupWrapper from "../Common/PopupWrapper";
import UiStateStore from "../../Stores/UiStateStore";
import {observer} from "mobx-react-lite";
import styled from "styled-components";
import Login from "./Login";
import Register from "./Register";

const Auth = () => {
    const {toggleAuthModal, authModal} = UiStateStore
    const [mode, setMode] = React.useState('log')

    return (
        <PopupWrapper setShow={toggleAuthModal} show={authModal} width={450}>
            <AuthWrapper>
                <img src="/img/logo-big.svg" alt="логотип HelloPeople"/>
                <AuthTitle
                    className="title">{mode === 'log' ? "Войти в HelloPeople" : "Регистрация"}</AuthTitle>
                {mode === 'reg'
                    ? <Register setMode={setMode} close={toggleAuthModal}/>
                    : <Login setMode={setMode} close={toggleAuthModal}/>}
            </AuthWrapper>
        </PopupWrapper>
    );
};

export const AuthWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  margin: 50px 0;
  width: 100%;


`


export const AuthTitle = styled.div`
  font-style: normal;
  font-weight: 800;
  font-size: 32px;
  line-height: 49px;
  margin-top: 25px;
`

export default observer(Auth);