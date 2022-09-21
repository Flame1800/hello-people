import React from 'react';
import styled from "styled-components";
import Familiars from "./Familiars";
import ProfileButtons from "../ProfileButtons";
import UserStore from "../../../Stores/UserStore";
import {observer} from "mobx-react-lite";
import UserAvatar from "../../User/UserAvatar";

const ProfileHead = ({user}) => {
    const me = UserStore.user
    const isMe = user.id === me?.id


    return (
        <Wrapper>
            <div className="head">
                <UserAvatar size='lg' url={user.avatar}/>
                <div className="info">
                    <div className="wrap-name">
                        <div className="name">
                            {user.username}
                        </div>
                    </div>
                    <div className="first-name">
                        {user.name}
                    </div>
                    {me && <ProfileButtons user={user} me={me}/>}
                    <div>
                        <Familiars user={user} isMe={isMe}/>
                    </div>
                </div>
            </div>
            {user.description &&
            <div className="description">
                <div className="title-desc">Обо мне:</div>
                <div className='text-desc'>
                  {user.description}
                </div>
            </div>
            }

            {!user.description &&
            <div className="description">
                <div className="title-desc">Обо мне:</div>
                <div className='text-desc'>
                  Здесь пока пусто...
                </div>
            </div>
            }
        </Wrapper>
    );
};

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1000px;
  margin: auto;
  padding: 40px 5%;
  border-radius: 32px;
  background: #fff;

  @media (max-width: 1424px) {
    padding: 40px 5%;
  }

  .info {
    margin-left: 15px;
  }

  .head {
    display: flex;
    justify-content: start;
    align-items: center;
    margin-bottom: 10px;
  }

  .wrap-name {
    display: flex;
    flex-wrap: wrap;
    x
  }

  .avatar {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    margin-bottom: 15px;
    margin-right: 15px;
  }

  .name {
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
  }

  .description {
    display: flex;
    flex-direction: column;
    white-space: pre-line;

    .title-desc {
      font-weight: 800;
      font-size: 15px;
      color: #000000;
      margin-bottom: 5px;
    }

    .text-desc {
      display: flex;
      word-wrap: break-word;

      & {
        display: inline-block;
      }
    }

    max-width: 330px;
    font-weight: 600;
    font-size: 14px;
    line-height: 19px;
    color: #585858;

    @media (min-width: 740px) {
      margin-left: 60px;
    }
  }
`


export default observer(ProfileHead);