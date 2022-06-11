import React from 'react';
import styled from "styled-components";
import {tSFunctionType} from "@babel/types";
import {theme} from "../../../styles/theme";

type PropTypes = {
    value: number,
    active: boolean
}

const Like: React.FC<PropTypes> = ({value, active}) => {
    return (
        <Wrapper>
            {<img src={active ? "/img/like-active.svg" : "/img/like-none-active.svg"} alt="like"/>}
            <div className="value">
                {value}
            </div>
        </Wrapper>
    );
};


const Wrapper = styled.div`
  display: flex;
  align-items: center;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 97.9%;
  text-align: center;
  cursor: pointer;

  img {
    margin-right: 4px;
    width: 33px;
    height: 33px;
  }
`


export default Like;