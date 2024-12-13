import HeroSection from "@/components/home/HeroSection";
import OurDifference from "@/components/home/OurDifference";
import PhotoGallery from "@/components/home/PhotoGallery";
import ServicesSample from "@/components/home/ServicesSample";
import Image from "next/image";

export const metadata = {
  title: "Home | Dr fetilework dental clinic",
  description:
    "Dr fetilework dental clinic Provide top-quality dental care for a healthier, brighter smile. we are proud to be recognized as the Best Dental Clinic in Ethiopia. we offer a wide range of dental services including preventive care, fillings, crowns, cosmetic treatments like teeth whitening and veneers, orthodontics such as braces and Invisalign, and restorative options like dental implants and dentures.",
  keywords:
    "Dr fetilework, dr fetilework dental clinic, best dental clinic in addis ababa, brace in addis ababa",
};

export default function Home() {
  return (
    <div>
      <HeroSection />
      <PhotoGallery />
      <ServicesSample />
      <OurDifference />
    </div>
  );
}
