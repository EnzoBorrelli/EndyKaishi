import { socials } from "consts/socials";

export default function SocialList() {
  return (
    <div className="flex items-center justify-center md:justify-start gap-4 mt-2">
      {socials.slice(1, socials.length).map((social, index) => (
        <a
          className="p-1 rounded-md bg-brand-400 ring-2 ring-text-secondary hover:-translate-y-1.5 hover:scale-110 transition-all duration-150"
          key={index}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <social.icon />
        </a>
      ))}
    </div>
  );
}
