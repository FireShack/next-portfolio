import { NextPage } from "next";
import Head from "next/head";
import { HomeComp } from "../components/home/HomeComp";

const Home: NextPage = () => {
  return (
    <>
      <div>
        <Head>
          <title>Franco Guardini</title>
          <meta name="description" content="" />
          <link rel="icon" href="/icons8-elemento-fuego-32.png" />
        </Head>
      </div>
      <HomeComp />
    </>
  );
};

export default Home;
