import React from 'react';
import styled from "styled-components";


const CloseButton = () => {
    return (
        <Wrapper>
            <img width={32} height={32} src="/img/close.svg" alt="close" color='#b0b0b0;'/>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  border-radius: 50%;
  height: 40px;
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: .2s ease-in-out;

  &:hover {
    background: #fafafa;
  }

  & img {
    filter: invert(80%) sepia(0%) saturate(0%) hue-rotate(157deg) brightness(91%) contrast(84%);
  }
`

export default CloseButton;