import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { FaInfo, FaFileCode } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

export default function NavPC() {
  return (
    <nav className="hidden md:block">
      <ul className="flex gap-6 text-lg font-semibold text-text-primary">
        <li>
          <motion.div
            whileHover={{ y: -5, scale: 1.2, color: "rgb(0, 222, 204)" }}
            whileTap={{
              scale: 1,
              color: "rgb(242, 176, 61)",
              transition: { duration: 0.1, ease: "easeIn" },
            }}
          >
            <Link href="/about" className="flex items-center">
              <FaInfo size={16} />
              About
            </Link>
          </motion.div>
        </li>
        <li>
          <motion.div
            whileHover={{ y: -5, scale: 1.2, color: "rgb(0, 222, 204)" }}
            whileTap={{
              scale: 1,
              color: "rgb(242, 176, 61)",
              transition: { duration: 0.1, ease: "easeIn" },
            }}
          >
            <Link href="/portfolio" className="flex items-center gap-1">
              <FaFileCode />
              Portfolio
            </Link>
          </motion.div>
        </li>
        <li>
          <motion.div
            whileHover={{ y: -5, scale: 1.2, color: "rgb(0, 222, 204)" }}
            whileTap={{
              scale: 1,
              color: "rgb(242, 176, 61)",
              transition: { duration: 0.1, ease: "easeIn" },
            }}
          >
            <a
              href="mailto:enzoborrelli_official@outlook.com"
              className="flex items-center gap-1"
            >
              <IoMail />
              Contact Me
            </a>
          </motion.div>
        </li>
      </ul>
    </nav>
  );
}
