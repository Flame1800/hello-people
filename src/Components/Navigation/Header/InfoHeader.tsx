import React from 'react';
import styled from "styled-components";
import UserStore from "../../../Stores/UserStore";
import {DateTime} from "luxon";

const InfoHeader = () => {
    const {user} = UserStore

    return (
        <Wrapper>
            {user && <span className='userGreetings'>Привет, {user.name || user.username}!</span>}
            <span className='headerTime'>Сейчас - {DateTime.now().toFormat('t')}</span>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 14px;

  .userGreetings {
    font-weight: bold;
  }

  .headerTime {
    font-weight: 400;
  }
`

export default InfoHeader;