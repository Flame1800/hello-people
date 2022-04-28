import styled from "styled-components";
import {theme} from "../../../styles/theme";

export const ChatWrapper = styled.div`
  background: ${theme.color.background};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 10px 20px;

  .tabs {
    display: flex;
    margin-top: 30px;
    margin-bottom: 24px;
  }

  .dialogs {
    width: 100%;
  }


  @media (min-width: 1420px) {
    background: #fff !important;
    max-width: 330px;
    position: fixed;
    right: 0;
    top: 70px;
    border-left: 1px solid #B1B1B1;
  }
`