import Content from "./Components/Content";
import Navbar from "./Components/Navbar";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <div className="flex min-h-screen min-w-screen flex-col items-center  justify-between p-8  ">
        <div className="z-10 max-w-full w-full items-center justify-between font-mono text-sm  ">
          <Navbar />
        </div>
        <div className="relative grid grid-cols-10 place-items-center ">
          <div className="col-start-5 col-end-8">
            <Content />
          </div>
        </div>
        <div className="font-semibold text-center w-full kadikoy">
          {String.fromCharCode(169)} Atalay Özyıldırım
        </div>
      </div>
    </>
  );
}
