import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import "../styles/styles.css";
import type { AppProps } from "next/app";
import { ContextProvider } from "../context/state";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ContextProvider>
      <Component {...pageProps} />;
    </ContextProvider>
  );
}

export default MyApp;
