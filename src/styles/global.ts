import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    height: 100vh;
    width: 100%;
    background-color: ${props => props.theme["gray-600"]};
    color: ${props => props.theme["gray-300"]};
  }
`;
