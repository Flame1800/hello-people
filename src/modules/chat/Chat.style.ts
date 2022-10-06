import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const ChatWrapper = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  padding: 30px 20px;
  height: inherit;
  border-radius: 30px;
  box-shadow: ${theme.boxShadow.mainComponent};

  @media (max-width: 1424px) {
    height: 100vh;
  }

  .tabs {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 24px;
    margin-bottom: 24px;
  }

  .tabContent {
    display: flex;
    flex: 1 0 12.5%;
    margin: 0 4px;
  }

  .dialogs {
    width: 100%;
  }
`;
