import React, {Component} from 'react';
import styled from "styled-components";
import CloseButton from "./CloseButton";

type PropTypes = {
    show: boolean,
    setShow: Function,
    width?: number,
    children: any
}

const PopupWrapper: React.FC<PropTypes> = ({show, setShow, width = 450, children}) => {

    React.useEffect(() => {
        if (show) {
            document.body.style.overflow = 'hidden'
        }

        if (!show) {
            document.body.style.overflow = 'auto'
        }
    }, [show])

    return (
        <Wrapper active={show} width={width}>
            <div className='content'>
                <div onClick={() => setShow()} className='close-btn'>
                    <CloseButton/>
                </div>
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
  min-height: 100vh;
  width: 100%;
  transition: 0.3s;
  opacity: ${({active}) => active ? 1 : 0};
  pointer-events: ${({active}) => active ? 'all' : 'none'};
  overflow: auto;
  
  @media (max-width: 1000px) {
    background: #fff;
    overflow: auto;
  }

  .content {
    background: #fff;
    max-width: ${({width}) => width}px;
    width: 100%;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px;

    .close-btn {
      top: 10px;
      right: 10px;
      z-index: 12;
      position: relative;
    }
  }
`


export default PopupWrapper;