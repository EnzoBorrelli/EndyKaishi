"use client";
import React from "react";
import { Socials } from "./socials";
import { domAnimation, LazyMotion, m } from "framer-motion";
import Mailto from "./mailto";

export default function Footer() {
  return (
    <footer className="items-center justify-between px-4 py-4 md:px-8 w-dvw md:flex bg-brand-400 ">
      <h2 className="mb-4 text-center md:mb-0 md:text-lg text-text-secondary">
        © 2024 Endy Kaishi® by Enzo Borrelli
      </h2>
      <div className="flex items-center justify-center gap-4 text-lg md:gap-6 md:text-3xl">
        <Mailto/>
        <LazyMotion features={domAnimation}>
        {Socials.map((social) => (
          <m.a
            whileHover={{
              y: -8,
              scale: 1.2,
              transition: { duration: 0.2, type: "spring" },
            }}
            className={`p-2 rounded-full ring-2 ring-text-secondary ${social.color}`}
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <social.icon />
          </m.a>
        ))}
        </LazyMotion>
      </div>
    </footer>
  );
}
