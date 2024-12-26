"use client";
import React from "react";
import styled from "styled-components";
import Typewriter from "typewriter-effect";
import Image from "next/image";

const HeroSection = () => {
  let slideIndex = 0;
  setTimeout(showSlides, 1);
  function showSlides() {
    if (!document) return;
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides?.length) {
      slideIndex = 1;
    }
    slides.length > 1 ? (slides[slideIndex - 1].style.display = "block") : "";
    setTimeout(showSlides, 4000); // Change image every 4 seconds
  }

  return (
    <div className="grid w-full grid-cols-2 gap-3 bg-gradient-to-r from-amber-500 to-green-600">
      <div className="flex flex-col gap-3 pl-2 pt-5 md:pl-5 xl:pl-10">
        <p className="text-xl font-bold text-black md:text-2xl xl:text-3xl">
          Hi, Welcome to
          <br />
          <span className="text-white">Dr. Fetilework</span>
        </p>
        <div className="text-xl font-medium md:text-2xl">
          <span className=" italic">ለፈገግታዎ</span>
          <span className="font-bold text-blue-800 xl:text-3xl">
            <Typewriter
              options={{
                strings: [
                  "Dental Implant",
                  "Braces and Invisalign",
                  "Teeth whitening",
                  "Pediatric Dentistry",
                  "Porcelain Veneers",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </span>
        </div>
        <p className="mb-10 text-sm font-semibold text-gray-800 md:text-lg ">
          Dr.Fetilework dental clinic recognized as the Best Dental Clinic in
          Ethiopia.
        </p>
      </div>
      <div className="relative m-auto h-auto max-h-[300px] md:max-h-[250px] overflow-y-hidden w-2/3 max-w-full py-2">
        <div className="mySlides">
          <Image
            className="h-fit w-full max-w-96 duration-700 ease-in-out"
            alt="dr fetliwork address"
            src="/teeth-implant.png"
            width={1000}
            height={1000}
          />
        </div>
        <div className="mySlides">
          <Image
            className="h-fit w-full max-w-96 duration-700 ease-in-out"
            src="/Teeth-Whitening.jpg"
            alt="Portfolio_image"
            width={1000}
            height={1000}
          />
        </div>
        <div className="mySlides">
          <Image
            className="h-fit w-full max-w-96"
            src="/dental-braces.png"
            alt="Portfolio_image"
            width={1000}
            height={1000}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
