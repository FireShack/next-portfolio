import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import "../styles/styles.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "../context/state";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
