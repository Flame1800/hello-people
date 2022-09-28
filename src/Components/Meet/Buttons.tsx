import React from "react";
import styled from "styled-components";
import { Tooltip } from "@mui/material";

const Buttons = () => {
  return (
    <Wrapper>
      <div className="btn btn-messenger">
        чат
        <img src="/img/message-blue-icon.svg" alt="smile" />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;

  .btn {
    width: 100px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  .btn-smile {
    background: #ffcbcb;
    border-radius: 6px 0 0 6px;
  }

  .btn-messenger {
    background: #d9f1ff;
    color: #005480;
    border-radius: 6px;
    font-size: 18px;

    img {
      margin-left: 6px;
    }
  }
`;

export default Buttons;
