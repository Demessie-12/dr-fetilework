import Link from "next/link";
import React from "react";

function ServicesSample() {
  return (
    <div className="bg-green-600 px-1 py-3">
      <h1 className="font-bold w-full text-2xl md:text-5xl md:py-3 lg:text-6xl xl:text-7xl font-sans  text-center py-1">
        WE ARE <span className="text-gray-200">PROUD</span> TO OFFER
      </h1>
      <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
        <div className="bg-trusted2 bg-inherit h-80 rounded-2xl">
          <Link
            href="/services#tooth-cleaning"
            className="h-full hover:bg-transparent"
          >
            <div className="h-full bg-green-600/40 hover:bg-transparent hover:transition duration-700 relative align-bottom">
              <h2 className="text-center absolute bottom-0 w-full  font-bold text-xl py-2 bg-blue-600 text text-white rounded-b-2xl">
                Teeth Whitening
              </h2>
            </div>
          </Link>
        </div>
        <div className="bg-trusted2 bg-inherit h-80 rounded-2xl">
          <Link href="/services#implant" className="h-full bg-green-600/80">
            <div className="h-full bg-blue-600/30  rounded-2xl  hover:bg-transparent hover:transition duration-700 relative align-bottom">
              <h2 className="text-center absolute bottom-0 w-full  font-bold text-xl py-2  bg-orange-700 text text-white  rounded-b-2xl">
                Implant
              </h2>
            </div>
          </Link>
        </div>
        <div className="bg-trusted2 bg-inherit h-80 rounded-2xl">
          <Link href="/services#veneers" className="h-full bg-green-600/80">
            <div className="h-full  rounded-2xl md:bg-green-600/40 bg-blue-600/30  hover:bg-transparent hover:transition duration-700 relative align-bottom">
              <h2 className="text-center absolute bottom-0 w-full  font-bold text-xl py-2 md:bg-blue-600 bg-orange-700 text text-white  rounded-b-2xl">
                Veneers
              </h2>
            </div>
          </Link>
        </div>
        <div className="bg-trusted2 bg-inherit h-80 rounded-2xl">
          <Link href="/services#brace" className="h-full bg-green-600/80">
            <div className="h-full  rounded-2xl bg-green-600/40 md:bg-blue-600/30  hover:bg-transparent hover:transition duration-700 relative align-bottom">
              <h2 className="text-center absolute bottom-0 w-full  font-bold text-xl py-2 md:bg-orange-700 bg-blue-600 text text-white  rounded-b-2xl">
                Braces
              </h2>
            </div>
          </Link>
        </div>
      </div>
      <h1 className=" text-white mt-10 mb-5 text-center w-full font-semibold ">
        <Link
          href="/services"
          className="py-3 px-4 rounded-xl bg-blue-800 hover:bg-white text-gray-200 hover:text-gray-900 text-lg transition duration-300"
        >
          View All Services
        </Link>
      </h1>
    </div>
  );
}

export default ServicesSample;
