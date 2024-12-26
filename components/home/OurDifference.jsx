import Image from "next/image";
import React from "react";

function OurDifference() {
  return (
    <div className="flex pt-5  bg-gray-300 md:flex-row flex-col">
      <div className="pl-2 md:pl-4 lg:pl-6 xl:pl-10  py-5 ">
        <h1 className="text-xl md:text-2xl lg:text-3xl text-orange-600 font-bold  text-center underline-offset-2 underline">
          What make us different?
        </h1>
        <div className="flex gap-2 pt-3 md:gap-3 md:text-xl text-base">
          <h1 className="p-2 rounded-full bg-green-600 text-white font-semibold h-fit my-auto md:text-lg">
            01
          </h1>
          <p className="text-black">
            <span className="font-serif block text-green-600 font-bold text-lg md:text-2xl">
              Patient-Centered Care
            </span>
            Your comfort and well-being are our top priorities. From the moment
            you step into our clinic, we ensure that every aspect of your visit
            is tailored to your needs. We take the time to listen to your
            concerns and create treatment plans that align with your goals,
            offering a truly personalized experience.
          </p>
        </div>
        <div className="flex gap-2 pt-5 md:gap-3 md:text-xl text-base">
          <h1 className="p-2 rounded-full bg-blue-600 text-white font-semibold h-fit my-auto md:text-lg">
            02
          </h1>
          <p className="text-orange-600">
            <span className="font-serif block text-blue-600 font-bold text-lg md:text-2xl">
              Advanced Technology
            </span>
            We stay at the forefront of dental innovations, using the latest
            technology to deliver efficient and precise treatments. With tools
            like digital X-rays, laser dentistry, and intraoral cameras, we can
            diagnose and treat your dental issues with greater accuracy,
            comfort, and speed.
          </p>
        </div>
        <div className="flex gap-2 pt-5 md:gap-3 md:text-xl text-base">
          <h1 className="p-2 rounded-full bg-green-600 text-white font-semibold h-fit my-auto md:text-lg">
            03
          </h1>
          <p className="text-black">
            <span className="font-serif block text-green-600 font-bold text-lg md:text-2xl">
              A Calm, Welcoming Environment
            </span>
            We understand that dental visits can cause anxiety for some. That's
            why we've created a warm, calming environment where you can feel
            relaxed throughout your visit. Our friendly team is here to help you
            feel at ease, and we offer sedation options to make your experience
            as stress-free as possible.
          </p>
        </div>
        <div className="flex gap-2 pt-5 md:gap-3 md:text-xl text-base">
          <h1 className="p-2 rounded-full bg-blue-600 text-white font-semibold h-fit my-auto md:text-lg">
            04
          </h1>
          <p className="text-orange-600">
            <span className="font-serif block text-blue-600 font-bold text-lg md:text-2xl">
              Experienced, Caring Team
            </span>
            Our team of highly trained and experienced professionals is
            dedicated to delivering the best possible care. We continually
            update our skills and knowledge to ensure we provide the most
            effective treatments and stay current with the latest dental
            practices.
          </p>
        </div>
      </div>
      <div className="w-fit h-fit align-middle my-auto">
        <Image
          className="h-auto w-40 mt-3 hidden md:flex mx-auto mb-[-30px]  md:rounded-2xl"
          src="/setup-7.jpg"
          alt="image of dr fetileword"
          width={1000}
          height={1000}
        />
        <Image
          className="h-auto  md:rounded-3xl"
          src="/setup-6.jpg"
          alt="image of dr fetileword"
          width={1000}
          height={1000}
        />
        <Image
          className="h-auto w-40 hidden md:flex mb-3 mx-auto mt-[-30px]  md:rounded-2xl"
          src="/setup-8.jpg"
          alt="image of dr fetileword"
          width={1000}
          height={1000}
        />
      </div>
    </div>
  );
}

export default OurDifference;
