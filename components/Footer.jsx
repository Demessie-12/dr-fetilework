import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

function Footer() {
  return (
    <div className=" mt-5 xl:mt-10 flex flex-col gap-5 rounded-t-3xl bg-gradient-to-b from-DocOrange/90 to-DocOrange  font-semibold text-white shadow-lg md:mt-16 bg-green-600 ">
      <div className="2xl:max-w-6xl xl:mx-auto">
        <div className="flex  gap-1 px-3 md:px-5 ">
          <div className="flex flex-col w-fit md:w-[600px] my-auto text-center">
            <Image
              src="/Logo.png"
              className="h-auto md:w-80"
              width={1000}
              height={1000}
              alt="Doctera Logo"
            />
            <h1 className="pt-3 text-lg md:text-xl xl:text-2xl text-white font-bold">
              Dr Fetilework{" "}
              <span className="block text-base xl:text-lg">Dental Clinic</span>
            </h1>
          </div>
          <p className="px-5 text-justify font-semibold text-gray-900 lg:text-lg xl:text-xl">
            Dr. Fetilework Specialty Dental Clinic is a modern and
            patient-centered dental practice committed to providing top-quality
            oral healthcare. Our clinic offers a wide range of services,
            including preventive care, cosmetic dentistry, restorative
            procedures, and advanced treatments like dental implants and
            orthodontics.{" "}
            <span className="hidden md:flex">
              Equipped with state-of-the-art technology, we ensure precision in
              diagnosis and treatment while maintaining a warm and welcoming
              atmosphere. From routine cleanings to complex dental surgeries,
              our goal is to deliver exceptional care tailored to each patient's
              unique needs.
            </span>
          </p>
        </div>
        <div className="mx-auto mt-2 grid w-full grid-cols-2 gap-5 px-5   lg:max-w-6xl lg:pt-5">
          <div className="flex w-fit flex-col lg:flex-row lg:gap-3 gap-0.5 text-white mx-auto lg:text-lg">
            <h1 className="mb-1 text-xl lg:text-2xl font-bold text-blue-700">
              Services
            </h1>
            <Link
              href="/services#tooth-cleaning"
              className="hover:text-black pl-3"
            >
              Teeth Whitening
            </Link>
            <Link href="/services#brace" className="hover:text-black pl-3">
              Braces
            </Link>
            <Link href="/services#implant" className="hover:text-black pl-3">
              Implant
            </Link>
            <Link href="/services#veneers" className="hover:text-black pl-3">
              Veneers
            </Link>
          </div>
          <div className="flex w-fit flex-col gap-0.5  text-white mx-auto lg:flex-row lg:gap-3 lg:text-lg">
            <h1 className="mb-1 text-xl lg:text-2xl font-bold text-blue-700">
              Pages
            </h1>
            <Link href="/" className="pl-3 hover:text-black">
              Home
            </Link>
            <Link href="/services" className="pl-3 hover:text-black">
              Services
            </Link>
            <Link href="/about" className="pl-3 hover:text-black">
              About Us
            </Link>
            <Link href="/contact" className="pl-3 hover:text-black">
              Contact
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-gray-800 text-gray-400 w-full text-center py-3 md:py-5 xl:text-lg">
        <p className="mb-2 text-white">
          ©Copyright {new Date().getFullYear()}, Dr Fetilework All rights
          reserved
        </p>
        <p>
          Designed & Developed by
          <span className="text-gray-200 cursor-pointer"> Yeshi Solutions</span>
        </p>
      </div>
    </div>
  );
}

export default Footer;
