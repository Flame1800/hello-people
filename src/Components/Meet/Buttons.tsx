import React from 'react';
import styled from "styled-components";
import {Tooltip} from "@mui/material";

const Buttons = () => {
    return (
        <Wrapper>
            <Tooltip title="Улыбнуться этому человеку">
                <div className="btn btn-smile">
                    <img src="/img/smile-icon.svg" alt="smile"/>
                </div>
            </Tooltip>
            <Tooltip title="Сообщение">
                <div className="btn btn-messenger">
                    <img src="/img/message-blue-icon.svg" alt="smile"/>
                </div>
            </Tooltip>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  display: flex;

  .btn {
    width: 40px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .btn-smile {
    background: #FFCBCB;
    border-radius: 6px 0 0 6px;
  }

  .btn-messenger {
    background: #D9F1FF;
    border-radius: 0 6px 6px 0;
  }
`

export default Buttons;