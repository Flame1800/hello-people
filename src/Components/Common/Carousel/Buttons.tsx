import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'

const Buttons = (props: any) => {
    const {index, total, loop, prevHandler, nextHandler} = props
    return (
        <Wrapper draggable={false}>
            {(loop || index !== 0) && (
                <Btn onClick={prevHandler}>
                    <Image src="/img/left-arrow.svg" width={7} height={12}/>
                </Btn>
            )}
            {(loop || index !== total - 1) && (
                <Btn onClick={nextHandler}>
                    <Image src="/img/right-arrow.svg" width={7} height={12}/>
                </Btn>
            )}
        </Wrapper>
    )
}

const Btn = styled.div`
  width: 30px;
  height: 30px;
  cursor: pointer;
  user-select: none;
  position: absolute;
  color: rgba(0, 0, 0, 0.71);
  background: rgba(255, 255, 255, 0.97);
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  bottom: 40%;
  display: flex;
  opacity: 0;
  transition: opacity 0.2s, visibility 0s linear 0.2s;
  box-shadow: 0 0 7px rgba(0, 0, 0, 0.25);

  &:first-child {
    left: 10px;
  }

  &:last-child {
    right: 10px;
  }
`

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 100;
  bottom: 0;
  text-align: center;

  &:hover ${Btn} {
    opacity: 1;
  }

  @media screen and (max-width: 1200px) {
    display: none;
  }
`

export default Buttons
