import React, { useState } from "react";
import {
  ButtonStyle,
  InputStyle,
  TextareaStyle,
} from "../../../../../styles/commonStyles";
import styled from "styled-components";
import { theme } from "../../../../../styles/theme";
import API from "../../../../Helpers/API";
import MeetCard from "../../../Meet/MeetCard";
import UserStore from "../../../../Stores/UserStore";
import UiStateStore from "../../../../Stores/UiStateStore";
import Link from "next/link";
import { BeatLoader } from "react-spinners";

const AddMeet = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [place, setPlace] = useState("");
  const [date, setDate] = useState("");
  const [err, setErr] = useState("");
  const [meet, setMeet] = useState(null);
  const [loading, setLoading] = useState(false);

  const { user } = UserStore;
  const { toggleAuthModal } = UiStateStore;

  const submitFormHandle = async (e: React.FormEvent) => {
    e.preventDefault();
    setErr("");

    if (!user) {
      return toggleAuthModal();
    }

    if (!desc && !place) {
      return setErr("Заполните все поля!");
    }

    try {
      const data = {
        title,
        description: desc,
        author: user.id,
      };
      setLoading(true);
      const newQuestion = await API.addQuestion({ data });
      setMeet(newQuestion.data.data);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  const form = (
    <>
      <div className="banner">
        <h1 className="title">Задать вопрос</h1>
      </div>
      <form onSubmit={submitFormHandle} className="form">
        <InputStyle
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          maxLength={130}
          placeholder="Вопрос"
        />
        <TextareaStyle
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          rows={5}
          maxLength={330}
          placeholder="Детали вопроса"
        />
        <ButtonStyle>
          {loading ? <BeatLoader color="#fff" size={7} /> : "Задать вопрос"}
        </ButtonStyle>
        {err && <div className="err">{err}</div>}
      </form>
    </>
  );

  const resultForm = (
    <>
      <div className="banner">
        <img src="/img/big-fire.svg" alt="календарь" />
        <div className="title">Вопрос добавлен!</div>
      </div>
      <div className="form">
        <Link href="/questions">
          <a>
            <ButtonStyle>Перейти к вопросам</ButtonStyle>
          </a>
        </Link>
      </div>
    </>
  );

  return <Wrapper>{!meet ? form : resultForm}</Wrapper>;
};

const Wrapper = styled.div`
  margin: 0 20px 64px 20px;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 80vh;
  border-radius: ${theme.borderRadius.main};
  box-shadow: ${theme.boxShadow.mainComponent} !important;

  label {
    width: 100%;
    color: #727272;
  }

  @media screen and (max-width: 600px) {
    box-shadow: none !important;
  }

  @media (min-width: 600px) {
    background: #fff;
    padding-top: 50px;
    padding-bottom: 30px;
  }

  .form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 350px;
    width: 100%;
    margin: 40px 0;
  }

  .banner {
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    .title {
      margin: 10px 0;
      font-size: 24px;
      font-weight: 700;
    }

    .sub-title {
      font-size: 16px;
      color: #585858;
      max-width: 350px;
    }
  }

  .input-title {
    font-weight: 600;
    font-size: 18px;
    color: #585858;
    margin-top: 30px;
    text-align: left;
    width: 100%;
  }

  .err {
    color: red;
    margin-top: 20px;
  }
`;

export default AddMeet;
