import { motion } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";
import { FaInfo, FaFileCode } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import MenuBtn from "./menuBtn";

const variants = {
  ul: {
    open: {
      x: 0,
      transition: {
        duration: 0.5,
        type: "spring",
        staggerChildren: 0.1, // Automatically stagger each child (li)
        when: "beforeChildren",
      },
    },
    closed: {
      x: "100dvw",
      transition: {
        delay: 0.2,
        duration: 0.8,
        type: "spring",
        staggerChildren: 0.1, // Stagger animation in reverse when closing
        staggerDirection: -1,
      },
    },
  },
  li: {
    open: {
        x: 0,
      transition: { duration: 0.5 },
    },
    closed: {
        x: "100dvw",
      transition: { duration: 0.5 },
    },
  },
};

export default function NavMobile() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      className="w-40 mt-20 md:hidden"
    >
      <button
        className="flex justify-end w-full"
        onClick={() => setIsOpen(!isOpen)}
      >
        <MenuBtn isActive={isOpen} />
      </button>
      <motion.ul
        variants={variants.ul}
        className="flex-col gap-6 text-lg font-semibold bg-brand-400 text-text-primary"
      >
        <motion.li className="mb-2" variants={variants.li}>
          <motion.div
            whileHover={{ y: -5, scale: 1.2, color: "rgb(0, 222, 204)" }}
            whileTap={{
              scale: 1,
              color: "rgb(242, 176, 61)",
              transition: { duration: 0.1, ease: "easeIn" },
            }}
          >
            <Link href="/about" className="flex items-center justify-center">
              <FaInfo size={16} />
              About
            </Link>
          </motion.div>
        </motion.li>
        <motion.li className="mb-2" variants={variants.li}>
          <motion.div
            whileHover={{ y: -5, scale: 1.2, color: "rgb(0, 222, 204)" }}
            whileTap={{
              scale: 1,
              color: "rgb(242, 176, 61)",
              transition: { duration: 0.1, ease: "easeIn" },
            }}
          >
            <Link
              href="/projects"
              className="flex items-center justify-center gap-1"
            >
              <FaFileCode />
              Projects
            </Link>
          </motion.div>
        </motion.li>
        <motion.li variants={variants.li}>
          <motion.div
            whileHover={{ y: -5, scale: 1.2, color: "rgb(0, 222, 204)" }}
            whileTap={{
              scale: 1,
              color: "rgb(242, 176, 61)",
              transition: { duration: 0.1, ease: "easeIn" },
            }}
          >
            <Link
              href="/contact"
              className="flex items-center justify-center gap-1"
            >
              <IoMail />
              Contact Me
            </Link>
          </motion.div>
        </motion.li>
      </motion.ul>
    </motion.nav>
  );
}
