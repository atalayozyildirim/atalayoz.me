import { useEffect, useState } from "react";
import Navbar from "@/app/Components/Navbar";
import Head from "next/head";
import "../../style/globals.css";
import Loading from "@/app/Components/Loading.";
import { useRouter } from "next/router";

export default function About(props: { title: string; description: string }) {
  const [data, setData] = useState([]) as any[];
  const [loading, setLoading] = useState(true) as [
    boolean,
    (loading: boolean) => void,
  ];

  const router = useRouter();

  const { blog } = router.query;

  const dataProcsess = async () => {
    const response = await fetch(`/api/blog?id=${blog}`, {
      method: "GET",
      headers: { "Content-Type": "application/json", cache: "force-cache" },
    });

    const data = await response.json();

    if (!data || !data.data || !data.data.rows) {
      console.log("Unexpected data structure.");
      return;
    }
    const c = data.data.rows;

    setData(c);
    setLoading(false);
  };

  useEffect(() => {
    dataProcsess();
  }, [blog, dataProcsess]);

  return (
    <>
      <Head>
        <title>Atalay Özyıldırım</title>
        <meta name="description" content={props.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="2xl">
        <div className="min-h-screen min-w-screen  p-8 ">
          <div className="z-10 max-w-full w-full items-center justify-between font-mono text-sm  ">
            <Navbar />
          </div>
          <div className="flex flex-col w-1/2 sm-text h-full flex-grow break-all m-auto pt-5">
            {loading ? (
              <Loading />
            ) : (
              data.map((item: any, index: number) => (
                <div key={index}>
                  <span className="text-4xl font-bold">{item.title}</span>
                  <div className="relative">
                    <div className="w-full h-full pt-8 ">
                      {item.content
                        .split("\n")
                        .map((line: string, i: number) => {
                          const match = line.match(/^(\d+)(.+)/);
                          if (match) {
                            return (
                              <p key={i} className="text-justify font-mono">
                                <div className={"font-bold"}>
                                  {match[1]}
                                  {match[2]}
                                </div>
                              </p>
                            );
                          } else {
                            return (
                              <p key={i} className="text-justify">
                                {line}
                              </p>
                            );
                          }
                        })}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
          <div className="font-semibold  fixed bottom-3  mt-5 kadikoy">
            {String.fromCharCode(169)} {"Atalay Özyıldırım"}
          </div>
        </div>
      </div>
    </>
  );
}
