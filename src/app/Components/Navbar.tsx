"use client";
import Link from "next/link";
import { driver } from "driver.js";
import "driver.js/dist/driver.css";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const driverOne = () => {
    const driverObj = driver({
      popoverClass: "drivers-theme",
    });
    driverObj.highlight({
      element: ".x",
      popover: {
        title: "Benim çok yakışıklı olduğumu biliyor muydun?",
        description: "Kıskançlık yapma <3",
      },
    });
  };
  return (
    <div className="w-1/3 h-10 hover:border-2 flex justify-center items-center m-auto p-6 navbar  text-black  rounded-3xl transition-all ease-in-out duration-500 bg-transparent  hover:shadow-md hover:text-black md:m-auto sm:-auto">
      {pathname !== "/" ? (
        <Link href="/" className="">
          <span className="transition-all  ease-out text-lg cursor-pointer hover:pl-6 hover:pr-6 hover:bg-black hover:text-white hover:rounded-3xl  mr-5">
            Home
          </span>
        </Link>
      ) : (
        <span
          onClick={driverOne}
          className="transition-all  ease-out text-lg cursor-pointer hover:pl-6 hover:pr-6 hover:bg-black hover:text-white hover:rounded-3xl  mr-5"
        >
          Me
        </span>
      )}
      <Link href="/about">
        <span className="transition-all ease-out text-lg pl-6 pr-6 cursor-pointer active:bg-black hover:pl-5 hover:pr-5 hover:bg-black hover:text-white hover:rounded-3xl">
          About
        </span>
      </Link>

      <Link href="/blog">
        <span className="transition-all ease-out text-lg pl-6 pr-6 cursor-pointer  hover:pl-5 hover:pr-5 hover:bg-black hover:text-white hover:rounded-3xl  ">
          Blog
        </span>
      </Link>
    </div>
  );
}
