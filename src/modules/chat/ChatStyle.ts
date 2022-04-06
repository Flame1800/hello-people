import styled from "styled-components";
import {theme} from "../../../styles/theme";

export const ChatWrapper = styled.div`
  background: ${theme.color.background};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 0 20px;

  .tabs {
    max-width: 380px;
    display: flex;
    margin-top: 30px;
    margin-bottom: 24px;
  }
`

export const ChatTitle = styled.div`
  margin-top: 20px;
  margin-bottom: 10px;
  font-weight: 700;
  font-size: 24px;
  margin-left: 10px;
`