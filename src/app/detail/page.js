import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <>
      <title>Modimal Detail</title>
      <Header />
      {/* === Best Seller === */}
      <div className="mt-[110px] w-full bg-white space-y-10 px-5 py-5 xl:px-[108px] xl:py-[88px] text-black">
        <div className="flex justify-center bg-white">
          <div className="text-xl text-[32px] font-bold ">Detail Page</div>
        </div>
        <div className="flex justify-between space-x-4 lg:space-x-6">
          <div className="flex-col">
            <div className=" w-full">
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
          </div>
          <div className="flex-col">
            <div className=" w-full">
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
          </div>
          <div className="flex-col hidden md:flex md:flex-col ">
            <div className="w-full">
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
          </div>
        </div>
        <div className="flex space-x-4 xl:space-x-6 justify-between">
          <div className="flex-col">
            <div className="flex justify-center">
              <Image
                src="images/modiweek1.svg"
                width={288}
                height={426}
                alt="modiweek 1"
              />
            </div>
            <div className="ml-2 mt-[37px]">
              <div className="font-bold text-base">Sunday</div>
            </div>
          </div>
          <div className="flex-col">
            <div className="flex justify-center">
              <Image
                src="images/modiweek2.svg"
                width={288}
                height={426}
                alt="modiweek 2"
              />
            </div>
            <div className="ml-2 mt-[37px]">
              <div className="font-bold text-base">Monday</div>
            </div>
          </div>
          <div className="flex-col hidden sm:flex sm:flex-col">
            <div className="flex justify-center">
              <Image
                src="images/modiweek3.svg"
                width={288}
                height={426}
                alt="modiweek 3"
              />
            </div>
            <div className="ml-2 mt-[37px]">
              <div className="font-bold text-base">Tuesday</div>
            </div>
          </div>
          <div className="flex-col hidden lg:flex lg:flex-col">
            <div className="flex justify-center">
              <Image
                src="images/modiweek4.svg"
                width={288}
                height={426}
                alt="modiweek 4"
              />
            </div>
            <div className="ml-2 mt-[37px]">
              <div className="font-bold text-base">Wednesday</div>
            </div>
          </div>
        </div>
      </div>
      {/* ========================================== Modiweek =================================================== */}
      {/* ========================================== Modiweek =================================================== */}
      {/* ========================================== Modiweek =================================================== */}
      {/* <div className=" w-full bg-white px-5 py-5 xl:px-[108px] xl:py-[64px] text-black">
        <div className="flex space-x-4 xl:space-x-6 justify-between">
          <div className="flex-col">
            <div className="flex justify-center">
              <Image
                src="images/modiweek1.svg"
                width={288}
                height={426}
                alt="modiweek 1"
              />
            </div>
            <div className="ml-2 mt-[37px]">
              <div className="font-bold text-base">Sunday</div>
            </div>
          </div>
          <div className="flex-col">
            <div className="flex justify-center">
              <Image
                src="images/modiweek2.svg"
                width={288}
                height={426}
                alt="modiweek 2"
              />
            </div>
            <div className="ml-2 mt-[37px]">
              <div className="font-bold text-base">Monday</div>
            </div>
          </div>
          <div className="flex-col hidden sm:flex sm:flex-col">
            <div className="flex justify-center">
              <Image
                src="images/modiweek3.svg"
                width={288}
                height={426}
                alt="modiweek 3"
              />
            </div>
            <div className="ml-2 mt-[37px]">
              <div className="font-bold text-base">Tuesday</div>
            </div>
          </div>
          <div className="flex-col hidden lg:flex lg:flex-col">
            <div className="flex justify-center">
              <Image
                src="images/modiweek4.svg"
                width={288}
                height={426}
                alt="modiweek 4"
              />
            </div>
            <div className="ml-2 mt-[37px]">
              <div className="font-bold text-base">Wednesday</div>
            </div>
          </div>
        </div>
      </div> */}

      <Footer />
    </>
  );
}
