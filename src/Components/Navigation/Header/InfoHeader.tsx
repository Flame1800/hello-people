import React from 'react';
import styled from "styled-components";
import UserStore from "../../../Stores/UserStore";
import {DateTime} from "luxon";

const InfoHeader = () => {
    const date = DateTime.now().toFormat('t')

    return (
        <Wrapper>
            <span className='headerTime'>Сейчас - {date}</span>
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