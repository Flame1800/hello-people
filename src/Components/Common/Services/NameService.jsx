import React from "react";
import styled from "styled-components";
import { Tooltip } from "@mui/material";
import { theme } from "../../../../styles/theme";

const NameService = ({ name, category }) => {
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
    margin-bottom: 5px;
    cursor: pointer;
    transition: 0.2s;

    &:hover {
      color: ${theme.color.orange};
    }

    @media (min-width: 726px) {
      max-width: 310px;
      max-height: 40px;
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }

  .category {
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 97.9%;
    color: #949494;
    margin-bottom: 30px;
  }
`;

export default NameService;
