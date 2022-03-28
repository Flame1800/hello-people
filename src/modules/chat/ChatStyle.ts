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