import styled from "styled-components";
import {theme} from "../../../styles/theme";

export const ChatWrapper = styled.div`
  background: #FFF;
  display: flex;
  flex-direction: column;
  padding: 10px;

  @media (max-width: 1424px) {
    height: 100vh;
  }

  .tabs {
    display: flex;
    margin-top: 15px;
    margin-bottom: 24px;
  }

  .dialogs {
    width: 100%;
  }

`