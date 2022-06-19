import type { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";

const SCPageContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;

const SCHeader = styled.header`
  padding-top: 1.5em;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    margin: 1em 0;
  }

  .image {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: rgb(236, 153, 119);
    background: linear-gradient(
      114deg,
      rgba(236, 153, 119, 1) 0%,
      rgba(204, 100, 117, 1) 50%,
      rgba(76, 40, 110, 1) 100%
    );
  }
`;

const SCLinksButtonSection = styled.section`
  margin: 1em auto;

  .link {
    display: block;
    cursor: pointer;
    background: rgb(236, 153, 119);
    background: linear-gradient(
      114deg,
      rgba(236, 153, 119, 1) 0%,
      rgba(204, 100, 117, 1) 50%,
      rgba(76, 40, 110, 1) 100%
    );
    border-radius: 8px;
    padding: 1em 2em;
    width: 30em;
    margin: 0.75em auto;
    text-align: center;
    color: #fff;
    font-size: 18px;
    transition: 0.3s all ease-out;

    :hover {
      transform: scale(1.05);
    }
  }
`;

const SCSocialLinksSection = styled.section`
  margin: 2em auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  .image {
    display: inline-block;
    margin: 0 2em;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: rgb(236, 153, 119);
    background: linear-gradient(
      114deg,
      rgba(236, 153, 119, 1) 0%,
      rgba(204, 100, 117, 1) 50%,
      rgba(76, 40, 110, 1) 100%
    );
  }
`;

const SCFooter = styled.footer`
  display: flex;
  flex: 1;
  padding: 2rem 0;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  width: 100vw;
`;

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <SCPageContainer>
        <SCHeader>
          <div className="image" />
          <h1>Rafał Apriasz</h1>
        </SCHeader>
        <SCLinksButtonSection>
          <a className="link">My Website 1</a>
          <a className="link">My Blog</a>
          <a className="link">My Website 2</a>
        </SCLinksButtonSection>
        <SCSocialLinksSection>
          <div className="image" />
          <div className="image" />
          <div className="image" />
        </SCSocialLinksSection>
        <SCFooter>
          <p>© Copyright 2022</p>
        </SCFooter>
      </SCPageContainer>
    </>
  );
};

export default Home;
