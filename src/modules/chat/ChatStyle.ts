import styled from "styled-components";
import {theme} from "../../../styles/theme";

export const ChatWrapper = styled.div`
  background: ${theme.color.background};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 20px;

  .tabs {
    display: flex;
    margin-top: 30px;
    margin-bottom: 24px;
  }

  .dialogs {
    display: flex;
    max-width: 600px;
  }


  @media (min-width: 1420px) {
    background: #fff !important;
    max-width: 330px;
    padding-top: 40px;
    position: fixed;
    right: 0;
    border-left: 1px solid #B1B1B1;
  }
`