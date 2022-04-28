import React from 'react';
import {useRouter} from "next/router";
import styled from "styled-components";

const BackButton = ({text}) => {
    const router = useRouter()

    return (
        <Wrapper onClick={() => router.back()}>
            <img src="/img/back-icon.svg" alt="назад"/>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
`

export default BackButton;