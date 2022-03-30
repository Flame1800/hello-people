import React from 'react';
import styled from "styled-components";

type ArrowToBottomProps = {
    id: string;
};

const ArrowToBottom: React.FC<ArrowToBottomProps> = (props) => {
    const {id} = props;

    return (
        <Wrapper href={`#${id}`}>
            <img src="/img/arrow-bottom-icon.svg" alt="down"/>
        </Wrapper>
    );
};

const Wrapper = styled.a`
  position: fixed;
  width: 54px;
  height: 54px;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 100px;
  right: 10px;
  cursor: pointer;
  z-index: 1;
  background: #FFFFFF;
  box-shadow: 0 4px 7px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
`

export default ArrowToBottom;