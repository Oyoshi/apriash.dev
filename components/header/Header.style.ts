import styled from "styled-components";

export const SCHeader = styled.header`
  margin: 0 auto;
  margin-top: ${({ theme }) => theme.spacings[5]};
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
    margin: ${({ theme }) => theme.spacings[2]} 0;
    font-size: ${({ theme }) => theme.fontSizeMd};
  }

  .text {
    margin: ${({ theme }) => theme.spacings[4]} 0;
  }

  .image {
    border-radius: 50%;
    cursor: pointer;
  }

  .images {
    height: 150px;
    width: 100%;
    position: relative;
  }

  .image-wrapper {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    z-index: 100;
  }

  .show {
    opacity: 1;
    transition: 0.3s opacity ease-out;
  }

  .hide {
    opacity: 0;
    transition: 0.3s opacity ease-out;
  }
`;
