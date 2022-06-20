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
  padding: ${({ theme }) => theme.spacings[3]}
    ${({ theme }) => theme.spacings[4]};
  width: ${({ theme }) => theme.maxWidth};
  @media only screen and (max-width: ${({ theme }) => theme.maxWidth}) {
    width: 90%;
  }
  margin: ${({ theme }) => theme.spacings[2]} auto;
  text-align: center;
  color: #ffffff;
  font-size: ${({ theme }) => theme.fontSizeMd};
  transition: 0.3s transform ease-out;

  :hover {
    transform: scale(1.05);
  }

  svg {
    position: relative;
    top: 0.15em;
  }
`;
