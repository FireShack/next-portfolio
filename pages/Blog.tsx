import { NextPage } from "next";
import Head from "next/head";
import { BlogComp } from "../components/blog/BlogComp";

const Blog: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Franco Guardini</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BlogComp />
    </div>
  );
};

export default Blog;
