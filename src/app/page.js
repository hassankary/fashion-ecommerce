import Image from "next/image";
import Link from "next/link";
import React from "react";
import Header from "../components/header/header";
// import background from "../../public/images/sustainabilitybg.svg";
import Footer from "../components/footer/footer";

export default function Home() {
  const mockModiweek = [
    { src: "images/modiweek1.svg", alt: "modiweek pict 1", title: "Sunday", display: "flex-col"},
    { src: "images/modiweek2.svg", alt: "modiweek pict 2", title: "Monday", display: "flex-col"},
    { src: "images/modiweek3.svg", alt: "modiweek pict 3", title: "Tuesday", display: "hidden sm:flex sm:flex-col"},
    { src: "images/modiweek4.svg", alt: "modiweek pict 4", title: "Wednesday", display: "hidden lg:flex lg:flex-col"},
  ];

  return (
    <>
      <title>Modimal</title>
      <Header />
      <div className="mt-[110px]">
        <div className="w-full hidden sm:flex">
          <Image
            className="w-full"
            src="images/hero.svg"
            width={1440}
            height={600}
            alt="home image"
          />
        </div>
        <div className="w-full sm:hidden">
          <Image
            className="w-full"
            src="images/heromobile.svg"
            width={361}
            height={544}
            alt="home image"
          />
        </div>
      </div>
      {/* === Best Seller === */}
      <div className="w-full bg-white px-5 py-5 xl:px-[108px] xl:py-[88px] text-black">
        <div className="flex justify-between">
          <div className="text-xl text-[32px] font-bold mb-6">Best Sellers</div>
          <div className="hidden md:flex">
            <Link href="/detail">View All</Link>
          </div>
        </div>
        <div className="flex justify-between space-x-4 lg:space-x-6">
          <div className="flex-col">
            <Link href="/detail">
              <div className="hover:opacity-[70%] transition-opacity w-full">
                <Image
                  src="images/card-1.svg"
                  width={392}
                  height={438}
                  alt="pict1"
                />
              </div>
              <div className="ml-2">
                <div className="font-bold">Tailored Strecth</div>
                <div className="flex justify-between">
                  <p>Turn It Up Pants</p>
                  <p className="mr-2 font-bold">$180</p>
                </div>
                <div>
                  <Image
                    src="images/cardsc-1.svg"
                    height={24}
                    width={189}
                    alt="icon-color"
                  />
                </div>
              </div>
            </Link>
          </div>
          <div className="flex-col">
            <Link href="/detail">
              <div className="hover:opacity-[70%] transition-opacity w-full">
                <Image
                  src="images/card-2.svg"
                  width={392}
                  height={438}
                  alt="pict1"
                />
              </div>
              <div className="ml-2">
                <div className="font-bold">Technical Silk</div>
                <div className="flex justify-between">
                  <p>Make A Splash</p>
                  <p className="mr-2 font-bold">$120</p>
                </div>
                <div>
                  <Image
                    src="images/cardsc-2.svg"
                    height={24}
                    width={189}
                    alt="icon-color"
                  />
                </div>
              </div>
            </Link>
          </div>
          <div className="flex-col hidden md:flex md:flex-col ">
            <Link href="/detail">
              <div className="hover:opacity-[70%] transition-opacity w-full">
                <Image
                  src="images/card-3.svg"
                  width={392}
                  height={438}
                  alt="pict1"
                />
              </div>
              <div className="ml-2">
                <div className="font-bold">Cool Weave</div>
                <div className="flex justify-between">
                  <p>Anywhere Dress</p>
                  <p className="mr-2 font-bold">$210</p>
                </div>
                <div>
                  <Image
                    src="images/cardsc-3.svg"
                    height={24}
                    width={189}
                    alt="icon-color"
                  />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* =============================================== Collection =================================================== */}
      <div className="w-full bg-white px-5 py-5 xl:px-[108px] xl:py-[88px] text-black">
        <div className="flex-col bg-white">
          <div className="text-xl text-[32px] font-bold mb-6">Collection</div>
          <div className="hidden md:flex justify-between">
            <div className="flex-col w-[49%] ">
              <Link href={"/detail"}>
                <Image
                  className="hover:scale-[105%]"
                  src="images/collection1.svg"
                  height={518}
                  width={600}
                  alt="collection 1"
                />
              </Link>
              <Link href={"/detail"}>
                <Image
                  className="mt-[64px] hover:scale-[105%]"
                  src="images/collection3.svg"
                  height={837}
                  width={600}
                  alt="collection 3"
                />
              </Link>
            </div>
            <div className="flex-col w-[49%]">
              <Link href={"/detail"}>
                <Image
                  className=" hover:scale-[105%]"
                  src="images/collection2.svg"
                  height={840}
                  width={600}
                  alt="collection 2"
                />
              </Link>
              <Link href={"/detail"}>
                <Image
                  className="mt-[144px] hover:scale-[105%]"
                  src="images/collection4.svg"
                  height={435}
                  width={600}
                  alt="collection 4"
                />
              </Link>
            </div>
          </div>
          <div className="md:hidden flex justify-around space-x-4 sm:space-x-8">
            <div className="flex-col">
              <Link href={"/detail"}>
                <Image
                  src="images/collection1.svg"
                  height={330}
                  width={304}
                  alt="collection 1"
                />
              </Link>
              <Link href={"/detail"}>
                <button className="h-[51.5px] text-sm px-4 py2">Blouses</button>
              </Link>
              <Link href={"/detail"}>
                <Image
                  className="mt-6"
                  src="images/collection3.svg"
                  height={506}
                  width={304}
                  alt="collection 3"
                />
              </Link>
              <Link href={"/detail"}>
                <button className="h-[51.5px] text-sm px-4 py2">Dresses</button>
              </Link>
            </div>
            <div className="flex-col">
              <Link href={"/detail"}>
                <Image
                  src="images/collection2.svg"
                  height={552}
                  width={304}
                  alt="collection 2"
                />
              </Link>
              <Link href={"/detail"}>
                <button className="h-[72px] text-sm px-4 py2">Pants</button>
              </Link>
              <Link href={"/detail"}>
                <Image
                  className="mt-6"
                  src="images/collection4.svg"
                  height={270}
                  width={304}
                  alt="collection 4"
                />
              </Link>
              <Link href={"/detail"}>
                <button className="h-[72px] text-sm px-4 py2">Outwears</button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================== Modiweek =================================================== */}
      <div className=" w-full bg-white px-5 py-5 xl:px-[108px] xl:py-[88px] text-black">
        <div className="flex justify-between ">
          <div className="text-xl text-[32px] font-bold mb-6">Modiweek</div>
          <div className="hidden md:flex">
            <Link href={"/detail"}>View All</Link>
          </div>
        </div>
        <div className="flex space-x-4 xl:space-x-6 justify-between">
          {mockModiweek.map((data) => {
            return (
              <div className={data.display}>
                <Link href={"/detail"}>
                  <div className="hover:opacity-[70%] transition-opacity flex justify-center">
                    <Image
                      src={data.src}
                      width={288}
                      height={426}
                      alt={data.alt}
                    />
                  </div>
                  <div className="ml-2 mt-[37px]">
                    <div className="font-bold text-base">{data.title}</div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>

      {/* ================================================== Sustainability ===================================================== */}
      <div className="flex items-end justify-end px-[40px] py-4 sm:px-[108px] sm:py-[43px] h-[408px] sm:h-[526px] bg-[url(../../public/images/sustainability2.svg)] bg-cover sm:bg-[url(../../public/images/sustainabilitybg.svg)] bg-right-top">
        <div className="flex-col w-[400px] sm:w-[460px]">
          <div className="text-black font-[300] text-sm sm:text-xl sm:leading-9">
            Stylish Sustainability In Clothing Promotes Eco-Friendly Choices For
            A Greater Future
          </div>
          <div className="flex mt-3 justify-end">
            <button className=" px-[44px] py-2 bg-white text-black text-sm">
              Sustainability
            </button>
          </div>
        </div>
      </div>

      {/* ==================================================== Follow Us @Modimal ========================================== */}
      <div className="hidden md:flex md:flex-col w-full bg-white px-5 py-5 xl:px-[108px] xl:pt-[88px] xl:pb-[48px] text-black">
        <div className="flex justify-between ">
          <div className="text-xl text-[32px] font-bold mb-6">
            Follow Us @Modimal
          </div>
        </div>
        <Image
          src="images/followus-bg.svg"
          width={1224}
          height={751}
          alt="pict follow us"
          className="w-full"
        />
      </div>
      <div className="md:hidden w-full bg-white px-5 py-5 xl:px-[108px] xl:pt-[88px] xl:pb-[48px] text-black">
        <div className="flex justify-between">
          <div className="text-xl text-[32px] font-bold mb-6">
            Follow Us @Modimal
          </div>
        </div>
        <Image
          src="images/followus-bgsm.svg"
          width={1224}
          height={751}
          alt="pict follow us"
          className="w-full"
        />
      </div>

      {/* ================================================ FOOTER =========================================================== */}
      <Footer />
    </>
  );
}
