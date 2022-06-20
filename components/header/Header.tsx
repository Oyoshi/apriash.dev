import styled from "styled-components";

const Header = styled.header`
  max-width: 660px;
  margin: 0 auto;
  margin-top: 3em;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  h1 {
    margin: 1em 0 0.5em 0;
    font-size: 3em;
  }

  p {
    margin: 0;
    font-size: 1.2em;
  }

  .image {
    border-radius: 50%;
  }
`;

export default Header;
