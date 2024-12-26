"use client";
import React, { useState } from "react";
// import logo from "@/assets/images/logo.png";
import Image from "next/image";
import { TiThMenu } from "react-icons/ti";
import { IoMdCloseCircleOutline } from "react-icons/io";

import Link from "next/link";

function Navbar() {
  const [sidebar, setSideBar] = useState(false);
  return (
    <div className="w-full bg-green-600  sticky left-0 top-0  h-18 flex my-auto justify-between text-xl lg:h-16 md:pr-3 lg:pr-5 z-40 ">
      <Link href="/" className="flex px-1 pl-2 md:px-2">
        <Image
          src="/logo.png"
          alt="dr fetilework logo"
          className="h-12 w-auto flex my-auto"
          width={250}
          height={38}
        />
        <div className="flex-col gap-0 my-2 pl-2">
          <h1 className="text-white font-bold">Dr. Fetilework</h1>
          <h2 className="text-base font-semibold">Dental Clinic</h2>
        </div>
      </Link>

      {/* visible only in tablet or above screen */}
      <div className="hidden md:flex gap-7 text-white font-semibold my-auto text-lg lg:text-xl">
        <Link href="/services" className="hover:text-black">
          Services
        </Link>
        <Link href="/about" className="hover:text-black">
          About
        </Link>
        <Link href="/contact" className="hover:text-black">
          Contact
        </Link>
        <Link href="/staff" className="hover:text-black lg:flex">
          <span className="hidden lg:flex">Our </span>&nbsp;Staffs
        </Link>
      </div>

      <div className="flex my-auto">
        <button onClick={() => setSideBar(!sidebar)}>
          <TiThMenu className="flex md:hidden w-8 h-auto text-gray-100 mr-3" />
        </button>
        <Link href="/contact">
          <p className="hidden md:flex bg-blue-800 text-white px-2 border-2 border-blue-700 py-1 rounded-lg font-semibold  animate-bounce focus:animate-none hover:animate-none">
            Make Appointment
          </p>
        </Link>
      </div>

      <div className="absolute bottom-[-14px] h-5 w-full px-[-4px] bg-gradient-to-b from-green-600 tobg-transparent backdrop-blur-sm"></div>

      {sidebar && (
        <div className="absolute top-0 left-0 h-dvh bg-green-600/85 backdrop-blur-sm w-full z-50 no-doc-scroll">
          <div className="w-60 h-full mx-auto flex flex-col text-center my-2 gap-5 text-white font-bold z-50">
            <div>
              <IoMdCloseCircleOutline
                className="fixed top-4 right-5 text-gray-200 h-10 w-auto hover:cursor-pointer hover:text-white"
                onClick={() => setSideBar(false)}
              />
            </div>
            <div className="flex mx-auto mt-8">
              <Image
                src="/logo.png"
                alt="dr fetilework logo"
                className="h-12 w-auto flex my-auto"
                width={250}
                height={38}
              />
              <div className="flex-col gap-0 my-3 pl-2">
                <h1 className="text-white text-2xl font-bold">
                  Dr. Fetilework
                </h1>
                <h2 className="text-lg  font-semibold">Dental Clinic</h2>
              </div>
            </div>
            <Link href="/" onClick={() => setSideBar(false)}>
              Home
            </Link>
            <Link href="/services" onClick={() => setSideBar(false)}>
              Services
            </Link>
            <Link href="/about" onClick={() => setSideBar(false)}>
              About
            </Link>
            <Link href="/contact" onClick={() => setSideBar(false)}>
              Contact
            </Link>
            <Link href="/staff" onClick={() => setSideBar(false)}>
              Our Staff
            </Link>
            <Link href="/contact" onClick={() => setSideBar(false)}>
              <p className="flex bg-blue-800 text-white px-2 border-2 border-blue-700 py-1 rounded-lg font-semibold w-fit mx-auto">
                Make Appointment
              </p>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
