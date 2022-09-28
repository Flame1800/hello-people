import React, { ChangeEvent, EventHandler, useState } from "react";
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

const AddMeet = () => {
  const [desc, setDesc] = useState("");
  const [place, setPlace] = useState("");
  const [err, setErr] = useState("");
  const [meet, setMeet] = useState({});
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
        description: desc,
        place,
        author: user.id,
      };
      setLoading(true);
      const newMeet: { data: { data: MeetType } } = await API.addMeet({ data });
      setMeet(newMeet.data.data);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  const form = (
    <>
      <div className="banner">
        <img src="/img/big-fire.svg" alt="календарь" />
        <div className="title">Добавить встречу</div>
        <div className="sub-title">
          Расскажите кого вы ищете и в каком месте хотели бы провести время
        </div>
      </div>
      <form onSubmit={submitFormHandle} className="form">
        <TextareaStyle
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          rows={5}
          placeholder="Сообщение"
        />
        <InputStyle
          value={place}
          onChange={(e) => setPlace(e.target.value)}
          type="text"
          placeholder="Место"
          onInput={() => console.log("input")}
        />
        <ButtonStyle>
          {loading ? "Загрзука..." : "Отправить анкету"}
        </ButtonStyle>
        {err && <div className="err">{err}</div>}
      </form>
    </>
  );

  const resultForm = (
    <>
      <div className="banner">
        <img src="/img/big-fire.svg" alt="календарь" />
        <div className="title">Встреча добавлена!</div>
        <div className="sub-title">Вот как она выглядит</div>
      </div>
      <div className="form">
        <MeetCard meet={meet} />
        <Link href="/meets">
          <a>
            <ButtonStyle>Перейти к встречам</ButtonStyle>
          </a>
        </Link>
      </div>
    </>
  );

  return <Wrapper>{!Object.keys(meet).length ? form : resultForm}</Wrapper>;
};

const Wrapper = styled.div`
  margin: 0 20px 64px 20px;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 16px;
  min-height: 80vh;
  box-shadow: ${theme.boxShadow.mainComponent};

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