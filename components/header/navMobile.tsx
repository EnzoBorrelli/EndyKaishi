import { domAnimation, LazyMotion, m } from "framer-motion";
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
    <LazyMotion features={domAnimation}>
      <m.nav
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
        <m.ul
          variants={variants.ul}
          className="flex-col gap-6 text-lg font-semibold bg-brand-400 text-text-primary"
        >
          {/* 
        <m.li className="mb-2" variants={variants.li}>
          <m.div
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
          </m.div>
        </m.li>
        <m.li className="mb-2" variants={variants.li}>
          <m.div
            whileHover={{ y: -5, scale: 1.2, color: "rgb(0, 222, 204)" }}
            whileTap={{
              scale: 1,
              color: "rgb(242, 176, 61)",
              transition: { duration: 0.1, ease: "easeIn" },
            }}
          >
            <Link
              href="/portfolio"
              className="flex items-center justify-center gap-1"
            >
              <FaFileCode />
              Portfolio
            </Link>
          </m.div>
        </m.li>
        */}
          <m.li variants={variants.li}>
            <m.div
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
            </m.div>
          </m.li>
        </m.ul>
      </m.nav>
    </LazyMotion>
  );
}
