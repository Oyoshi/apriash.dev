import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    height: 100vh;
    background-color: ${({ theme }) => theme.secondary};
    color: ${({ theme }) => theme.primary};
    font-family: ${({ theme }) => theme.fontFamily};
  }

  * {
    box-sizing: border-box;
  }

  #__next {
    height: 100%;
    min-height: 100%;
    height: 100%;
    min-height: 100%;
    display: flex;
    flex-direction: column;
  }
`;

export default GlobalStyle;
