import { NextPage } from "next";
import Head from "next/head";
import { ProjectsComp } from "../components/projects/ProjectsComp";

const Projects: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Franco Guardini</title>
        <meta name="description" content="" />
        <link rel="icon" href="/icons8-elemento-fuego-32.png" />
      </Head>
      <ProjectsComp />
    </div>
  );
};

export default Projects;
