import Navbar from "@/app/Components/Navbar";
import Content from "@/app/Components/Content";
import "../../src/style/globals.css";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Atalay Özyıldırım</title>
      </Head>
      <main className="flex flex-col min-h-screen items-center   justify-between p-8">
        <div className="w-full h-auto relative flex justify-center font-mono">
          <Navbar />
        </div>
        <div className="relative w-full h-full justify-center flex margin-auto place-items-center ">
          <div className="w-full h-full">
            <Content />
          </div>
        </div>
        <div className="font-semibold text-center w">
          {String.fromCharCode(169)} Atalay Özyıldırım
        </div>
      </main>
    </>
  );
}
