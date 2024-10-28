import { Socials } from "@/components/footer/socials";
import Projects from "@/components/home/projects";
import { skills } from "@/components/home/skills";
import { ProjectsData } from "@/components/home/projectsdata";
import AnimatedText from "@/components/home/animatedText";

export default function Home() {
  return (
    <main className="px-10 py-20 text-center size-full bg-brand-500 text-text-primary">
      <section className="flex justify-center gap-2 px-10 py-4 bg-red-400">
        <div className="w-1/3 text-left bg-blue-500">
          <AnimatedText text="Endy Kaishi®"/>
          <p className="text-lg">
            a frontend developer specialized in react and nextjs, along wth
            typescript
          </p>
          <h4 className="text-sm text-text-secondary">
            Located in Buenos Aires, Argentina
          </h4>
          <div className="flex items-center justify-start gap-4 mt-2 bg-green-300">
            {Socials.map((social) => (
              <a
                className="p-1 rounded-md bg-brand-400 ring-2 ring-text-secondary"
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <social.icon />
              </a>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-4 gap-4 mt-2 bg-orange-300">
          {skills.map((skill) => (
            <div
              className="flex items-center justify-center p-1 text-3xl rounded-md size-10 bg-brand-400 "
              key={skill.name}
            >
              <skill.icon />
            </div>
          ))}
        </div>
      </section>
      <section className="flex-col justify-center gap-2 px-10 py-4 mt-2">
        <h2 className="my-4 text-2xl font-bold">My recent Work</h2>
        <div className="grid grid-cols-3">
          {ProjectsData.map((project, index) => (
            <Projects projectData={project} delay={index} />
          ))}
        </div>
      </section>
    </main>
  );
}
