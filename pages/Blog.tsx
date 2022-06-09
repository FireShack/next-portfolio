import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import Head from "next/head";
import Image from "next/image";
import { BlogComp } from "../components/blog/BlogComp";
import workingAv from "../components/images/casual-life-3d-young-man-holding-chin-and-taking-notes-in-notebook.png";

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(
    "https://http-server-template.herokuapp.com/api/users",
    {
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MjY1NTZmNTFhYmMyNzg3ODJlOTc4ODYiLCJpYXQiOjE2NTQ2MTU1MTUsImV4cCI6MTY1NDYxOTExNX0.zJ1Y1pGzqsqfF2D46s5xGlhWzEyT3n9t1j5lNTpRks0",
      },
      // body: JSON.stringify({
      //   mail: "fireShack.Lucca@fireSales.com",
      //   pass: "Palmeradeoro7",
      // }),
    }
  );
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};

interface dataInterface {
  name: string;
  google: boolean;
  img: string;
  mail: string;
  role: string;
  state: boolean;
  uid: string;
}

const Blog: NextPage = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <div>
      <Head>
        <title>Franco Guardini</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BlogComp />
      <div className="row text-center mt-4">
        {/* {data.allUsers !== undefined ? (
          data.allUsers.map((user: dataInterface) => {
            return (
              <div key={user.uid}>
                <h6>{user.mail}</h6>
              </div>
            );
          })
        ) : (
        <h4>Your account expired</h4>
        )} */}
        <div className="col-6">
          <Image src={workingAv} alt="working on" />
        </div>
        <div className="col-6 d-flex align-items-center text-primary">
          <h3>Working on...</h3>
        </div>
      </div>
    </div>
  );
};

export default Blog;
