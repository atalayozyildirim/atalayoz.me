import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../style/globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Atalay Özyıldırım",
  description:
    "Atalay Özyıldırım - Experienced software developer specializing in web development with JavaScript, TypeScript, and React. Check out my portfolio to see my projects and experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en w-full h-full">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name=" robots" content=" index, follow" />
        <meta name="author" content="Atalay Özyıldırım" />
        <meta property={"og:title"} content={"Atalay Ozyildirim"} />
        <meta
          property={"og:description"}
          content={
            "Atalay Özyıldırım - Experienced software developer specializing in web development with JavaScript, TypeScript, and React. Check out my portfolio to see my projects and experience."
          }
        />
        <meta property="og:url" content="https://atalayoz.me" />
        <meta property={"og:type"} content={"website"} />
        <meta property="og:image" content="/atalay.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@atalayozyildirim" />
        <meta name="twitter:creator" content="@atalayozyildirim" />
        <meta name="twitter:title" content="Atalay Ozyildirim" />
        <meta
          name="twitter:description"
          content="Atalay Özyıldırım - Experienced software developer specializing in web development with JavaScript, TypeScript, and React. Check out my portfolio to see my projects and experience."
        />
        <meta name="twitter:image" content="/atalay.png" />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-KHT779778H"
        ></script>
        <script id="google_tag">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-KHT779778H');
          `}
        </script>
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
