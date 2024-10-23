import Link from "next/link";
import React from "react";
import Logo from "./logo";
import { FaFileCode } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaInfo } from "react-icons/fa";

export default function Header() {
  return (
    <header className="flex items-center justify-between w-full h-20 px-8 py-4 backdrop-blur-sm z-40 ">
      <Link href="/" className="flex items-center">
        <Logo size={60} />
        <h1 className="mt-1 text-xl text-text-primary">Endy Kaishi®</h1>
      </Link>
      <nav className="">
        <ul className="flex gap-6 text-lg font-semibold text-text-primary">
          <li>
            <div>
            <Link href="/about" className="flex items-center">
              <FaInfo size={16} />
              About
            </Link>
            </div>  
          </li>
          <li>
            <Link href="/projects" className="flex items-center gap-1">
              <FaFileCode />
              Projects
            </Link>
          </li>
          <li>
            <Link href="/contact" className="flex items-center gap-1">
              <IoMail />
              Contact Me
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
