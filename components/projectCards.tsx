import { projects} from "consts/projects";
import Badge from "ui/badge";

export default function ProjectCards() {
  return (
    <div className="grid grid-cols-1 justify-items-center md:grid-cols-3">
      {projects.map((project, index) => (
        <article
          key={index}
          className="relative rounded text-left bg-brand-400 max-w-[350px] ring-2 ring-brand-200 mb-6"
        >
          <Badge ID={project.badge!} />
          <a
            href={project.urls[0].url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="object-cover rounded-t mb-2 max-w-[350px] aspect-video hover:blur-sm transition-all duration-100"
              src={project.image}
              alt={project.title}
            ></img>
          </a>
          <div className="px-2 pb-1">
            <h4 className="my-1 font-bold">{project.title}</h4>
            <p className="mb-2 text-sm h-20">{project.description}</p>
            <div className="flex flex-wrap items-center justify-start gap-2 h-10 mb-2">
              {project.tags.map((tag, index) => (
                <span
                  className="px-2 text-xs rounded-lg size-fit bg-brand-300"
                  key={index}
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex items-center justify-center gap-6 mt-4 mb-2">
              {project.urls.map((link, index) => (
                <a
                  key={index}
                  className="flex items-center justify-center gap-2 px-2 rounded-sm bg-accent-1 text-brand-500 hover:-translate-y-1.5 hover:scale-110 transition-all duration-150"
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <link.icon />
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
