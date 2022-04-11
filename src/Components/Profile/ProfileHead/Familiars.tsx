import React from 'react';
import styled from "styled-components";

const Familiars = () => {
    return (
        <Wrapper>
            <div className="main-stat">
                <img src="/img/person-icon.svg" alt="Person"/>
                <div className="caption">
                    <strong>15 </strong>знакомых
                </div>
            </div>
            <div className="our-familiars">
                <strong>4 </strong>общих знакомых
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  margin-top: 20px;

  .main-stat {
    display: flex;
    align-items: center;

    .caption {
      font-weight: 700;
      font-size: 18px;
      color: #373737;
    }
  }

  .our-familiars {
    margin-top: 5px;
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    color: #FF7373;

  }
`

export default Familiars;