import { domAnimation, LazyMotion, m } from "framer-motion";
import React from "react";
import { IoMail } from "react-icons/io5";

export default function NavPC() {
  return (
    <nav className="hidden md:block">
      <ul className="flex gap-6 text-lg font-semibold text-text-primary">
        <LazyMotion features={domAnimation}>
          <li>
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
          </li>
        </LazyMotion>
      </ul>
    </nav>
  );
}
