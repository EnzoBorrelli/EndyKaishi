import { socials } from "consts/socials";
import ScrollTopBtn from "./scrollTopBtn";

export default function Footer() {
  return (
    <footer className="items-center justify-between px-4 py-4 md:px-8 w-dvw md:flex bg-brand-400 ">
      <ScrollTopBtn/>
      <h2 className="mb-4 text-center md:mb-0 md:text-lg text-text-secondary pointer-events-none select-none">
        © 2024–{new Date().getFullYear()}
        <span className="font-semibold">Endy Kaishi®</span> by Enzo Borrelli
      </h2>
      <div className="flex items-center justify-center gap-4 text-lg md:gap-6 md:text-3xl">
        {socials.map((social) => (
          <a
            className={`p-2 rounded-full ring-2 ring-text-secondary ${social.color} hover:-translate-y-1.5 hover:scale-110 transition-all duration-150`}
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <social.icon />
          </a>
        ))}
      </div>
    </footer>
  );
}
