import React from 'react';
import styled from "styled-components";

const Switch = () => {
    const [activeItem, setItem] = React.useState(1)

    const switchHandler = (num: number) => {
        setItem(num)
    }

    return (
        <Wrapper>
            <Button onClick={() => switchHandler(1)} className="button" active={activeItem === 1}>
                Актуальные
            </Button>
            <Button onClick={() => switchHandler(2)} className="button" active={activeItem === 2}>
                Прошедшие
            </Button>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  margin: 0 20px;
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
`

const Button = styled.div`
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