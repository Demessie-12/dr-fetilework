import Image from "next/image";
import React from "react";

function Skills() {
  return (
    <div className="py-3">
      <h1 className="text-white font-bold justify-center flex text-2xl md:text-3xl pt-2 pb-2">
        Skills
      </h1>
      <div className="md:flex gap-1 md:gap-3 w-full px-3 md:px-5 lg:px-7 xl:px-10">
        <Image
          src="/skills.avif"
          width={1000}
          height={1000}
          className="flex-1 w-full h-auto md:w-1/2 md:h-full md:my-auto  mb-3  order-2 rounded-r-3xl "
          alt="Teeth cleaning at Dr fetilework speciality dental clinic"
        />
        <div className=" h-full my-auto font-semibold text-gray-900 text-lg md:text-xl">
          <p>
            At Dr. Fetilework Specialty Dental Clinic, our commitment to
            clinical excellence drives us to continually reach new heights. Our
            doctors have undergone advanced training in a wide range of
            cutting-edge dental specialties and technologies, including oral and
            maxillofacial surgery, laser dentistry, dental implants, and 3D
            imaging. This expertise allows us to deliver precise and effective
            care tailored to each patient’s unique needs. Our team combines
            skill, innovation, and a passion for patient care to ensure that
            every treatment not only meets but exceeds your expectations.
          </p>
        </div>
      </div>
      <h1 className="text-white font-bold justify-center flex text-2xl md:text-3xl pt-5 md:pt-10 pb-2">
        Customer Service
      </h1>
      <div className="md:flex gap-1 md:gap-3 w-full px-3 md:px-5 lg:px-7 xl:px-10">
        <Image
          src="/customer.avif"
          width={1000}
          height={1000}
          className="flex-1 w-full h-auto md:w-1/2 md:h-full md:my-auto  mb-3 rounded-l-3xl"
          alt="Teeth cleaning at Dr fetilework speciality dental clinic"
        />
        <div className=" h-full my-auto font-semibold text-gray-300 text-lg md:text-xl">
          <p>
            We go beyond dentistry to deliver a truly satisfying and
            personalized care experience. From the moment you step through our
            doors, you’ll be welcomed into a warm and friendly environment where
            every staff member greets you with a smile and genuine care. Our
            team is dedicated to making you feel at ease, answering all your
            questions, and addressing any concerns with patience and
            understanding. Our dentists take the time to listen to your unique
            needs, working closely with you to design a treatment plan that
            aligns with your goals and fits your budget.
          </p>
        </div>
      </div>
      <h1 className="text-white font-bold justify-center flex text-2xl md:text-3xl pt-5 md:pt-10 pb-2">
        Technology
      </h1>
      <div className="md:flex gap-1 md:gap-3 w-full px-3 md:px-5 lg:px-7 xl:px-10">
        <Image
          src="/technology.avif"
          width={1000}
          height={1000}
          className="flex-1 w-full h-auto md:w-1/2 md:h-full md:my-auto  mb-3  order-2 rounded-r-3xl"
          alt="Teeth cleaning at Dr fetilework speciality dental clinic"
        />
        <div className=" h-full my-auto font-semibold text-gray-900 text-lg md:text-xl">
          <p>
            Stepping into Dr. Fetilework Specialty Dental Clinic feels like
            stepping into the future! Our modern office is equipped with
            cutting-edge tools designed to make your dental experience safer,
            faster, and more comfortable than ever. We use advanced technologies
            like digital X-rays with ultra-low radiation, intraoral cameras that
            provide an up-close look to educate and engage patients, and
            revolutionary laser dentistry for precise and minimally invasive
            treatments.
          </p>
        </div>
      </div>
      <h1 className="text-white font-bold justify-center flex text-2xl md:text-3xl pt-5 md:pt-10 pb-2">
        Uncompromising Safety
      </h1>
      <div className="md:flex gap-1 md:gap-3 w-full px-3 md:px-5 lg:px-7 xl:px-10">
        <Image
          src="/safety.avif"
          width={1000}
          height={1000}
          className="flex-1 w-full h-auto md:w-1/2 md:h-full md:my-auto  mb-3 rounded-l-3xl"
          alt="Teeth cleaning at Dr fetilework speciality dental clinic"
        />
        <div className=" h-full my-auto font-semibold text-gray-300 text-lg md:text-xl">
          <p>
            At Dr. Fetilework Specialty Dental Clinic, infection control is a
            top priority, and we go above and beyond to ensure the safety of our
            patients and team. We strictly adhere to sterilization and
            cross-contamination protocols set by global and national regulatory
            bodies, including the American Dental Association (ADA), the Health
            Facilities Regulatory Authority of Ghana, the Radiation Protection
            Institute of the Ghana Atomic Energy Commission, the Environmental
            Protection Agency (EPA), and the US Centers for Disease Control
            (CDC). Our commitment doesn’t stop there – we exceed these standards
            by regularly testing and recalibrating our equipment to maintain
            optimal effectiveness.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Skills;
