import React from 'react';
import styled from "styled-components";


const CloseButton = () => {
    return (
        <Wrapper>
            <img width={35} height={35} src="/img/close.svg" alt="x"/>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  border-radius: 50%;
  height: 50px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    background: #eeeeee;
  }
`

export default CloseButton;