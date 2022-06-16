import "../styles/globals.css";
import type { AppProps } from "next/app";
import PointsProgramProvider from "../services/pointsProgram/pointsProgram";
import jsonBackend from "../services/pointsProgram/jsonBackend";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PointsProgramProvider provider={jsonBackend}>
      <Component {...pageProps} />
    </PointsProgramProvider>
  );
}

export default MyApp;
