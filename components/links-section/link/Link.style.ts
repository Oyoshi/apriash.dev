import styled from "styled-components";

export const SCLink = styled.a`
  display: block;
  cursor: pointer;
  text-decoration: none;
  background: ${({ theme }) => theme.gradient[0]};
  background: linear-gradient(
    114deg
      ${({ theme }) =>
        theme.gradient.map(
          (color: string, idx: number) => `,${color} ${idx * 50}%`
        )}
  );
  border-radius: 8px;
  padding: 1em 2em;
  width: ${({ theme }) => theme.maxWidth};
  @media only screen and (max-width: ${({ theme }) => theme.maxWidth}) {
    width: 90%;
  }
  margin: 0.75em auto;
  text-align: center;
  color: ${({ theme }) => theme.primary};
  font-size: ${({ theme }) => theme.fontSizeMd};
  transition: 0.3s all ease-out;

  :hover {
    transform: scale(1.05);
  }

  svg {
    position: relative;
    top: 0.15em;
  }
`;
