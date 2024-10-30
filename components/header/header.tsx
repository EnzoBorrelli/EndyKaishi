"use client";
import Logo from "./logo";
import NavPC from "./navPC";
import { IoMail } from "react-icons/io5";

export default function Header() {
  return (
    <header className="fixed z-40 flex items-center justify-between h-20 px-4 py-4 w-dvw md:px-8 backdrop-blur ">
      <div
        className="flex items-center select-none text-text-primary"
      >
        <Logo size={60} />
        <h1 className="mt-1 text-xl">Endy Kaishi®</h1>
      </div>
      <a
        href="mailto:enzoborrelli_official@outlook.com"
        className="md:hidden text-text-primary"
      >
        <IoMail size={30}/>
      </a>
      <NavPC />
    </header>
  );
}
