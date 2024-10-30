"use client";
import {
  domAnimation,
  LazyMotion,
  m,
} from "framer-motion";
import React, { useEffect, useState } from "react";
import { skills } from "./skills";

const sineWaveVariant = (index:number) => ({
  animate: {
    y: [0, -7, 0, 7, 0], // Creates a sine wave effect
    transition: {
      duration: 3.5, // Adjust duration to control speed
      ease: "linear",
      repeat: Infinity, // Loop indefinitely
      delay: index * 0.2, // Offset each skill to create a wave
    },
  },
});

export default function SkillsBlock() {
  const [animateKey, setAnimateKey] = useState(0);

  useEffect(() => {
    // Update key to re-trigger animations on each page load
    setAnimateKey((prevKey) => prevKey + 1);
  }, []);

  return (
    <LazyMotion features={domAnimation}>
      <m.div
        key={animateKey} // Using a unique key to reset animation
        initial={null}
        animate="animate"
        className="grid grid-cols-4 gap-4 px-2 py-4 mt-2 rounded-md bg-gradient-to-tr from-accent-1/70 via-brand-200/70 to-accent-1/70 md:pt-4 md:py-0"
      >
        {skills.map((skill, index) => (
          <m.div
            key={skill.name}
            variants={sineWaveVariant(index)}
            className="flex items-center justify-center p-1 text-3xl rounded-md size-10 bg-brand-400"
          >
            <skill.icon />
          </m.div>
        ))}
      </m.div>
    </LazyMotion>
  );
}
