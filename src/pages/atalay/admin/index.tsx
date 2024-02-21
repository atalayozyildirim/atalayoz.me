"use client";
import { useState, useRef } from "react";
import { useSession } from "next-auth/react";
import Navbar from "@/app/Components/Navbar";
import Cookies from "js-cookie";
import Image from "next/image";
import Head from "next/head";
import "../../../style/globals.css";
import NextAuthProvider from "@/app/NextAuth";

export default function About() {
  const [toogle, setToogle] = useState(false);
  const [input, setInput] = useState("");
  const [content, setContent] = useState("");

  const inputRef = useRef(null);
  const textRef = useRef(null);

  const { data: session, status } = useSession();

  const token = Cookies.get("next-auth.session-token");

  const createBlog = () => {
    toogle ? setToogle(false) : setToogle(true);
  };

  const sendRequest = async () => {
    const res = await fetch("/api/blog/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        token: "`Bearer ${token}",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST",
      },
      cache: "force-cache",
      body: JSON.stringify({
        title: input,
        content: content,
        author: session?.user?.name,
        token: token,
      }),
    });
    setContent("");
    setInput("");
    let a: any = inputRef.current;
    let b: any = textRef.current;
    a.value = "";
    b.value = "";
  };
  return (
    <>
      <NextAuthProvider>
        <Head>
          <title>Atalay Özyıldırım</title>
        </Head>
        <div className="2xl">
          <div className="min-h-screen min-w-screen  p-8 ">
            <div className="z-10 max-w-full w-full items-center justify-between font-mono text-sm  ">
              <Navbar />
            </div>
            <div className="flex flex-row  relative h-full w-full   ">
              <div
                className={
                  "w-16 h-52 border-2 justify-between flex m-4 rounded-3xl flex-col shadow-md fixed"
                }
              >
                <ul
                  className={
                    "flex items-center justify-center relative cursor-pointer top-5 flex-col"
                  }
                >
                  <li>
                    <Image
                      src="/a.png"
                      width={50}
                      height={50}
                      alt="photo of atalay"
                      loading="lazy"
                      className="drop-shadow-mg rounded-full p x"
                    />
                  </li>
                  <li className={"mt-5"} onClick={createBlog}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6"
                    >
                      <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32L19.513 8.2Z" />
                    </svg>
                  </li>
                  <li className={"mt-5"}>
                    <a href={"/api/auth/signin"} title="Sign In">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25"
                        />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col w-1/2 h-full flex-grow break-all m-auto  pt-5">
              {toogle ? (
                status === "unauthenticated" ? (
                  <div>
                    <div
                      id="alert-border-2"
                      className="flex items-center rounded-full p-4 mb-4 text-red-800 border-t-4 border-red-300 bg-red-50 dark:text-red-400 dark:bg-gray-800 dark:border-red-800"
                      role="alert"
                    >
                      <svg
                        className="flex-shrink-0 w-4 h-4"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                      </svg>
                      <div className="ms-3 text-sm font-medium">
                        {"Blog oluşturmak için "}
                        <a
                          href="/api/auth/signin"
                          className="font-semibold underline hover:no-underline"
                        >
                          {"Giriş yap !"}
                        </a>
                      </div>
                      <button
                        type="button"
                        className="ms-auto -mx-1.5 -my-1.5 bg-red-50 text-red-500 rounded-lg focus:ring-2 focus:ring-red-400 p-1.5 hover:bg-red-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-red-400 dark:hover:bg-gray-700"
                        data-dismiss-target="#alert-border-2"
                        aria-label="Close"
                      >
                        <span className="sr-only">Dismiss</span>
                        <svg
                          className="w-3 h-3"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 14 14"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="flex max-w-md flex-col relative top-12 font-mono gap-4 drop-shadow-md">
                    <div>
                      <div className="mb-2 block text-2xl font-bold">Title</div>
                      <input
                        ref={inputRef}
                        id="small"
                        type="text"
                        className="w-full  bg-transparent input text-black placeholder-black outline-none focus:border-b-2 focus:border-black transition-all ease-in-out  p-2"
                        placeholder="Title..."
                        onChange={(e) => setInput(e.target.value)}
                      />
                    </div>
                    <div>
                      <div className="mb-2 block font-bold text-2xl">
                        Content
                      </div>
                      <textarea
                        ref={textRef}
                        id="comment"
                        placeholder="Leave a comment..."
                        className="h-96 w-full outline-none rounded-xl placeholder-black bg-transparent text-black  p-2 resize-none"
                        onChange={(e) => setContent(e.target.value)}
                      />
                    </div>
                    <div className="absolute right-32 w-full h-full -z-10 ">
                      <div
                        onClick={sendRequest}
                        className="bg-black  p-5 flex w-16 align-middle cursor-pointer hover:rotate-12 transition-all ease-out rounded-full"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="white"
                          className="w-6 h-6 "
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                )
              ) : null}
            </div>
            <div className="font-semibold  fixed bottom-3  mt-5 kadikoy">
              {String.fromCharCode(169)} Atalay Özyıldırım
            </div>
          </div>
        </div>
      </NextAuthProvider>
    </>
  );
}
