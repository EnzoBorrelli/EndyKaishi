"use client";
import { domAnimation, LazyMotion, m, useAnimationControls } from "framer-motion";
import React, { useEffect } from "react";

const variants = {
  hidden: {
    opacity: 0,
    y: 10,
    transition: { delay: 2 },
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const texts = ["Endy Kaishi®", "by Enzo G. Borrelli"];

export default function AnimatedText() {
  const primaryControls = useAnimationControls();
  const secondaryControls = useAnimationControls();

  useEffect(() => {
    async function animateText() {
      while (true) {
        // Animate primary text to visible
        await primaryControls.start("visible");
        // Hold it for a moment, then hide
        await primaryControls.start("hidden");

        // Animate secondary text to visible
        await secondaryControls.start("visible");
        // Hold it, then hide
        await secondaryControls.start("hidden");
      }
    }

    animateText();
  }, [primaryControls, secondaryControls]);

  return (
    <div className="relative w-full h-12 px-2">
      <h2 className="sr-only">{texts[0] + " " + texts[1]}</h2>
      <LazyMotion features={domAnimation}>
      <m.h2
        initial="hidden"
        animate={primaryControls}
        variants={{
          visible: { transition: { staggerChildren: 0.3 } },
          hidden: {},
        }}
        className="my-2 text-2xl font-bold absolute"
        aria-hidden
      >
        {texts[0].split("").map((char, index) => (
          <m.span
            className="inline-block text-brand-200"
            variants={variants}
            key={index}
          >
            {char === " " ? "\u00A0" : char}
          </m.span>
        ))}
      </m.h2>
      <m.h2
        initial="hidden"
        animate={secondaryControls}
        variants={{
          visible: { transition: { staggerChildren: 0.2 } },
          hidden: {},
        }}
        className="my-2 text-2xl font-bold absolute"
        aria-hidden
      >
        {texts[1].split("").map((char, index) => (
          <m.span className="inline-block" variants={variants} key={index}>
            {char === " " ? "\u00A0" : char}
          </m.span>
        ))}
      </m.h2>
      </LazyMotion>
    </div>
  );
}
