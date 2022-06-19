import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.primary};
    font-family: ${({ theme }) => theme.fontFamily};
  }
`;

export default GlobalStyle;
