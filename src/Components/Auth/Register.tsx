import React from 'react';
import styled from "styled-components";
import {theme} from "../../../styles/theme";
import {InputStyle} from "../../../styles/commonStyles";
import {ButtonStyle} from "../../../styles/commonStyles";
import API from "../../Libs/API";
import axios from "axios";
import {setCookie, parseCookies} from "nookies";
import {observer} from "mobx-react-lite";
import UserStore from "../../Stores/UserStore";

type Props = {
    setMode: Function,
    close: Function
}

const Register: React.FC<Props> = ({setMode, close}) => {
    const [username, setUsername] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [error, setError] = React.useState('')

    const register = async () => {
        setError('')

        if (username.length === 0 || email.length === 0 || password.length === 0) {
            return setError('Все поля должны быть заполненны')
        }

        const reqBody = {username, email, password}

        try {
            const res = await axios.post(`${API.url}/api/auth/local/register`, reqBody)
            const {data} = res

            setCookie(null, 'jwt', data.jwt, {
                maxAge: 30 * 24 * 60 * 60,
                path: '/',
            })

            const cookie = parseCookies()

            const user = await axios(`${API.url}/api/users/me`, {
                headers: {
                    Authorization: `Bearer ${cookie.jwt}`
                }
            })
            UserStore.setUser(user.data)
            close()

        } catch (e: any) {
            console.log(e.response)
            setError(e.response.data.error.message)
        }


    }

    return (
        <Wrapper>
            <RegButton>
                <img src="/img/vk.svg" alt="телефон"/>
                <div className="name">Вконтакте</div>
            </RegButton>
            <div className="or">или</div>
            <div className="form">
                <InputStyle placeholder="Никнейм" maxLength={30} value={username}
                            onInput={e => setUsername(e.target.value)} name='name'
                            type='string'/>
                <InputStyle placeholder="Email" value={email} onInput={e => setEmail(e.target.value)} name='email'
                            type='email'/>
                <InputStyle placeholder="Пароль" value={password} onInput={e => setPassword(e.target.value)}
                            name='password' type='password'/>
                <ButtonStyle onClick={() => register()}>Создать аккаунт</ButtonStyle>
                {error && <div className="error-msg">
                    {error}
                </div>}

                <div className="change-btn" onClick={() => setMode('login')}>Вход</div>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  width: 100%;

  .or {
    margin-bottom: 10px;
    font-weight: 700;
    font-size: 18px;
  }

  .form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .error-msg {
    color: red;
    margin-top: 10px;
    font-weight: 600;
  }

  .change-btn {
    font-weight: 700;
    font-size: 18px;
    line-height: 27px;
    color: ${theme.color.orange};
    margin-top: 40px;
    padding: 10px 40px;
    cursor: pointer;
    border-radius: 10px;
    transition: .2s;

    &:hover {
      background: #f1f1f1;
    }
  }
`

const RegButton = styled.a`
  cursor: pointer;
  background: #fff;
  width: 100%;
  max-width: 300px;
  height: 67px;
  display: flex;
  justify-content: center;
  align-items: center;
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

export default observer(Register);