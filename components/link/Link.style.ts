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
  width: 30em;
  margin: 0.75em auto;
  text-align: center;
  color: ${({ theme }) => theme.primary};
  font-size: 18px;
  transition: 0.3s all ease-out;

  :hover {
    transform: scale(1.05);
  }

  svg {
    position: relative;
    top: 0.15em;
  }
`;
