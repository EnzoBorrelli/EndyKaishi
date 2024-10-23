"use client";

import { motion } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      <motion.div
        style={{
          position: "absolute",
          width: "100dvw",
          height: "100dvh",
          display: "flex",
          zIndex: "20",
          overflow:"hidden"
        }}
      >
        <motion.div
          style={{
            position: "absolute",
            width: "100dvw",
            height: "100dvh",
            scale:"1.5",
            backgroundColor: "rgb(0, 222, 204)",
          }}
          initial={{ x: "-100dvw", y: "100dvh", rotate: 45 }}
          animate={{ x: "100dvw", y: "-150dvh", rotate: 45 }}
          transition={{ ease: "easeInOut", duration: 0.5 }} // Smooth transition
        ></motion.div>
        <motion.div
          style={{
            position: "absolute",
            width: "100dvw",
            height: "100dvh",
            scale:"1.5",
            backgroundColor: "rgb(10, 49, 64)",
          }}
          initial={{ x: "-100dvw", y: "100dvh", rotate: 45 }}
          animate={{ x: "100dvw", y: "-150dvh", rotate: 45 }}
          transition={{ ease: "easeInOut", duration: 0.5, delay: 0.1 }}
        ></motion.div>
        <motion.div
          style={{
            position: "absolute",
            width: "100dvw",
            height: "100dvh",
            scale:"1.5",
            backgroundColor: "rgb(22, 128, 140)",
          }}
          initial={{ x: "-100dvw", y: "100dvh", rotate: 45 }}
          animate={{ x: "100dvw", y: "-150dvh", rotate: 45 }}
          transition={{ ease: "easeInOut", duration: 0.5, delay: 0.2 }}
        ></motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeIn", duration: 1.7 }}
      >
        {children}
      </motion.div>
    </div>
  );
}
