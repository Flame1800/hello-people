import React from 'react';
import styled from "styled-components";
import {tSFunctionType} from "@babel/types";
import {theme} from "../../../styles/theme";

type PropTypes = {
    value: number,
    onClick: Function,
    active: boolean
}

const Like: React.FC<PropTypes> = ({value, onClick, active}) => {
    return (
        <Wrapper active={active} onClick={onClick}>
            <svg width="33" height="34" viewBox="0 0 33 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path clip-rule="evenodd"
                      d="M5.0542 14.3183C5.0542 10.6427 8.22269 7.8125 11.9418 7.8125C13.8589 7.8125 15.5459 8.72736 16.7564 9.91111C17.967 8.72736 19.6539 7.8125 21.5711 7.8125C25.2902 7.8125 28.4587 10.6427 28.4587 14.3183C28.4587 16.8362 27.4036 19.0504 25.9419 20.9221C24.4828 22.7905 22.5741 24.3763 20.7465 25.6648C20.0485 26.157 19.3423 26.611 18.696 26.9459C18.0892 27.2605 17.3914 27.5486 16.7564 27.5486C16.1215 27.5486 15.4237 27.2605 14.8168 26.9459C14.1706 26.611 13.4644 26.157 12.7664 25.6648C10.9388 24.3763 9.03011 22.7905 7.57094 20.9221C6.10925 19.0504 5.0542 16.8362 5.0542 14.3183ZM11.9418 9.85417C9.16102 9.85417 7.0603 11.9354 7.0603 14.3183C7.0603 16.2286 7.8571 18.0072 9.14141 19.6517C10.4282 21.2995 12.1597 22.7533 13.9088 23.9865C14.5706 24.4532 15.194 24.8502 15.7272 25.1266C16.2999 25.4234 16.6316 25.5069 16.7564 25.5069C16.8813 25.5069 17.213 25.4234 17.7856 25.1266C18.3189 24.8502 18.9423 24.4532 19.6041 23.9865C21.3532 22.7533 23.0846 21.2995 24.3715 19.6517C25.6558 18.0072 26.4526 16.2286 26.4526 14.3183C26.4526 11.9354 24.3519 9.85417 21.5711 9.85417C19.974 9.85417 18.4827 10.8252 17.5516 12.0577C17.3617 12.309 17.0679 12.4563 16.7564 12.4563C16.4449 12.4563 16.1511 12.309 15.9613 12.0577C15.0301 10.8252 13.5389 9.85417 11.9418 9.85417Z"
                      fill="#585858"/>
            </svg>

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

  svg {
    fill: ${({active}) => active ? theme.color.orange : "#585858"};
    margin-right: 4px;
  }
`


export default Like;