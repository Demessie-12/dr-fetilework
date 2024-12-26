import SendRequest from "@/components/SendRequest";
import Image from "next/image";
import React from "react";

export const metadata = {
  title: "Staff | Dr fetilework dental clinic",
  description:
    "Dr fetilework dental clinic is a leading dental clinic dedicated to providing high-quality, compassionate care to patients of all ages. we are proud to be recognized as the Best Dental Clinic in Ethiopia. Our commitment to excellence, patient-centered care, and use of advanced dental technology have earned us this prestigious award. With years of experience, a team of highly skilled professionals, and a passion for delivering exceptional dental services, we have built a reputation for providing outstanding results and ensuring the highest standards of care.",
  keywords:
    "Dr fetilework, dr fetilework dental clinic, best dental clinic in addis ababa, brace in addis ababa, price of brace",
};

function page() {
  return (
    <div>
      <div className="relative ">
        <Image
          src="/team-bg.jpg"
          width={1000}
          height={1000}
          alt="Image of services in dr fetilework dental clinic"
          className="w-full h-auto"
        />
        <div className=" absolute top-1/3 md:top-2/3  left-0 text-center align-middle  w-full h-full px-10">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            <span className="text-green-600 md:text-white">Meet Our</span>{" "}
            Experienced Dentists And
            <span className="text-green-600"> Specialists</span>
          </h1>
        </div>
      </div>

      <div className="flex flex-col gap-8 lg:flex-row py-10 md:py-14 px-3 lg:mx-10">
        <div className="flex-col gap-3 justify-center text-center">
          <Image
            src="/dentist1.avif"
            alt="One of Dr fetilework clinic doctor"
            className="w-60 md:w-80 h-auto mx-auto"
            width={1000}
            height={1000}
          />
          <h1 className="font-bold text-xl text-white underline underline-offset-2">
            Dr. Kebede Abebe
          </h1>
          <h2 className="font-semibold text-lg mb-3 text-gray-200">
            Periodontist
          </h2>
          <p className="px-3 font-semibold">
            Dr. Kebede is passionate about helping everyone achieve a confident,
            radiant smile. Since joining the Our team in 2018, he has been
            dedicated to providing exceptional dental care. Dr. Kebede completed
            his general dentistry training at the Addis Ababa University in
            Ethiopia and further specialized with a Master’s degree in
            Periodontology and Implantology from SPHMMC. His expertise and
            commitment make him a valued member of our team, transforming smiles
            one patient at a time.
          </p>
        </div>
        <div className="flex-col gap-3 justify-center text-center">
          <Image
            src="/dentist2.avif"
            alt="One of Dr fetilework clinic doctor"
            className="w-60 md:w-80 h-auto mx-auto"
            width={1000}
            height={1000}
          />
          <h1 className="font-bold text-xl text-white underline underline-offset-2">
            Dr. Ayele Tadele
          </h1>
          <h2 className="font-semibold text-lg mb-3 text-gray-200">
            Oral Maxillofacial Surgeon
          </h2>
          <p className="px-3 font-semibold">
            Dr. Ayele’s passion for dentistry lies in its unique blend of
            science, art, and aesthetics, enabling him to create beautiful
            smiles and change lives. A graduate of the University of Gonder
            School of Medicine and Dentistry, he further honed his skills during
            an externship at the renowned UCLA School of Dentistry in
            California, USA. Driven by a commitment to excellence, Dr. Ayele
            pursued specialization in Oral and Maxillofacial Surgery with the
            California College of Physicians and Surgeons, combining his
            expertise and artistry to deliver outstanding care to every patient.
          </p>
        </div>
        <div className="flex-col gap-3 justify-center text-center">
          <Image
            src="/dentist3.avif"
            alt="One of Dr fetilework clinic doctor"
            className="w-60 md:w-80 h-auto mx-auto"
            width={1000}
            height={1000}
          />
          <h1 className="font-bold text-xl text-white underline underline-offset-2">
            Dr. Ahmed Zeynu
          </h1>
          <h2 className="font-semibold text-lg mb-3 text-gray-200">
            Endodontist
          </h2>
          <p className="px-3 font-semibold">
            Dr. Ahmed is passionate about helping everyone achieve a confident,
            radiant smile. Since joining the Our team in 2018, he has been
            dedicated to providing exceptional dental care. Dr. Ahmed completed
            his general dentistry training at the Addis Ababa University in
            Ethiopia and further specialized with a Master’s degree in
            Periodontology and Implantology from SPHMMC. His expertise and
            commitment make him a valued member of our team, transforming smiles
            one patient at a time.
          </p>
        </div>
      </div>
      <SendRequest />
    </div>
  );
}

export default page;
