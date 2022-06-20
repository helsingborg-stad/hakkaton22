import "../styles/globals.css";
import type { AppProps } from "next/app";
import PointsProgramProvider from "../services/pointsProgram/PointsProgramProvider";
import { localPointsProgram } from "../services/pointsProgram/local/localPointsProgram";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PointsProgramProvider pointsProgram={localPointsProgram()}>
      <Component {...pageProps} />
    </PointsProgramProvider>
  );
}

export default MyApp;
