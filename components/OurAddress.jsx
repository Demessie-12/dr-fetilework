import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoLocation } from "react-icons/io5";

function OurAddress() {
  return (
    <div className="flex flex-col md:flex-row  gap-5 md:gap-2 pb-10 md:py-10 bg-green-600">
      <div className=" w-full md:w-3/5 md:order-2 my-auto">
        <a
          target="blank"
          href="https://www.google.com/maps/dir//Dr.+fetilework+special+Dental+Clinic,+St+paulis,+Addis+Ababa/@9.0495726,38.7250184,19z/data=!4m17!1m7!3m6!1s0x164b87835c118611:0xcd78684ee7b0900f!2sDr.+fetilework+special+Dental+Clinic!8m2!3d9.0496224!4d38.7255239!16s%2Fg%2F11tg7fjvlm!4m8!1m0!1m5!1m1!1s0x164b87835c118611:0xcd78684ee7b0900f!2m2!1d38.7255239!2d9.0496224!3e2?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
          className="w-full"
        >
          <Image
            className="h-auto w-full  "
            src="/map.png"
            alt="Dr fetilework dental clinic map location"
            width={8000}
            height={8000}
          />
        </a>
      </div>
      <div className=" flex flex-1 flex-col md:order-1 gap-2 items-center my-auto">
        <div className="text-center lg:text-lg">
          <h1 className="text-2xl lg:text-3xl text-white font-semibold">
            Dr, Fetilework
          </h1>
          <h1 className="text-xl lg:text-2xl text-white font-semibold mb-2">
            Speciality Dental Clinic
          </h1>
          <p className="flex ">
            <span className="text-white text-2xl mr-1">
              <IoLocation />
            </span>
            Woreda 8, Near St.Paulos Hospital
          </p>
          <p>Addis Ababa, Ethiopia</p>
        </div>
        <h2 className="text-blue-800 font-bold text-lg lg:text-xl mb-2">
          Open Today 8:00am - 5:00pm
        </h2>
        <Link
          href="/services"
          className="py-3 px-6 bg-gray-100 hover:bg-white hover:text-black hover:transition duration-500 w-fit text-lg  rounded-full text-green-600 font-semibold"
        >
          About Our Services
        </Link>
        <a
          target="blank"
          href="https://www.google.com/maps/dir//Dr.+fetilework+special+Dental+Clinic,+St+paulis,+Addis+Ababa/@9.0495726,38.7250184,19z/data=!4m17!1m7!3m6!1s0x164b87835c118611:0xcd78684ee7b0900f!2sDr.+fetilework+special+Dental+Clinic!8m2!3d9.0496224!4d38.7255239!16s%2Fg%2F11tg7fjvlm!4m8!1m0!1m5!1m1!1s0x164b87835c118611:0xcd78684ee7b0900f!2m2!1d38.7255239!2d9.0496224!3e2?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
          className="py-3 px-16 bg-gray-100 hover:bg-white hover:text-black hover:transition duration-500 w-fit text-xl  rounded-full text-green-600 font-semibold"
        >
          Direction
        </a>
        <p className="py-3 px-6 bg-gray-100 hover:bg-white hover:text-black hover:transition duration-500 w-fit text-xl  rounded-full text-green-600 font-semibold">
          <a href="tel:0911050507">+2519 11 05 05 07</a>
        </p>
      </div>
    </div>
  );
}

export default OurAddress;
