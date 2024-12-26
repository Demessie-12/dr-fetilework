import Skills from "@/components/about/Skills";
import Image from "next/image";
import React from "react";

export const metadata = {
  title: "About | Dr fetilework dental clinic",
  description:
    "Dr fetilework dental clinic is a leading dental clinic dedicated to providing high-quality, compassionate care to patients of all ages. we are proud to be recognized as the Best Dental Clinic in Ethiopia. Our commitment to excellence, patient-centered care, and use of advanced dental technology have earned us this prestigious award. With years of experience, a team of highly skilled professionals, and a passion for delivering exceptional dental services, we have built a reputation for providing outstanding results and ensuring the highest standards of care.",
  keywords:
    "Dr fetilework, dr fetilework dental clinic, best dental clinic in addis ababa, brace in addis ababa, price of brace",
};

function aboutPage() {
  return (
    <div>
      <div className="relative bg-white">
        <Image
          src="/about-bg.jpg"
          width={1000}
          height={1000}
          alt="Image of services in dr fetilework dental clinic"
          className="w-full h-auto"
        />
        <div className=" absolute top-1/3  left-0 text-left align-middle  w-full h-full ">
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-balck pl-2 backdrop-blur-sm w-fit">
            About Our <span className="text-red-600">Dental Clinic</span>
          </h1>
          <h2 className="text-xl md:text-2xl pl-5 font-bold text-gray-800 lg:text-3xl">
            Addis Ababa, Ethiopia
          </h2>
        </div>
      </div>
      {/* <div className=" font-semibold px-2 md:px-5">
        <h1 className="text-white text-center font-bold text-2xl">
          About Our Dental Clinic
        </h1>
        <h2 className="text-gray-300 text-center font-bold text-xl mb-1">
          Addis Ababa, Ethiopia
        </h2>
        <p>
          Dr. Fetilework Specialty Dental Clinic is a modern and
          patient-centered dental practice committed to providing top-quality
          oral healthcare. Our clinic offers a wide range of services, including
          preventive care, cosmetic dentistry, restorative procedures, and
          advanced treatments like dental implants and orthodontics. Equipped
          with state-of-the-art technology, we ensure precision in diagnosis and
          treatment while maintaining a warm and welcoming atmosphere.
        </p>
      </div> */}
      <Skills />
      <div>
        <blockquote
          className="tiktok-embed"
          cite="https://www.tiktok.com/@drfetileworkdentalclinic/video/7445661091536899334"
          data-video-id="7445661091536899334"
        >
          {" "}
          <section>
            {" "}
            <a
              target="_blank"
              title="@drfetileworkdentalclinic"
              href="https://www.tiktok.com/@drfetileworkdentalclinic?refer=embed"
            >
              @drfetileworkdentalclinic
            </a>{" "}
            በነጻ ጥርሳችሁን ውብ ልናረግላቹ ነው። Composite Veneer Giveway!
            <a
              title="drfetilework"
              target="_blank"
              href="https://www.tiktok.com/tag/drfetilework?refer=embed"
            >
              #drfetilework
            </a>{" "}
            <a
              title="bestdentalclinicinaddisababa"
              target="_blank"
              href="https://www.tiktok.com/tag/bestdentalclinicinaddisababa?refer=embed"
            >
              #bestdentalclinicinaddisababa
            </a>{" "}
            <a
              target="_blank"
              title="♬ original sound - Dr fetilework"
              href="https://www.tiktok.com/music/original-sound-7445661116573682438?refer=embed"
            >
              ♬ original sound - Dr fetilework
            </a>{" "}
          </section>{" "}
        </blockquote>{" "}
        <script async src="https://www.tiktok.com/embed.js"></script>
      </div>
    </div>
  );
}

export default aboutPage;
