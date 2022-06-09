import { NextPage } from "next";
import Head from "next/head";
import { AboutComp } from "../components/about/AboutComp";

const About: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Franco Guardini</title>
        <meta name="description" content="" />
      </Head>
      <AboutComp />
    </div>
  );
};

export default About;
