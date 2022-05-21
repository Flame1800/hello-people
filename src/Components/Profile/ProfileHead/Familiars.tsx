import React from 'react';
import styled from "styled-components";

const Familiars = () => {
    return (
        <Wrapper>
            <div className="main-stat">
                <img src="/img/person-icon.svg" alt="Person"/>
                <div className="caption">
                    0 знакомых
                </div>
            </div>
            <div className="our-familiars">
                &bull; 0 общих
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  img {
    width: 20px;
    height: 20px;
  }

  .main-stat {
    display: flex;
    align-items: center;

    .caption {
      font-weight: 700;
      font-size: 15px;
      color: #373737;
      white-space: nowrap;
    }
  }

  .our-familiars {
    font-weight: 600;
    font-size: 15px;
    color: #FF7373;
    margin-left: 10px;
    white-space: nowrap;
  }
`

export default Familiars;