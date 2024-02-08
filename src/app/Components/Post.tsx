import Card from "./Card";
import { useState, useEffect } from "react";
import Loading from "@/app/Components/Loading.";
export default function Post() {
  const [data, setData] = useState([]) as any[];
  const [loading, setLoading] = useState(true) as [
    boolean,
    (loading: boolean) => void,
  ];
  const asyncData = async () => {
    const res = await fetch("/api/blog");
    const data = await res.json();
    setData(data.data.rows ?? []);
    setLoading(false);
  };

  useEffect(() => {
    asyncData();
  }, []);
  return (
    <>
      <div className="relative">
        <div className="flex flex-row  ceren">
          {loading ? (
            <Loading />
          ) : (
            data.map((item: any, index: any) => {
              return (
                <Card
                  title={item.title}
                  image={"/nft.jpg"}
                  description={item.content}
                  key={index}
                  link={`/blog/${item.id}`}
                />
              );
            })
          )}
        </div>
      </div>
    </>
  );
}
