import Image from "next/image";

export default function Cv() {
  return (
    <div className="relative 2xl:w-[680px] xl:w-[680px] lg:w-[680px]   _ResponsiveCard bg-[#12181f] rounded-xl h-96  top-5 -left-5 flex flex-col  font-semibold tracking-tight">
      <div className="absolute ezhel">
        <div className="dot flex flex-row relative summer left-4 top-1  ">
          <span className="dot-1"></span>
          <span className="dot-1"></span>
          <span className="dot-1"></span>
        </div>
        <div className="flex flex-row selam ce  w-full">
          <div className="sidebar w-[100px]  h-8 bg-[#20262e] relative left-5 top-2 p-2 rounded-md flex flex-row margin-2 place-content-center items-center text-white align-middle text-center">
            <Image
              src="/musk.png"
              width={25}
              height={25}
              alt=""
              loading="lazy"
              className="object-contain align-middle"
            />
            <span className="">index.js</span>
          </div>
          <div className="sidebar w-[100px] h-8 bg-[#20262e] relative left-5 ml-2 top-2 p-2 rounded-md flex flex-row margin-2 place-content-center items-center text-white align-middle text-center">
            <Image
              src="/react.svg"
              width={25}
              height={25}
              alt=""
              loading="lazy"
              className="object-contain align-middle"
            />
            <span className="">index.jsx</span>
          </div>
          <div className="sidebar w-[100px] h-8 bg-[#20262e] relative left-5 ml-2 top-2 p-2 rounded-md flex flex-row margin-2 place-content-center items-center text-white align-middle text-center">
            <Image
              src="/typescript.svg"
              width={25}
              height={25}
              alt=""
              loading="lazy"
              className="object-contain align-middle"
            />
            <span className="relative left-1">index.ts</span>
          </div>
          <div className="sidebar w-[100px] h-8 bg-[#20262e] relative left-5 ml-2 top-2 p-2 rounded-md flex flex-row margin-2 place-content-center items-center text-white align-middle text-center">
            <Image
              src="/nodejs.svg"
              width={25}
              height={25}
              alt=""
              loading="lazy"
              className="object-contain align-middle"
            />
            <span className="relative left-1">index.js</span>
          </div>
          <div className="sidebar w-[100px] h-8 bg-[#20262e] relative left-5 ml-2 top-2 p-2 rounded-md flex flex-row margin-2 place-content-center items-center text-white align-middle text-center">
            <Image
              src="/sql.svg"
              width={25}
              height={25}
              alt=""
              loading="lazy"
              className="object-contain align-middle"
            />
            <span className="relative left-1">user.sql</span>
          </div>
        </div>
        <div className="Number text-[#494c4f]  _Code flex flex-col summer font-mono relative left-4 top-5 list-image-none">
          <ul className="atalay flex-grow">
            <li>
              <span>1</span>
              <span className="relative left-4 w-full text-[#70a8e8]">
                Merhaba! Ben Atlalay Özyıldırım, 22 yaşındayım ve İstanbul da
                yaşıyorum.
              </span>
            </li>
            <li className="">
              <span>2</span>
              <span className="relative left-4 top-2 text-white">
                İstanbul da Beykent Üniversitesinde Bilgisayar Programcılığı
                okuyorum.
              </span>
            </li>
            <li>
              <span>3</span>
              <span className="relative left-4 top-2 text-white">
                6 yıldır yazılım dünyasında aktif olarak yer alıyorum
              </span>
            </li>
            <li>
              <span>4</span>
              <span className="relative left-4 text-white">
                ve çeşitli projelerde deneyim kazandım.
              </span>
            </li>
            <li>
              <span>5</span>
              <span className="relative left-4 border-b-2  text-[#70a8e8]">
                Yeteneklerim
              </span>
            </li>
            <li>
              <span>7</span>
              <span className="relative left-4 border-b-2 text-[#ffffff]">
                Javascript, NodeJS, ReactJS, NextJS, React Native, Typescript,
                HTML5, SQL
              </span>
            </li>
            <li>
              <span>8</span>
              <span className="relative left-4 border-b-2 top-2 text-[#70a8e8]">
                Dil
              </span>
            </li>
            <li>
              <span>9</span>
              <span className="relative left-4 top-2 text-white m">
                Türkçe (Ana dil)
              </span>
            </li>
            <li>
              <span>10</span>
              <span className="relative left-4  top-2 text-white">
                İngilizce (Orta seviye)
              </span>
            </li>
          </ul>
        </div>
        <div className="phone hidden">
          <div className="Number text-black font-mono _Code flex flex-col relative  top-8 list-image-none">
            <ul className="atalay flex-grow overflow-hidden h-full ">
              <li>
                <span className="relative  w-full  ">
                  Merhaba! Ben Atlalay Özyıldırım, 22 yaşındayım ve İstanbul da{" "}
                  yaşıyorum.
                </span>
              </li>
              <li className="">
                <span className="relative  top-2 ">
                  İstanbul da Beykent Üniversitesinde Bilgisayar Programcılığı
                  okuyorum.
                </span>
              </li>
              <li>
                <span className="relative top-2 ">
                  6 yıldır yazılım dünyasında aktif olarak yer alıyorum
                </span>
              </li>
              <li>
                <span className="relative  ">
                  ve çeşitli projelerde deneyim kazandım.
                </span>
              </li>
              <li>
                <br className="hidden br_1"></br>
                <span className="relative border-b-2 border-black ">
                  Yeteneklerim
                </span>
              </li>
              <li>
                <span className="relative">
                  Javascript, NodeJS, ReactJS, NextJS, React Native, Typescript,
                  HTML5, SQL
                </span>
              </li>
              <li>
                <span className="relative border-b-2 top-2 border-black ">
                  Dil
                </span>
              </li>
              <li>
                <span className="relative top-2  m">{"Türkçe (Ana dil)"}</span>
              </li>
              <li>
                <span className="relative">
                  {"İngilizce (Profesyonel çalışma yetkinliği)   "}
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="Text "></div>
      </div>
    </div>
  );
}
