import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    box-sizing: border-box;
    font-family: "Nunito", sans-serif;
  }
  
  
  a {
    color: inherit;
    text-decoration: none !important;
    height: fit-content;

    &:hover {
      text-decoration: underline;
    }
  }
`;
