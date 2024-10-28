"use client";
import { motion } from "framer-motion";
import React from "react";

const variants = {
  hidden: {
    opacity: 0,
    staggerChildren: 0.2, // Stagger animation in reverse when closing
    staggerDirection: -1,
  },
  visible: {
    opacity: 1,
    transition: {
      type: "spring",
      duration: 0.2,
      staggerChildren: 0.2, // Automatically stagger each child (li)
      when: "beforeChildren",
      repeat: Infinity,
    },
  },
};

export default function AnimatedText({ text }: { text: string }) {
  return (
    <div>
      <h2 className="sr-only">{text}</h2>{" "}
      <motion.h2
        initial="hidden"
        animate="visible"
        className="my-2 text-2xl font-bold"
        aria-hidden
      >
        {text.split("").map((char, index) => (
          <motion.span variants={variants} key={index}>
            {char}
          </motion.span>
        ))}
      </motion.h2>
    </div>
  );
}
