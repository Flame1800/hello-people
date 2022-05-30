import React from 'react';
import styled from "styled-components";
import {NextPage} from "next";
import {observer} from "mobx-react-lite";
import {ButtonStyle, InputStyle, TextareaStyle} from "../../styles/commonStyles";
import {useFormik} from 'formik';
import API from "../../src/Libs/API";
import {parseCookies} from "nookies";
import {theme} from "../../styles/theme";
import {useRouter} from "next/router";
import UserStore from "../../src/Stores/UserStore";
import UserAvatar from "../../src/Components/User/UserAvatar";
import axios from "axios";

interface Props {
    user: any
}


const EditProfile: NextPage<Props> = ({user}) => {
    const router = useRouter()

    const logout = () => {
        UserStore.logout()
        router.push('/events')
    }

    const updateUser = async (values: any) => {
        try {
            await API.updateUser(user.id, values)
            return router.push(`/user/${user.id}`)
        } catch (e) {
            console.warn(e)
        }
    }

    const updateAvatar = async (e: Event) => {
        try {
            const formData = new FormData()
            formData.append('files', e.target.files[0], 'myfile.jpg');
            const res = await API.uploadFile(formData)
            const avatar = res.data[0].url

            await API.updateUser(user.id, {avatar})
            return router.push(`/user/${user.id}`)
        } catch (e) {
            console.warn(e)
        }
    }


    const formik = useFormik({
        initialValues: {
            name: user.name,
            username: user.username,
            email: user.email,
            description: user.description
        },
        onSubmit: updateUser
    });


    if (!user) {
        return null
    }

    return (
        <Wrapper>
            <div className="title">Редактировать профиль</div>
            <div className='form'>
                <UserAvatar url={user.avatar} size='lg'/>
                <label htmlFor="avatar" className="input__file-button">
                    <div className='btn-upload' type='submit'>изменить аватар</div>
                </label>
                <input
                    placeholder='Аватар'
                    type='file'
                    id="avatar"
                    name="avatar"
                    className="avatar-input"
                    onInput={(e) => updateAvatar(e)}
                />
            </div>
            <form className="form" onSubmit={formik.handleSubmit}>
                <InputStyle
                    placeholder='Никнйем'
                    id="username"
                    name="username"
                    maxLength={28}
                    onChange={formik.handleChange}
                    value={formik.values.username}
                />
                <InputStyle
                    placeholder='Имя'
                    id="name"
                    name="name"
                    maxLength={28}
                    onChange={formik.handleChange}
                    value={formik.values.name}
                />
                <InputStyle
                    type='email'
                    placeholder='Email'
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
                    placeholder='О себе'/>
                <ButtonStyle type='submit'>Сохранить</ButtonStyle>
            </form>
            <div className="logout" onClick={() => logout()}>
                <img width={24} height={24} src="/img/logout.svg" alt="logout"/>
                <p>Выйти из аккаунта</p>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;

  .avatar-input {
    visibility: hidden;
  }

  @media (min-width: 600px) {
    background: #fff;
    padding-top: 50px;
    padding-bottom: 30px;
    margin-bottom: 0;
  }

  .form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 400px;
    width: 100%;
    margin: 20px 0;
  }

  .title {
    margin: 10px 0;
    font-size: 24px;
  }

  .btn-upload {
    color: ${theme.color.orange};
    font-size: 20px;
    margin-top: 20px;
    font-weight: 500;
    background: #ffeded;
    border-radius: 10px;
    padding: 5px 20px;
    border: none;
    cursor: pointer;

    &:hover {
      background: #ffe0e0;
    }
  }

  .logout {
    display: flex;
    color: #FF4A4A;
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
`

EditProfile.getInitialProps = async (ctx) => {
    const token = parseCookies(ctx).jwt
    const userReq = await API.getUserMe(token)

    return {user: userReq.data}
}

export default observer(EditProfile);