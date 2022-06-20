import styled from "styled-components";

export const SCHeader = styled.header`
  margin: 0 auto;
  margin-top: 3em;
  @media only screen and (max-width: ${({ theme }) => theme.maxWidth}) {
    width: 90%;
  }
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  h1 {
    margin: 0;
    font-size: ${({ theme }) => theme.fontSizeLg};
  }

  p {
    margin: 0;
    font-size: ${({ theme }) => theme.fontSizeMd};
  }

  .text {
    margin: 2em 0;
  }

  .image {
    border-radius: 50%;
  }
`;
