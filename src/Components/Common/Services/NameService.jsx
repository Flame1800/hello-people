import React from 'react';
import styled from "styled-components";

const NameService = ({name, category}) => {
    return (
        <Wrapper>
            <div className="name">{name}</div>
            {category && <div className="category">{category}</div>}
        </Wrapper>
    );
};

const Wrapper = styled.div`
  .name {
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 15px;
  }

  .category {
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 97.9%;
    color: #949494;
    margin-bottom: 30px;
  }
`

export default NameService;