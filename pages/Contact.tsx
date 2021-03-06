import { NextPage } from "next";
import Head from "next/head";
import { ContactComp } from "../components/contact/ContactComp";

const Contact: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Franco Guardini</title>
        <meta name="description" content="" />
        <link rel="icon" href="/icons8-elemento-fuego-32.png" />
      </Head>
      <ContactComp />
    </div>
  );
};

export default Contact;
