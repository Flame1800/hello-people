import React from 'react';
import styled from "styled-components";
import {tSFunctionType} from "@babel/types";
import {theme} from "../../../styles/theme";
import UserStore from "../../Stores/UserStore";
import UiStateStore from "../../Stores/UiStateStore";

type PropTypes = {
    value: number,
    active: boolean
}

const Like: React.FC<PropTypes> = ({value, active}) => {
    const {user} = UserStore

    const likeClick = () => {
        if (!user) {
            return UiStateStore.toggleAuthModal()
        }
        return null;
    }

    return (
        <Wrapper onClick={() => likeClick()}>
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
  text-align: center;
  cursor: pointer;
  margin-right: 10px;
  color: #585858;
  
  img {
    margin-right: 0px;
    width: 32px;
    height: 32px;
  }
`


export default Like;