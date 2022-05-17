import { NextPage } from "next";
import Head from "next/head";
import { AboutComp } from "../components/about/AboutComp";

const About: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Franco Guardini</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AboutComp />
    </div>
  );
};

export default About;
