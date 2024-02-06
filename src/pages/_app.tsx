import type { AppProps } from "next/app";
import NextAuthProvider from "@/app/NextAuth";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextAuthProvider>
      <Component {...pageProps} />
    </NextAuthProvider>
  );
}

export default MyApp;
