"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Collection from "./collection";
import NewIn from "./new_in";
import PlusSize from "./plus_size";
import Sustainability from "./sustainability";

const SubMenu1 = ({ active }) => {
  return (
    <div
      className={`px-8 mt-6 ${
        active ? "flex flex-col border-b-2 border-slate-500" : "hidden"
      } `}
    >
      <Link href="/detail">
        <h3 className="h-8 mt-2">Shop All</h3>
      </Link>
      <Link href="/">
        <h3 className="h-8 mt-2">Blouses & Top</h3>
      </Link>
      <Link href="/">
        <h3 className="h-8 mt-2">Pants</h3>
      </Link>
      <Link href="/">
        <h3 className="h-8 mt-2">Dresses & Jumpsuits</h3>
      </Link>
      <Link href="/">
        <h3 className="h-8 mt-2">Outwear & Jackets </h3>
      </Link>
      <Link href="/">
        <h3 className="h-8 mt-2">Pullovers</h3>
      </Link>
      <Link href="/">
        <h3 className="h-8 mt-2">Tees</h3>
      </Link>
      <Link href="/">
        <h3 className="h-8 mt-2">Shorts & Skirts</h3>
      </Link>
      <Link href="/">
        <h3 className="h-8 mt-2">Featured</h3>
      </Link>
      <Link href="/">
        <h3 className="h-8 mt-2">More</h3>
      </Link>
    </div>
  );
};

const SubMenu2 = ({ active }) => {
  return (
    <div
      className={`px-8 mt-6 ${
        active ? "flex flex-col border-b-2 border-slate-500" : "hidden"
      } `}
    >
      <Link href="/">
        <h3 className="h-8 mt-2">Plus Size</h3>
      </Link>
      <Link href="/">
        <h3 className="h-8 mt-2">Fall Collection</h3>
      </Link>
      <Link href="/">
        <h3 className="h-8 mt-2">Modiweek</h3>
      </Link>
    </div>
  );
};

const SubMenu3 = ({ active }) => {
  return (
    <div
      className={`px-8 mt-6 ${
        active ? "flex flex-col border-b-2 border-slate-500" : "hidden"
      } `}
    >
      <Link href="/">
        <h3 className="h-8 mt-2">Shop All</h3>
      </Link>
      <Link href="/">
        <h3 className="h-8 mt-2">Blouses & Top</h3>
      </Link>
      <Link href="/">
        <h3 className="h-8 mt-2">Pants</h3>
      </Link>
      <Link href="/">
        <h3 className="h-8 mt-2">Dresses & Jumpsuits</h3>
      </Link>
      <Link href="/">
        <h3 className="h-8 mt-2">Outwear & Jackets </h3>
      </Link>
      <Link href="/">
        <h3 className="h-8 mt-2">Pullovers</h3>
      </Link>
      <Link href="/">
        <h3 className="h-8 mt-2">Tees</h3>
      </Link>
      <Link href="/">
        <h3 className="h-8 mt-2">Shorts & Skirts</h3>
      </Link>
      <Link href="/">
        <h3 className="h-8 mt-2">Featured</h3>
      </Link>
      <Link href="/">
        <h3 className="h-8 mt-2">More</h3>
      </Link>
    </div>
  );
};

const SubMenu4 = ({ active }) => {
  return (
    <div
      className={`px-8 mt-6 ${
        active ? "flex flex-col border-b-2 border-slate-500" : "hidden"
      } `}
    >
      <Link href="/">
        <h3 className="h-8 mt-2">Plus Size</h3>
      </Link>
      <Link href="/">
        <h3 className="h-8 mt-2">Fall Collection</h3>
      </Link>
      <Link href="/">
        <h3 className="h-8 mt-2">Modiweek</h3>
      </Link>
    </div>
  );
};

