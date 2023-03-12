import "@/styles/globals.css";
import { Karla } from "@next/font/google";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import Head from "next/head";

const karla = Karla({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <div>
        <Head>
          <title>Théo FOURNIER</title>
          <meta property="og:title" content="Théo FOURNIER" key="title" />
        </Head>
        <style jsx global>{`
          html {
            font-family: ${karla.style.fontFamily};
          }
        `}</style>
        <ThemeProvider enableSystem={true} attribute="class">
          <Component {...pageProps} />
        </ThemeProvider>
      </div>
    </>
  );
}
