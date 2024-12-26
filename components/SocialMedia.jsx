import React from "react";
import { FaTiktok } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function SocialMedia() {
  return (
    <div className="bg-blue-700 py-5 md:flex md:justify-center md:gap-10">
      <p className="text-2xl font-bold text-center text-white md:flex-1 md:justify-end md:flex my-auto">
        Rate, Review & Explore
      </p>
      <div className="flex md:flex-1 items-center gap-3 md:gap-5 justify-center md:justify-start pt-3">
        <a
          target="blank"
          href="https://www.tiktok.com/@drfetileworkdentalclinic?_t=8pruvbfcyie&_r=1"
          className=" rounded-full w-fit h-fit border-4 bg-white border-white text-black text-3xl p-2"
        >
          <FaTiktok />
        </a>
        <a
          target="blank"
          href="https://www.instagram.com/drfetileworkspecialdent.clinic"
          className=" rounded-full w-fit h-fit border-4 border-gray-300 text-white text-3xl p-2"
        >
          <FaInstagram />
        </a>
        <a
          target="blank"
          href="https://t.me/drfetileworkspecialtydentaclinic"
          className=" rounded-full w-fit h-fit border-4 bg-white border-white text-black text-3xl p-2"
        >
          <FaTelegram />
        </a>
        <a
          target="blank"
          href="https://web.facebook.com/people/Dr-Fetilework-Speciality-Dental-Clinic/61563900563465/"
          className=" rounded-full w-fit h-fit border-4 border-gray-300 text-white text-3xl p-2"
        >
          <FaFacebook />
        </a>
        <a
          target="blank"
          href="https://www.linkedin.com/company/dr-fetilework-speciality-dental-clinic/about/"
          className=" rounded-full w-fit h-fit border-4 bg-white border-white text-black text-3xl p-2"
        >
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
}

export default SocialMedia;
