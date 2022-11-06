import React, { FormEvent, useState } from "react";
import styled from "styled-components";
import { theme } from "../../../styles/theme";
import { ButtonStyle, InputStyle } from "../../../styles/commonStyles";
import axios from "axios";
import API from "../../Helpers/API";
import { setCookie } from "nookies";
import UserStore from "../../Stores/UserStore";
import VkLogo from "./VkLogo";
import useFocus from "../../Hooks/useFocus";
import { BeatLoader } from "react-spinners";
import GoogleRegister from "./GoogleRegister";

type Props = {
  setMode: Function;
  close: Function;
};

const Login = ({ setMode, close }: Props) => {
  const [identifier, setIdentifier] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");
  const [loading, setLoading] = useState(false);

  const focusRef = useFocus();

  const clickForgotPasswordHandle = async () => {
    await axios.post(`${API.url}/auth/forgot-password`, {
      email: "r.shaficoff@gmail.com",
      link: "https://hellopeople.online",
    });
  };

  const clickLoginHandle = async (e: FormEvent) => {
    e.preventDefault();
    setError("");

    if (identifier.length === 0 || password.length === 0) {
      return setError("Все поля должны быть заполнены");
    }

    const reqBody = { identifier, password };

    try {
      setLoading(true);
      const res = await axios.post(`${API.url}/api/auth/local`, reqBody);
      const { data } = res;
      setCookie(null, "jwt", data.jwt, {
        maxAge: 30 * 24 * 60 * 60,
        path: "/",
      });

      UserStore.setUserByToken(data.jwt);
      close();
    } catch (e: any) {
      console.log(e);
      if (e.response) {
        setError("Неверный логин или пароль");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Wrapper>
      <GoogleRegister />
      <div className="or">или</div>
      <form onSubmit={clickLoginHandle} className="form">
        <InputStyle
          ref={focusRef}
          placeholder="Email или Логин"
          value={identifier}
          onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
            setIdentifier(e.target.value)
          }
          name="email"
          type="email"
        />
        <InputStyle
          placeholder="Пароль"
          value={password}
          onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPassword(e.target.value)
          }
          name="password"
          type="password"
        />
        <ButtonStyle disabled={loading}>
          {!loading ? "Войти" : <BeatLoader color="#fff" size={7} />}
        </ButtonStyle>
        {error && <div className="error-msg">{error}</div>}

        <div className="change-btn">
          <div onClick={clickForgotPasswordHandle}>Забыли пароль?</div>
          <div onClick={() => setMode("reg")}>Регистрация</div>
        </div>
      </form>
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

  .error-msg {
    color: red;
    margin-top: 10px;
    font-weight: 600;
  }

  .form {
    max-width: 300px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .change-btn {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    font-weight: 700;
    font-size: 16px;
    line-height: 27px;
    color: ${theme.color.orange};
    margin-top: 40px;
    cursor: pointer;
    border-radius: 10px;
    transition: 0.2s;
  }
`;

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
  transition: 0.3s;

  &:hover {
    background: #f9f9f9;
  }

  img {
    margin-right: 15px;
  }
`;

export default Login;
