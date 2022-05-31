import React from 'react';
import styled from "styled-components";
import Link from "next/link";

const InfoHeader = () => {
    return (
        <Wrapper>
            <span className='userGreetings'>Привет, username!</span>
            <span className='headerTime'>Сейчас - 08:00</span>
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