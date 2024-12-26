import Image from "next/image";
import React from "react";

function TourOurOffice() {
  return (
    <div className="pt-5 bg-gradient-to-b from-green-600 to-gray-300">
      <h1 className="font-bold text-xl md:text-2xl xl:text-3xl w-full text-center text-white">
        Take a Tour of Our Main Office
      </h1>
      <h2 className="font-medium text-lg md:text-xl xl:text-2xl w-full text-center mb-2 xl:mb-5">
        A Virtual Tour of Our Special Dental Clinic
      </h2>
      <div className="xl:flex gap-2 xl:px-10 xl:mx-auto xl:justify-center">
        <div className="hidden xl:flex flex-col mx-3  w-96 rounded-e-3xl rounded text-center">
          <Image
            className="h-auto w-full  md:rounded-3xl md:mt-14"
            src="/setup-4.jpg"
            alt="image of dr fetileword"
            width={8000}
            height={8000}
          />
        </div>
        <iframe
          className="w-full h-80  md:w-[700px] md:h-[500px] flex mx-auto xl:mr-3 xl:mx-0"
          src="https://www.youtube-nocookie.com/embed/SMaqX0ggiXU?si=GJrY_glEdUaE0HoA&amp;controls=1"
          title="Dr fetilework video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default TourOurOffice;
