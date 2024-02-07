import Navbar from "@/app/Components/Navbar";
import Content from "@/app/Components/Content";
import "../../src/style/globals.css";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Atalay Özyıldırım</title>
        <meta name="description" content="About || Hakımda" />
      </Head>
      <div className="w-full h-14  absolute z-10  top-8 font-mono">
        <Navbar />
      </div>
      <div className="min-h-screen  relative justify-center flex flex-col ">
        <main className="flex flex-col  items-center NEBILEYIMBISEYISTEAQ  justify-center p-8">
          <div className="relative w-full h-60 KADIKOYACIL  flex place-items-center ">
            <div className="w-full h-96">
              <Content />
            </div>
          </div>
        </main>
        <div className="font-semibold class-129210  absolute bottom-5 left-2  h-5 ">
          {String.fromCharCode(169)} Atalay Özyıldırım
        </div>
      </div>
    </>
  );
}
