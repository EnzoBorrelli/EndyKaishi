"use client";
import Image from "next/image";
import React from "react";
import { ProjectType } from "./projectsdata";
import { LazyMotion, domAnimation, m } from "framer-motion";
import Badge from "./badge";

export default function Projects({
  projectData,
  delay,
}: {
  projectData: ProjectType;
  delay: number;
}) {
  return (
    <LazyMotion features={domAnimation}>
      <m.article
        initial={{ x: "100dvw" }}
        animate={{ x: "0" }}
        transition={{ type: "spring", duration: 0.7, delay: delay * 0.5 }}
        className="relative rounded text-left bg-brand-400 max-w-[350px] ring-2 ring-brand-200 mb-6"
      >
        <Badge ID={projectData.badge!} />
        <a
          href={projectData.externalLinks[0].url}
          target="_blank"
          rel="noopener noreferrer"
        >
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
          <p className="mb-2 text-sm h-20">{projectData.description}</p>
          <div className="flex flex-wrap items-center justify-start gap-2 h-10 mb-2">
            {projectData.tags.map((tag, index) => (
              <span
                className="px-2 text-xs rounded-lg size-fit bg-brand-300"
                key={index}
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex items-center justify-center gap-6 mt-4 mb-2">
            {projectData.externalLinks.map((link, index) => (
              <m.a
                key={index}
                whileHover={{
                  y: -3,
                  scale: 1.2,
                  transition: { duration: 0.3, type: "spring" },
                }}
                className="flex items-center justify-center gap-2 px-2 rounded-sm bg-accent-1 text-brand-500"
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <link.icon />
                {link.label}
              </m.a>
            ))}
          </div>
        </div>
      </m.article>
    </LazyMotion>
  );
}
