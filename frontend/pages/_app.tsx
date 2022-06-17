import "../styles/globals.css";
import type { AppProps } from "next/app";
import PointsProgramProvider from "../services/pointsProgram/pointsProgram";
import graphqlBackend from "../services/pointsProgram/graphqlBackend";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PointsProgramProvider provider={graphqlBackend}>
      <Component {...pageProps} />
    </PointsProgramProvider>
  );
}

export default MyApp;
