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
      <div className="min-h-screen  relative justify-between NEBILEYIMBISEYISTEAQ flex flex-col ">
        <div className="w-full h-6  relative z-10 moda top-8 font-mono">
          <Navbar />
        </div>
        <div className="flex flex-col relative m-auto elf">
          <main className="flex flex-col  items-center   justify-center p-8">
            <div className="relative w-full h-60 KADIKOYACIL  flex place-items-center ">
              <div className="w-full h-96">
                <Content />
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
