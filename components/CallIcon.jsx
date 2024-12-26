"use client";
import Link from "next/link";
import React from "react";
import { IoChatbubbleEllipses } from "react-icons/io5";
import { usePathname } from "next/navigation";

function CallIcon() {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div
      className={`fixed bottom-10 right-5 md:hidden animate-bounce focus:animate-none hover:animate-none h-14 w-14 bg-white pl-2.5 py-2 pr-2 rounded-full ${
        pathname === "/contact" && "hidden"
      }`}
    >
      <Link
        href="/contact"
        className="text-4xl  text-green-600 font-bold align-middle"
      >
        <IoChatbubbleEllipses />
      </Link>
    </div>
  );
}

export default CallIcon;
