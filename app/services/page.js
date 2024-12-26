import OurAddress from "@/components/OurAddress";
import SendRequest from "@/components/SendRequest";
import SocialMedia from "@/components/SocialMedia";
import Image from "next/image";
import React from "react";

export const metadata = {
  title: "Services | Dr fetilework dental clinic",
  description:
    "At Dr fetilework dental clinic, we offer a wide range of dental services including preventive care, fillings, crowns, cosmetic treatments like teeth whitening and veneers, orthodontics such as braces and Invisalign, and restorative options like dental implants and dentures. Our team uses the latest technology to provide personalized, gentle care for all your dental needs. we are proud to be recognized as the Best Dental Clinic in Ethiopia.",
  keywords:
    "Dr fetilework, dr fetilework dental clinic, best dental clinic in addis ababa, brace in addis ababa",
};
function servicePage() {
  return (
    <div>
      <div className="relative ">
        <Image
          src="/bg-eth.jpg"
          width={1000}
          height={1000}
          alt="Image of services in dr fetilework dental clinic"
          className="w-full h-auto"
        />
        <div className=" absolute top-1/3  left-0 text-center align-middle  w-full h-full">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Services
          </h1>
          <h2 className="text-xl md:text-2xl font-bold text-gray-300">
            Our Featured Dental Treatments
          </h2>
        </div>
      </div>
      <div
        className="md:flex gap-1 w-full px-3 md:px-5 lg:px-7 xl:px-10"
        id="tooth-cleaning"
      >
        <Image
          src="/checkup.avif"
          width={1000}
          height={1000}
          className="flex-1 w-full md:w-1/2  mb-3"
          alt="Teeth cleaning at Dr fetilework speciality dental clinic"
        />
        <div className=" h-full my-auto font-semibold text-gray-900 text-lg md:text-xl">
          <h1 className="text-white font-bold justify-center flex text-2xl md:text-3xl pb-2">
            Check-Ups and Cleaning
          </h1>
          <p>
            Regular check-ups and professional cleanings are essential to every
            patient's oral health. Even if you practice excellent oral hygiene,
            plaque and bacteria can still get stuck in hard-to-reach places. We
            recommend that you visit our Accra dental clinic at least twice a
            year for an exam and cleaning. That way our dentists can spot
            potential issues at the earliest stages and provide treatment before
            you develop a serious health condition.{" "}
          </p>
        </div>
      </div>
      <div
        className="md:flex gap-1 w-full px-3 md:px-5 lg:px-7 xl:px-10 mb-3"
        id="implant"
      >
        <Image
          src="/dental-implant.avif"
          width={1000}
          height={1000}
          className="flex-1 w-full md:w-1/2  mb-3 order-2"
          alt="Teeth cleaning at Dr fetilework speciality dental clinic"
        />
        <div className=" h-full my-auto font-semibold text-gray-900 text-lg md:text-xl order-1">
          <h1 className="text-white font-bold justify-center flex text-2xl md:text-3xl pb-2">
            Dental Implants
          </h1>
          <p>
            Dental implants are a top-of-the-line restorative treatment to
            replace any number of missing teeth. Unlike traditional methods,
            dental implants restore the entire tooth structure from root to
            crown. Your dentist will place small titanium posts into the jaw
            that replicate the function of tooth roots. Once they heal, they
            become a permanent foundation for your custom dental prosthetic
            which will look and feel just like your natural teeth.
          </p>
        </div>
      </div>
      <div
        className="md:flex gap-1 w-full px-3 md:px-5 lg:px-7 xl:px-10 mb-3"
        id="veneers"
      >
        <Image
          src="/checkup.avif"
          width={1000}
          height={1000}
          className="flex-1 w-full md:w-1/2  mb-3"
          alt="Teeth cleaning at Dr fetilework speciality dental clinic"
        />
        <div className=" h-full my-auto font-semibold text-gray-900 text-lg md:text-xl">
          <h1 className="text-white font-bold justify-center flex text-2xl md:text-3xl pb-2">
            Veneer
          </h1>
          <p>
            A veneer is a thin, custom-made shell of porcelain or composite
            resin that is bonded to the front surface of a tooth to enhance its
            appearance. It is an effective solution for improving the color,
            shape, size, or alignment of teeth, making it a popular choice for
            achieving a flawless smile. Veneers are highly durable,
            stain-resistant, and closely mimic the natural look and feel of real
            teeth. They are often used to repair chipped, discolored, or mildly
            misaligned teeth, restoring both function and confidence.
            Additionally, veneers are a minimally invasive cosmetic treatment
            that preserves most of the natural tooth structure while delivering
            long-lasting results.
          </p>
        </div>
      </div>
      <div
        className="md:flex gap-1 w-full px-3 md:px-5 lg:px-7 xl:px-10 mb-3"
        id="brace"
      >
        <Image
          src="/dental-implant.avif"
          width={1000}
          height={1000}
          className="flex-1 w-full md:w-1/2  mb-3 order-2"
          alt="Teeth cleaning at Dr fetilework speciality dental clinic"
        />
        <div className=" h-full my-auto font-semibold text-gray-900 text-lg md:text-xl order-1">
          <h1 className="text-white font-bold justify-center flex text-2xl md:text-3xl pb-2">
            Braces
          </h1>
          <p>
            Braces are orthodontic devices made of metal, ceramic, or clear
            materials that are used to straighten misaligned teeth and correct
            bite issues. They work by gradually applying gentle pressure to the
            teeth, guiding them into their proper positions over time. Braces
            are essential for improving oral health, as they help align teeth,
            making them easier to clean and reducing the risk of cavities and
            gum disease. They also enhance facial aesthetics by creating a
            balanced, confident smile and correcting jaw alignment. In addition
            to cosmetic benefits, braces improve chewing and speech functions,
            contributing to overall dental and physical well-being.
          </p>
        </div>
      </div>
      <div
        className="md:flex gap-1 w-full px-3 md:px-5 lg:px-7 xl:px-10 mb-3"
        id="pediatric"
      >
        <Image
          src="/pediatric.avif"
          width={1000}
          height={1000}
          className="flex-1 w-full md:w-1/2  mb-3"
          alt="Teeth cleaning at Dr fetilework speciality dental clinic"
        />
        <div className=" h-full my-auto font-semibold text-gray-900 text-lg md:text-xl">
          <h1 className="text-white font-bold justify-center flex text-2xl md:text-3xl pb-2">
            Pediatric Dentistry
          </h1>
          <p>
            Children, just like adults need regular dental care to maintain good
            health. Most professional dentists recommend making your child's
            first appointment when their baby teeth start to grow in. Our
            priority with pediatric care is to prevent dental conditions that
            can negatively affect a child's health into adulthood. We will
            proactively treat signs of decay and disease and teach essential
            oral hygiene to encourage good habits for life.
          </p>
        </div>
      </div>
      <div
        className="md:flex gap-1 w-full px-3 md:px-5 lg:px-7 xl:px-10 mb-3"
        id="root"
      >
        <Image
          src="/dental-implant.avif"
          width={1000}
          height={1000}
          className="flex-1 w-full md:w-1/2  mb-3 order-2"
          alt="Teeth cleaning at Dr fetilework speciality dental clinic"
        />
        <div className=" h-full my-auto font-semibold text-gray-900 text-lg md:text-xl order-1">
          <h1 className="text-white font-bold justify-center flex text-2xl md:text-3xl pb-2">
            Root Canal Therapy
          </h1>
          <p>
            A small amount of decay can quickly spread, causing a serious tooth
            infection. Fortunately, there is a simple treatment to save your
            natural tooth and relieve uncomfortable side effects. During a root
            canal, your dentist creates a small hole and removes bacteria and
            debris from the inner layer of the tooth. After we address the
            infection, we cap the tooth with a natural-looking restoration to
            prevent future damage.
          </p>
        </div>
      </div>
      <SendRequest />
      <OurAddress />
      <SocialMedia />
    </div>
  );
}

export default servicePage;
