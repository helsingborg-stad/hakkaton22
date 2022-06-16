import React from "react";
import Head from "next/head";
import Header from "../components/header";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <div className="bg-green-background">
      <Head>
        <title>Invånarpoängen</title>
        <meta name="description" content="Invånarpoängen" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="h-screen">
        <Header />
        {children}
      </main>
    </div>
  );
}
