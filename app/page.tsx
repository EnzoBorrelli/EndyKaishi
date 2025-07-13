'use client'
import Projects from "@/components/home/projects";
import { ProjectsData } from "@/components/home/projectsdata";
import AnimatedText from "@/components/home/animatedText";
import SocialsComp from "@/components/home/socials";
import SkillsBlock from "@/components/home/skillsBlock";
import VideoCards from "@/components/home/videoCards";

export default function Home() {
  return (
    <main className="px-10 pt-20 text-center md:py-20 size-full bg-brand-500 text-text-primary">
      <section className="justify-center gap-2 px-2 py-4 md:flex md:px-10">
        <div className="w-full mb-8 text-left md:w-1/3 md:mb-0">
          <AnimatedText/>
          <p className="text-lg">
            Crafting interactive web experiences using React, TypeScript, and the tools that bring ideas to life.
          </p>
          <h4 className="text-sm font-light text-text-secondary">
            Located in Buenos Aires, Argentina
          </h4>
          <SocialsComp/>
        </div>
        <SkillsBlock/>
      </section>
      <section className="flex-col justify-center gap-2 py-4 mt-2 md:px-10">
        <h2 className="my-4 text-2xl font-bold">Lastest Videos</h2>
        <VideoCards/>
      </section>
      <section className="flex-col justify-center gap-2 py-4 mt-2 md:px-10">
        <h2 className="my-4 text-2xl font-bold">Recent Work</h2>
        <div className="grid grid-cols-1 justify-items-center md:grid-cols-3">
          {ProjectsData.map((project, index) => (
            <Projects key={index} projectData={project} delay={index} />
          ))}
        </div>
      </section>
    </main>
  );
}
