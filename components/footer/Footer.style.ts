import styled from "styled-components";

export const SCFooter = styled.footer`
  margin: 0;
  padding: ${({ theme }) => theme.spacings[3]} 0
    ${({ theme }) => theme.spacings[0]} 0;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSizeSm};
`;
