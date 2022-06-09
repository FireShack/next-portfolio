import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import fofAv from "../components/images/fe0ae1a2-a4e3-4a37-bfbd-d1d9a7f785e8.png";

export default function custom404() {
  return (
    <>
      <Head>
        <title>Error|404</title>
        <meta name="description" content="" />
        <link rel="icon" href="/icons8-elemento-fuego-32.png" />
      </Head>
      <div className="d-flex align-items-center justify-content-center flex-column text-center page-404">
        <Image src={fofAv} alt="404 error" />
        <h1>Page Not Found | 404</h1>
        <Link href="/">
          <a className="btn btn-outline-primary">Go back home</a>
        </Link>
      </div>
    </>
  );
}
