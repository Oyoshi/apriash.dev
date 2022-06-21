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
    max-height: 100%;
    display: flex;
    flex-direction: column;
  }

  h1, h2, h3 {
    font-weight: ${({ theme }) => theme.fontWeightBold};
    transition: 0.3s color ease-out;
  }

  p, a {
    font-weight: ${({ theme }) => theme.fontWeightReg};
    transition: 0.3s color ease-out;
  }
`;

export default GlobalStyle;
