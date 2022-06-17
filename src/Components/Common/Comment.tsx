import React from 'react';
import styled from "styled-components";
import {tSFunctionType} from "@babel/types";
import {theme} from "../../../styles/theme";

type PropTypes = {
    value: number,
}

const Like: React.FC<PropTypes> = ({value}) => {
    return (
        <Wrapper>
            <svg width="32" height="32" viewBox="0 0 33 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                      d="M6.84847 21.4971C3.84218 13.9872 9.27082 5.77051 17.2388 5.77051H17.6687C23.6276 5.77051 28.4583 10.6869 28.4583 16.7515C28.4583 23.5037 23.0799 28.9775 16.4453 28.9775H5.9865C5.56087 28.9775 5.18158 28.7041 5.04031 28.2954C4.89904 27.8868 5.02657 27.4319 5.35843 27.1607L7.9951 25.0057C8.11039 24.9114 8.15117 24.7513 8.09538 24.612L6.84847 21.4971ZM17.2388 7.81217C10.6955 7.81217 6.23755 14.5597 8.70631 20.7268L9.95321 23.8416C10.3437 24.8172 10.0583 25.9379 9.25124 26.5975L8.83739 26.9358H16.4453C21.972 26.9358 26.4522 22.3761 26.4522 16.7515C26.4522 11.8144 22.5197 7.81217 17.6687 7.81217H17.2388Z"
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
  color: #585858;

  svg {
    fill: #585858;
    margin-right: 4px;
  }
`


export default Like;