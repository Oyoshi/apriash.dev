import type { NextPage } from "next";
import Head from "next/head";
import Header from "components/header";
import LinksSection from "components/links-section";
import Footer from "components/footer";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Rafał Apriasz - Frontend Developer</title>
        <meta
          name="description"
          content="Personal Website inspired by LinkTree"
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <LinksSection />
      <Footer />
    </>
  );
};

export default Home;
