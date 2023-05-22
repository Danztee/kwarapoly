import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Kwarapoly</title>
        <meta
          name="description"
          content="Assignment  management system created by abubakar Qoreebullahi and kamaldeen sulyman"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
