import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "../components/header";

export default function Home(): JSX.Element {
  return (
    <div className={styles.container}>
      <Head>
        <title>Invånarpoängen</title>
        <meta name="description" content="Invånarpoängen" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="h-screen">
        <Header />

        <div className="m-4 p-6 rounded bg-white">
          profile
        </div>


        <div className="m-4 p-6 rounded bg-white">
          activities
        </div>

      </main>
    </div>
  );
}
