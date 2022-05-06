import React from 'react';
import styled from "styled-components";
import eventsStore from "../../Stores/eventsStore";
import {theme} from "../../../styles/theme";

interface PropsButton {
    active: Boolean
}

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
  background: #fff;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 45px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-weight: 500;
  font-size: 15px;
  text-align: center;
  height: 50px;
  margin: 20px auto;

  @media (min-width: 768px) {
    max-width: 360px;
    height: 40px;
  }
`

const Button = styled.div`
  cursor: pointer;
  background: ${(props: PropsButton) => props.active ?
          "#484747" : 'none'};
  color: ${(props: PropsButton) => props.active ? `#fff` : '#626262'};
  border: 6px solid #fff;
  border-radius: 65px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
`

export default Switch;