import React from 'react';
import styled from "styled-components";
import {ButtonStyle} from "../../../styles/commonStyles";
import Link from "next/link";

const ProfileButtons = ({isMe}) => {
    return (
        <Wrapper>
            {!isMe
                ? <ButtonStyle>Познакомится</ButtonStyle>
                : <Link href="/user/edit">
                    <a>
                        <ButtonStyle>Редактировать</ButtonStyle>
                    </a>
                </Link>}
            <div className="btn-gray">
                <img src="/img/chat.svg" alt="иконка"/>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;
  align-items: center;
  margin-top: 10px;

  > div {
    max-width: 140px;
    margin: 2px 0;
  }

  .btn-gray {
    padding: 10px;
    border-radius: 10px;
    width: 64px;
    height: 35px;
    border: 1px solid #949494;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    font-size: 14px;
    color: #585858;
    margin-left: 10px;
  }
`

export default ProfileButtons;