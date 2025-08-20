import AnimatedText from "components/animatedText";
import type { Route } from "./+types/home";
import SocialList from "components/socialList";
import SkillsBlock from "components/skillsBlock";
import VideoCards from "components/videoCards";
import ProjectCards from "components/projectCards";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Endy Kaishi®" },
    {
      name: "description",
      content: "Welcome to Endy Kaishi's personal website",
    },
  ];
}

export default function Home() {
  return (
    <main className="px-10 pt-20 text-center md:py-20 size-full bg-brand-500 text-text-primary">
      <section className="justify-center gap-2 px-2 py-4 md:flex md:px-10">
        <div className="w-full mb-8 text-left md:w-1/3 md:mb-0">
          <AnimatedText />
          <p className="text-lg pointer-events-none select-none">
            Crafting interactive web experiences using React, TypeScript, and
            the tools that bring ideas to life.
          </p>
          <h4 className="text-sm font-light text-text-secondary pointer-events-none select-none">
            Located in Buenos Aires, Argentina
          </h4>
          <SocialList />
        </div>
        <SkillsBlock />
      </section>
      <section className="flex-col justify-center gap-2 py-4 mt-2 md:px-10">
        <h2 className="my-4 text-2xl font-bold pointer-events-none select-none">Lastest Videos</h2>
        <VideoCards />
      </section>
      <section className="flex-col justify-center gap-2 py-4 mt-2 md:px-10">
        <h2 className="my-4 text-2xl font-bold pointer-events-none select-none">Recent Work</h2>
        <ProjectCards />
      </section>
    </main>
  );
}
