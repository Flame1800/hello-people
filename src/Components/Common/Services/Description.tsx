import React from 'react';
import styled from "styled-components";

type PropsTypes = {
    children: string
}

const Description: React.FC<PropsTypes> = ({children}) => {
    return (
        <Wrapper>
            <div className="title">Описание</div>
            <div className="description">{children}</div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;

  .title {
    font-weight: 600;
    font-size: 18px;
    color: #000000;
    margin-top: 11px;
    margin-bottom: 11px;
  }

  .description {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 159.5%;
    color: #454545;
  }
`

export default Description;