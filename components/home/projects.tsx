"use client";
import Image from "next/image";
import React from "react";
import { ProjectType } from "./projectsdata";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaCodeBranch } from "react-icons/fa6";
import { motion } from "framer-motion";

export default function Projects({
  projectData,
  delay,
}: {
  projectData: ProjectType;
  delay: number;
}) {
  return (
    <motion.article
      initial={{ x: "100dvw" }}
      animate={{ x: "0" }}
      transition={{ type: "spring", duration: 0.7, delay: delay * 0.5 }}
      className="rounded text-left bg-brand-400 max-w-[350px] ring-2 ring-brand-200"
    >
      <a href={projectData.toPageUrl} target="_blank" rel="noopener noreferrer">
        <Image
          className="object-cover rounded-t mb-2 max-w-[350px] aspect-video hover:blur-sm transition-all duration-100"
          src={projectData.img}
          alt={projectData.title}
          height={350}
          width={350}
        />
      </a>
      <div className="px-2 pb-1">
        <h4 className="my-1 font-bold">{projectData.title}</h4>
        <p className="mb-2 text-sm">{projectData.description}</p>
        <div className="grid grid-flow-row grid-cols-4 grid-rows-2 gap-2 justify-items-start">
          {projectData.tags.map((tag, index) => (
            <span
              className={`${
                tag.length > 10 ? "col-span-2" : "col-span-1"
              } px-2 text-sm rounded-lg size-fit bg-brand-300`}
              key={index}
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-center gap-6 mt-4 mb-2">
          <motion.a
            whileHover={{
              y: -8,
              scale: 1.2,
              transition: { duration: 0.2, type: "spring" },
            }}
            className="flex items-center justify-center gap-2 px-2 rounded-sm bg-accent-1 text-brand-500"
            href={projectData.toPageUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaExternalLinkAlt />
            {projectData.title === "Zephy Discord Bot"
              ? "Invite me"
              : "website"}
          </motion.a>
          <motion.a
            whileHover={{
              y: -8,
              scale: 1.2,
              transition: { duration: 0.2, type: "spring" },
            }}
            className="flex items-center justify-center gap-2 px-2 rounded-sm bg-accent-1 text-brand-500"
            href={projectData.toCodeUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaCodeBranch />
            source code
          </motion.a>
        </div>
      </div>
    </motion.article>
  );
}
