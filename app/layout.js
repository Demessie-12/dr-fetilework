import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

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
      <body className="relative">
        <Navbar />
        <main className="">{children}</main>
      </body>
    </html>
  );
}
