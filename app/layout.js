import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import OurAddress from "@/components/OurAddress";
import SocialMedia from "@/components/SocialMedia";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Dr fetilework dental clinic",
  description:
    "Dr fetilework dental clinic deliver high-quality, affordable dental care for you and your family.",
  keywords:
    "Dr fetilework, dr fetilework dental clinic, best dental clinic in addis ababa, brace in addis ababa",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="relative overflow-x-hidden">
        <Navbar />
        <main className="bg-green-600 pt-3">{children}</main>
        <div className="bg-green-600">
          <OurAddress />
          <SocialMedia />
          <Footer />
        </div>
      </body>
    </html>
  );
}
