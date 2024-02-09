"use client";
import Navbar from "@/app/Components/Navbar";
import Post from "@/app/Components/Post";
import "../../src/style/globals.css";
import Head from "next/head";

export default function Blog() {
  return (
    <>
      <Head>
        <title>Atalay Özyıldırım | Blog </title>
      </Head>
      <div>
        <div className="flex min-h-screen min-w-screen flex-col items-center article justify-between p-8">
          <div className="z-10 max-w-full w-full items-center justify-between font-mono text-sm  ">
            <Navbar />
          </div>
          <span className="text-8xl font-semibold w-full h-auto text-center relative">
            BLOG
          </span>
          <div className="relative w-full  h-full ">
            <div className="w-full h-full">
              <Post />
            </div>
          </div>
          <div className="font-semibold text-center mt-5 kadikoy">
            {String.fromCharCode(169)} Atalay Özyıldırım
          </div>
        </div>
      </div>
    </>
  );
}
