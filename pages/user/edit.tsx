import React, { useState } from "react";
import styled from "styled-components";
import { observer } from "mobx-react-lite";
import {
  ButtonStyle,
  InputStyle,
  TextareaStyle,
} from "../../styles/commonStyles";
import { useFormik } from "formik";
import API from "../../src/Helpers/API";
import { theme } from "../../styles/theme";
import { useRouter } from "next/router";
import UserStore from "../../src/Stores/UserStore";
import UserAvatar from "../../src/Components/User/UserAvatar";
import SeoHead from "../../src/Components/Layouts/SeoHead";
import userStore from "../../src/Stores/UserStore";

const EditProfile = () => {
  const router = useRouter();
  const { user, setUserById } = userStore;

  const logout = () => {
    UserStore.logout();
    router.push(`/events`);
  };

  const updateUser = async (values: any) => {
    if (!user) return;

    try {
      await API.updateUser(user.id, values);
      return router.push(`/user/${user.id}`);
    } catch (e) {
      console.warn(e);
    }
  };

  const deleteAvatar = async () => {
    if (!user?.cover?.url) return;

    try {
      await API.deleteFile(user.cover.id);
    } catch (e) {
      console.error(e);
    }
  };

  const updateAvatar = async (e: any) => {
    if (!user) return;

    deleteAvatar();
    try {
      const formData = new FormData();
      formData.append("files", e.target.files[0]);
      formData.append("ref", "plugin::users-permissions.user");
      formData.append("refId", String(user.id));
      formData.append("field", "cover");

      const res = await API.uploadFile(formData);
      const avatar = res.data[0].url;
      await API.updateUser(user.id, { avatar });
    } catch (e) {
      console.error(e);
    }
    setUserById(user.id);
  };

  const formik = useFormik({
    initialValues: {
      name: user?.name,
      username: user?.username,
      email: user?.email,
      description: user?.description,
    },
    onSubmit: updateUser,
  });

  if (!user) {
    return null;
  }

  return (
    <Wrapper>
      <SeoHead
        title={`Редактировать профиль ${user?.username}`}
        description={`Редактировать профиль`}
      />
      <div className="content">
        <h1 className="title">Редактировать профиль</h1>
        <div className="form">
          <UserAvatar url={user.cover?.url} size="lg" />
          <label htmlFor="avatar" className="input__file-button">
            <div className="btn-upload">Изменить аватар</div>
          </label>
          <input
            placeholder="Аватар"
            type="file"
            id="avatar"
            name="avatar"
            className="avatar-input"
            onInput={updateAvatar}
          />
        </div>
        <form className="form" onSubmit={formik.handleSubmit}>
          <InputStyle
            placeholder="Никнйем"
            id="username"
            name="username"
            maxLength={28}
            onChange={formik.handleChange}
            value={formik.values.username}
          />
          <InputStyle
            placeholder="Имя"
            id="name"
            name="name"
            maxLength={28}
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          <InputStyle
            type="email"
            placeholder="Email"
            id="email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          <TextareaStyle
            id="description"
            name="description"
            rows={5}
            value={formik.values.description}
            onChange={formik.handleChange}
            placeholder="О себе"
          />
          <ButtonStyle type="submit">Сохранить</ButtonStyle>
        </form>
        <div className="logout" onClick={() => logout()}>
          <img width={24} height={24} src="/img/logout.svg" alt="logout" />
          <p>Выйти из аккаунта</p>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
  padding: 0 20px;

  .content {
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 48px;
    border-radius: 32px;
    background: #fff;
    width: 100%;
  }

  @media (max-width: 700px) {
    padding: 0;

    .content {
      border-radius: 0;
    }
  }

  .avatar-input {
    visibility: hidden;
  }

  .form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 350px;
    width: 100%;
    margin: 20px 0;
  }

  .title {
    margin: 10px 0;
    font-size: 24px;
    font-weight: 700;
  }

  .btn-upload {
    color: ${theme.color.orange};
    font-size: 16px;
    margin-top: 20px;
    font-weight: 500;
    background: #ffeded;
    border-radius: 10px;
    padding: 8px 24px;
    border: none;
    cursor: pointer;

    &:hover {
      background: #ffe0e0;
    }
  }

  .btn-save {
    display: flex;
    justify-content: center;
    width: 100%;
    max-width: 350px;
    color: #000;
    font-size: 16px;
    margin-top: 20px;
    font-weight: 500;
    background: #fff;
    border: 0.1px solid #f1f1f1;
    border-radius: 8px;
    padding: 12px 24px;
    cursor: pointer;

    &:hover {
      background: #fafafa;
    }
  }

  .logout {
    display: flex;
    color: #ff4a4a;
    font-weight: 600;
    font-size: 16px;
    border-radius: 10px;
    padding: 2px 5px;
    cursor: pointer;
    height: fit-content;
    margin-bottom: 40px;
  }

  .input-title {
    font-weight: 600;
    font-size: 18px;
    color: #585858;
    margin-top: 30px;
    text-align: left;
    width: 100%;
  }
`;

export default observer(EditProfile);