export default function Header() {
  const [isActive, setIsActive] = useState(false);
  const [isSubActive, setIsSubActive] = useState(false);
  const [isSubActive2, setIsSubActive2] = useState(false);
  const [isSubActive3, setIsSubActive3] = useState(false);
  const [isSubActive4, setIsSubActive4] = useState(false);

  const clickMenuHandler = () => {
    setIsActive(!isActive);
    setIsSubActive(false);
    setIsSubActive2(false);
    setIsSubActive3(false);
    setIsSubActive4(false);
  };

  const clickSubMenuHandler = () => {
    setIsSubActive(!isSubActive);
  };
  const clickSubMenuHandler2 = () => {
    setIsSubActive2(!isSubActive2);
  };
  const clickSubMenuHandler3 = () => {
    setIsSubActive3(!isSubActive3);
  };
  const clickSubMenuHandler4 = () => {
    setIsSubActive4(!isSubActive4);
  };

  return (
    <div className="fixed top-0 w-full text-center bg-white text-black z-50">
      <div className=" bg-[#5A6D57] text-white font-medium text-xs py-2">
        Enjoy Free Shipping On All Orders
      </div>
      <div className="xl:px-[108px] px-5 lg:px-0 ">
        <div className="flex justify-between h-[80px]">
          {/* === MENU SEARCH < 1024px === */}
          <div className="lg:hidden my-auto">
            <div className="flex justify-between md:justify-around w-[57px] sm:w-[100px] md:w-[184px]">
              <button className="group" onClick={clickMenuHandler}>
                <Image
                  className="lg:hidden"
                  src={`${
                    isActive ? "images/iconx.svg" : "images/headericon5.svg"
                  }`}
                  height={24}
                  width={24}
                  alt="icon1"
                />
              </button>
              <div className={`${isActive ? "flex" : "hidden"} lg:hidden `}>
                <div className="flex-row absolute left-0 top-0 mt-[112px] w-full bg-white text-black px-5 py-5 xl:px-[108px] xl:py-[52px] bg-gradient-to-r transition-all">
                  <div className="flex space-x-4 justify-between">
                    <div className="flex-col text-left w-full group">
                      <button
                        className={`flex justify-between text-xl mt-8 lg:mt-0 font-bold w-full ${
                          !isSubActive ? "border-b-2 border-slate-500" : ""
                        }`}
                        onClick={clickSubMenuHandler}
                      >
                        <div className="">Collection</div>
                        <Image
                          src={`${
                            isSubActive
                              ? "images/arrow_up.svg"
                              : "images/arrow_down.svg"
                          }`}
                          height={24}
                          width={24}
                          alt="icon"
                        />
                      </button>
                      <SubMenu1 active={isSubActive} />
                      <button
                        className={`flex justify-between  text-xl mt-8 lg:mt-0 font-bold w-full ${
                          !isSubActive2 ? "border-b-2 border-slate-500" : ""
                        }`}
                        onClick={clickSubMenuHandler2}
                      >
                        <div className="">New In</div>
                        <Image
                          src={`${
                            isSubActive2
                              ? "images/arrow_up.svg"
                              : "images/arrow_down.svg"
                          }`}
                          height={24}
                          width={24}
                          alt="icon"
                        />
                      </button>
                      <SubMenu2 active={isSubActive2} />
                      <button
                        className={`flex justify-between  text-xl mt-8 lg:mt-0 font-bold w-full ${
                          !isSubActive3 ? "border-b-2 border-slate-500" : ""
                        }`}
                        onClick={clickSubMenuHandler3}
                      >
                        <div className="">Modiweek</div>
                        <Image
                          src={`${
                            isSubActive3
                              ? "images/arrow_up.svg"
                              : "images/arrow_down.svg"
                          }`}
                          height={24}
                          width={24}
                          alt="icon"
                        />
                      </button>
                      <SubMenu3 active={isSubActive3} />
                      <button
                        className={`flex justify-between  text-xl mt-8 lg:mt-0 font-bold w-full ${
                          !isSubActive4 ? "border-b-2 border-slate-500" : ""
                        }`}
                        onClick={clickSubMenuHandler4}
                      >
                        <div className="">Plus Size</div>
                        <Image
                          src={`${
                            isSubActive4
                              ? "images/arrow_up.svg"
                              : "images/arrow_down.svg"
                          }`}
                          height={24}
                          width={24}
                          alt="icon"
                        />
                      </button>
                      <SubMenu4 active={isSubActive4} />
                    </div>
                  </div>
                  <div className="w-full space-x-4 flex mt-[90px] mb-[21px]">
                    <button className="flex justify-center py-2 px-2 space-x-1 w-1/2 border-2 border-black">
                      <Link className="flex" href={"/"}>
                        <Image
                          src={`images/iconlogin.svg`}
                          height={24}
                          width={24}
                          alt="icon login"
                        />
                        <span>Log in</span>
                      </Link>
                    </button>
                    <button className="py-2 px-2 w-1/2 border-2 border-black">
                      <Link href={"/"}>Create Account</Link>
                    </button>
                  </div>
                </div>
              </div>
              <button>
                <Image
                  className="lg:hidden"
                  src="images/headericon1.svg"
                  height={24}
                  width={24}
                  alt="icon5"
                />
              </button>
            </div>
          </div>
          {/* === LOGO MODIMAL === */}
          <div className="my-auto">
            <Link href="/">
              <Image
                src="images/LogoModimal.svg"
                width={184}
                height={46}
                alt="logo modimal"
              />
            </Link>
          </div>
          {/* ==== MENU TENGAH === */}
          <div className="hidden lg:flex space-x-6 items-center">
            <div className="w-[104px] h-full flex flex-col justify-center group">
              <Link href="/detail">Collection</Link>
              <Collection />
            </div>
            <div className="w-[104px] h-full flex flex-col justify-center group">
              <Link href="/detail">New In</Link>
              <NewIn />
            </div>
            <div className="w-[104px] h-full flex flex-col justify-center group ">
              <Link href="/detail">Modiweek</Link>
            </div>
            <div className="w-[104px] h-full flex flex-col justify-center group ">
              <Link href="/detail">Plus Size</Link>
              <PlusSize />
            </div>
            <div className="w-[104px] h-full flex flex-col justify-center group ">
              <Link href="/detail">Sustainability</Link>
              <Sustainability />
            </div>
          </div>
          {/* === MENU KANAN === */}
          <div className="my-auto flex justify-between md:justify-around w-[57px] sm:w-[100px] md:w-[184px]">
            <div className="flex justify-between md:justify-around lg:justify-between w-[184px]">
              <button className="hidden lg:flex">
                <Image
                  src="images/headericon1.svg"
                  height={24}
                  width={24}
                  alt="icon1"
                />
              </button>
              <button className="hidden lg:flex">
                <Image
                  src="images/headericon2.svg"
                  height={24}
                  width={24}
                  alt="icon2"
                />
              </button>
              <button>
                <Image
                  src="images/headericon3.svg"
                  height={24}
                  width={24}
                  alt="icon3"
                />
              </button>
              <button>
                <Image
                  src="images/headericon4.svg"
                  height={24}
                  width={24}
                  alt="icon4"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
