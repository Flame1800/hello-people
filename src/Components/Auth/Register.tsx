import React, { useState } from "react";
import styled from "styled-components";
import { theme } from "../../../styles/theme";
import { InputStyle } from "../../../styles/commonStyles";
import { ButtonStyle } from "../../../styles/commonStyles";
import API from "../../Helpers/API";
import axios from "axios";
import { setCookie, parseCookies } from "nookies";
import { observer } from "mobx-react-lite";
import UserStore from "../../Stores/UserStore";
import VkLogo from "./VkLogo";
import useFocus from "../../Hooks/useFocus";
import { BeatLoader, ClipLoader } from "react-spinners";
import GoogleRegister from "./GoogleRegister";

type Props = {
  setMode: Function;
  close: Function;
};

const Register: React.FC<Props> = ({ setMode, close }) => {
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");
  const [loading, setLoading] = useState(false);

  const focusRef = useFocus();

  const register = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (username.length === 0 || email.length === 0 || password.length === 0) {
      return setError("Все поля должны быть заполненны");
    }

    const reqBody = { username, email, password };

    try {
      setLoading(true);
      const res = await axios.post(
        `${API.url}/api/auth/local/register`,
        reqBody
      );
      const { data } = res;

      setCookie(null, "jwt", data.jwt, {
        maxAge: 30 * 24 * 60 * 60,
        path: "/",
      });

      const cookie = parseCookies();
      UserStore.setUserByToken(cookie.jwt);
      close();
    } catch (e: any) {
      setError("Этот email уже занят");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Wrapper>
      {/*<GoogleRegister />*/}
      {/*<div className="or">или</div>*/}
      <form onSubmit={register} className="form">
        <InputStyle
          ref={focusRef}
          placeholder="Никнейм"
          maxLength={30}
          value={username}
          onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
            setUsername(e.target.value)
          }
          name="name"
          type="string"
        />
        <InputStyle
          placeholder="Email"
          value={email}
          onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
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
        <ButtonStyle>
          {!loading ? "Создать аккаунт" : <BeatLoader color="#fff" size={7} />}
        </ButtonStyle>
        {error && <div className="error-msg">{error}</div>}

        <div className="change-btn" onClick={() => setMode("login")}>
          Вход
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

  .form {
    max-width: 300px;
    width: 100%;
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
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    font-weight: 700;
    font-size: 18px;
    line-height: 27px;
    color: ${theme.color.orange};
    margin-top: 40px;
    padding: 10px 40px;
    cursor: pointer;
    border-radius: 10px;
    transition: 0.2s;

    &:hover {
      background: #f9f9f9;
    }
  }
`;

export default observer(Register);
