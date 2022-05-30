import React from 'react';
import {useRouter} from "next/router";
import styled from "styled-components";

const BackButton = () => {
    const router = useRouter()

    return (
        <Wrapper onClick={() => router.back()}>
            <img src="/img/back-icon.svg" alt="Назад"/>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;

  & img {
      width: 24px;
      height: 24px;
  }
`

export default BackButton;