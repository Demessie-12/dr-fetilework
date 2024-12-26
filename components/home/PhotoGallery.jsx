import Image from "next/image";
import React from "react";

function PhotoGallery() {
  return (
    <div className="grid grid-cols-3 py-2 md:flex gap-1 bg-green-600 md:justify-center md:gap-2">
      <div className="col-span-2 hidden ">
        <Image
          className="h-auto w-60 md:rounded-3xl drop-shadow-2xl"
          src="/setup-2.jpg"
          alt="image of dr fetileword"
          width={1000}
          height={1000}
        />
      </div>
      <div className="col-span-2 ">
        <Image
          className="h-auto w-full md:w-48 md:rounded-3xl md:mt-10"
          src="/setup-2.jpg"
          alt="image of dr fetileword"
          width={8000}
          height={8000}
        />
      </div>
      <div className="col-span-2 hidden lg:flex">
        <Image
          className="h-auto w-full rounded-3xl md:w-40 md:h-fit md:mt-16 pt-2 "
          src="/setup-2.jpg"
          alt="image of dr fetileword"
          width={1000}
          height={1000}
        />
      </div>
      <div className="flex flex-col gap-2 md:flex-row">
        <Image
          className="h-auto w-full rounded-3xl  md:w-60"
          src="/setup-2.jpg"
          alt="image of dr fetileword"
          width={1000}
          height={1000}
        />
        <Image
          className="hidden lg:flex h-auto w-full rounded-3xl md:w-40 md:h-fit md:mt-16  pt-2"
          src="/setup-2.jpg"
          alt="image of dr fetileword"
          width={1000}
          height={1000}
        />
        <Image
          className="h-auto w-full rounded-3xl md:w-48 md:h-fit md:mt-10 "
          src="/setup-2.jpg"
          alt="image of dr fetileword"
          width={1000}
          height={1000}
        />
      </div>
    </div>
  );
}

export default PhotoGallery;
