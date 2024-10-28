import { motion } from "framer-motion";
import { LuMailPlus } from "react-icons/lu";

export default function Mailto() {
  return (
    <motion.a
      whileHover={{
        y: -8,
        scale: 1.2,
        transition: { duration: 0.2, type: "spring" },
      }}
      className="p-2 text-white rounded-full ring-2 bg-gradient-to-tr from-brand-100 via-brand-300 to-brand-100 ring-text-secondary"
      href="mailto:enzoborrelli_official@outlook.com"
      target="_blank"
      rel="noopener noreferrer"
    >
      <LuMailPlus />
    </motion.a>
  );
}
