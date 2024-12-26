import React from "react";
import { FaUserDoctor } from "react-icons/fa6";
import { IoPeopleSharp } from "react-icons/io5";
import { GiTimeBomb } from "react-icons/gi";
import { GrTechnology } from "react-icons/gr";
import { MdVerifiedUser } from "react-icons/md";

function Trusted() {
  return (
    <div className="bg-green-600">
      <div className=" grid grid-cols-2 gap-5 bg-DocOrange bg-opacity-50 px-4 py-8 md:grid-cols-4 lg:py-10">
        <div className="flex flex-col items-center justify-center rounded-2xl bg-gray-900 bg-opacity-95 py-8 sm:py-10 lg:py-16">
          <p className="text-4xl font-extrabold text-green-600">
            <FaUserDoctor />
          </p>
          <p className="font-semibold text-gray-300 text-center">
            <span className="text-4xl text-orange-600">5</span> Incredible
            doctors
          </p>
        </div>
        <div className="flex flex-col items-center justify-center rounded-2xl bg-gray-900 bg-opacity-95 py-8 sm:py-10 lg:py-16  ">
          <p className="text-5xl font-extrabold text-green-600">
            <GiTimeBomb />
          </p>
          <p className="font-semibold text-gray-300 text-center">
            <span className="text-4xl text-orange-600">10</span> Years of
            experience
          </p>
        </div>
        <div className="flex flex-col items-center justify-center rounded-2xl bg-gray-900 bg-opacity-95 py-8 sm:py-10 lg:py-16">
          <p className="text-4xl font-extrabold text-green-600">
            <IoPeopleSharp />
          </p>
          <p className="font-semibold text-gray-300 text-center">
            <span className="text-4xl text-orange-600">7k</span> Happy patients
          </p>
        </div>
        <div className="flex flex-col items-center justify-center rounded-2xl bg-gray-900 bg-opacity-95 py-8 sm:py-10 lg:py-16">
          <p className="text-4xl font-extrabold text-green-600 mb-2">
            <GrTechnology />
          </p>
          <p className="font-semibold text-gray-300 text-center flex gap-1">
            <span className="text-3xl text-orange-600">
              <MdVerifiedUser />
            </span>
            New Technology
          </p>
        </div>
      </div>
    </div>
  );
}

export default Trusted;
