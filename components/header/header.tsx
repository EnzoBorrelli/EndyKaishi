"use client";
import Link from "next/link";
import React from "react";
import Logo from "./logo";
import { FaFileCode } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaInfo } from "react-icons/fa";
import { motion } from "framer-motion";
import NavPC from "./navPC";
import NavMobile from "./navMobile";

export default function Header() {
  return (
    <header className="fixed z-40 flex items-center justify-between w-full h-20 py-4 md:px-8 backdrop-blur ">
      <motion.div
        style={{ color: "rgb(240, 255, 255)" }}
        whileHover={{ color: "rgb(242, 176, 61)" }}
        whileTap={{ color: "rgb(0, 222, 204)" }}
      >
        <Link href="/" className="flex items-center">
          <Logo size={60} />
          <h1 className="mt-1 text-xl">Endy Kaishi®</h1>
        </Link>
      </motion.div>
      <NavPC/>
      <NavMobile/>
    </header>
  );
}
