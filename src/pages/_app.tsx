import { SessionProvider } from "next-auth/react";
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider>
        <p>dsadasdasaRQWRWQRWQRQWR</p>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;