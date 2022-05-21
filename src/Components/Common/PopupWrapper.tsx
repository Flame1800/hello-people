import React from 'react';
import styled from "styled-components";


const PopupWrapper = ({show, setShow, width = 500, children}) => {

    return (
        <Wrapper active={show} width={width}>
            <div className='content'>
                {children}
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1500;
  background: rgba(0, 0, 0, 0.4);
  height: 100vh;
  width: 100%;
  transition: 0.3s;
  opacity: ${({active}) => active ? 1 : 0};
  pointer-events: ${({active}) => active ? 'all' : 'none'};


  .content {
    background: #fff;
    max-width: ${({width}) => width}px;
    width: 100%;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px;
  }
`


export default PopupWrapper;