import styled from "styled-components";

export const MessageFeedStyle = styled.div`
  width: 100%;
  height: 100vh;
  background: #fff;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;

  .messages {
    max-height: 100%;
    padding-top: 30px;
    padding-bottom: 60px;
    overflow: scroll;
  }

`