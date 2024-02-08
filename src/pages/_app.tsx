import type { AppProps } from "next/app";
import NextAuthProvider from "@/app/NextAuth";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Atalay Özyıldırım r</title>
        <meta
          name="description"
          content="Atalay Özyıldırım - Experienced software developer specializing in web development with JavaScript, TypeScript, and React. Check out my portfolio to see my projects and experience. "
        />
        <meta name="author" content="Atalay Özyıldırım" />
        <meta
          name={"viewport"}
          content={"width=device-width, initial-scale=1"}
        />
        <meta name="robots" content="index, follow" />
        <meta name={"og:title"} content={"Atalay Özyıldırım"} />
        <meta
          name={"og:description"}
          content={
            "Atalay Özyıldırım - Experienced software developer specializing in web development with JavaScript, TypeScript, and React. Check out my portfolio to see my projects and experience."
          }
        />
        <meta name={"og:image"} content={"/atalay.png"} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@atalayozyildirim" />
        <meta name="twitter:creator" content="@atalayozyildirim" />
        <meta
          name="twitter:title"
          content="Atalay Özyıldırım | Jr. Software Developer"
        />
        <meta
          name="twitter:description"
          content="Atalay Özyıldırım - Experienced software developer specializing in web development with JavaScript, TypeScript, and React. Check out my portfolio to see my projects and experience. "
        />
        <meta name="twitter:image" content="/atalay.png" />
      </Head>
      <NextAuthProvider>
        <Component {...pageProps} />
      </NextAuthProvider>
    </>
  );
}

export default MyApp;
