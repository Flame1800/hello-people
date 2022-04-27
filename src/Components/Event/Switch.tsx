import React from 'react';
import styled from "styled-components";
import eventsStore from "../../Stores/eventsStore";

const Switch = () => {
    const {mode, changeMode} = eventsStore

    const switchHandler = (mode: string) => {
        changeMode(mode)
    }

    return (
        <Wrapper>
            <Button onClick={() => switchHandler('new')} className="button" active={mode === 'new'}>
                Предстоящие
            </Button>
            <Button onClick={() => switchHandler('past')} className="button" active={mode === 'past'}>
                Прошедшие
            </Button>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  background: #DCDCDC;
  border-radius: 45px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 5px;
  font-weight: 400;
  font-size: 14px;
  line-height: 97.9%;
  text-align: center;
  height: 50px;
  margin: 20px auto;

  @media (min-width: 768px) {
    max-width: 260px;
    height: 40px;
  }
`

const Button = styled.div`
  cursor: pointer;
  background: ${({active}) => active ? "#FFFFFF" : 'none'};
  box-shadow: ${({active}) => active ? "0 0 9px rgba(0, 0, 0, 0.21)" : 'none'};
  border-radius: 65px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
`

export default Switch;