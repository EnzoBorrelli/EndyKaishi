import { IconType } from "react-icons";
import { FaExternalLinkAlt, FaCodeBranch } from "react-icons/fa";
import { GiPumpkinMask } from "react-icons/gi";
import { RiGameFill } from "react-icons/ri";
import { BADGES } from "./badges";
import { IoCodeDownload } from "react-icons/io5";

type externalLinks = {
  url: string;
  label: string;
  icon: IconType;
};

export interface ProjectType {
  title: string;
  description: string;
  tags: string[];
  externalLinks: externalLinks[];
  img: string;
  badge?: number;
}

export const ProjectsData: ProjectType[] = [
  {
    title: "Zephy's Starter Kit",
    description:
      "A modular and scalable Discord bot template built with TypeScript,Supabase, and i18n support. Perfect for developers looking to kickstart their Discord bot projects with a ready-to-use solution.",
    tags: [
      "Discord.js",
      "TypeScript",
      "Node.js",
      "i18n",
      "supabase",
      "modular",
      "ready-to-use",
    ],
    externalLinks: [
      {
        url: "https://endykaishi.gumroad.com/l/zephystarterkit",
        label: "Get it on Gumroad",
        icon: FaExternalLinkAlt,
      },
    ],
    img: "/mockups/mockup_zephy.png",
    badge: BADGES.FEATURED,
  },
  {
    title: "Pacman Remixed",
    description:
      "a remake of the classic Pacman. This project is not affiliated with, endorsed by, or sponsored by Bandai Namco. All rights to the original Pac-Man game belong to their respective owners.",
    tags: [
      "Remix",
      "Typescrpt",
      "Redux",
      "PixiJS",
      "Howler.js",
      "PC-only",
      "sprite-based",
    ],
    externalLinks: [
      {
        url: "https://pacman-remixed.vercel.app/",
        label: "Play it now",
        icon: RiGameFill,
      },
      {
        url: "https://github.com/EnzoBorrelli/pacman-remixed",
        label: "Source code",
        icon: FaCodeBranch,
      },
    ],
    img: "/mockups/mockup_pacman_remixed.png",
    badge:BADGES.NEW
  },
  {
    title: "EEST Nº5 web page",
    description:
      "institutional web page for the EEST Nº5 school in Argentina. Due to internal circumstances, this page is not officially affiliated with the school. You can still take a look at this demo.",
    tags: [
      "Next.js",
      "Typescript",
      "supabase",
      "prisma",
      "auth.js",
      "firebase CM",
    ],
    externalLinks: [
      {
        url: "https://eestn-5-web-page.vercel.app/",
        label: "Visit the page",
        icon: FaExternalLinkAlt,
      },
      {
        url: "https://github.com/EnzoBorrelli/EESTN5-webPage",
        label: "Source code",
        icon: FaCodeBranch,
      },
    ],
    img: "/mockups/mockup_eestn5.png",
    badge: BADGES.UPDATED,
  },
  {
    title: "create-endy-pixigame",
    description:
      "A custom Remix + PixiJS project generator for pixel art web games — powered by Vite, Redux, and TypeScript.",
    tags: [
      "Remix",
      "Typescript",
      "Redux",
      "PixiJS",
      "Howler.js",
      "npm package",
      "template",
    ],
    externalLinks: [
      {
        url: "https://www.npmjs.com/package/create-endy-pixigame?activeTab=readme",
        label: "get the package",
        icon: IoCodeDownload,
      },
    ],
    img: "/mockups/create-endy-pixigame.jpg",
    badge: BADGES.NEW,
  },
  {
    title: "Haunted Legends Map",
    description:
      "An interactive map containing urban legends across the world. This was created as a personal side-project to celebrate Halloween 2024. It can be expected to receive updates in the future.",
    tags: [
      "nextjs",
      "Typescript",
      "maboxgl",
      "framerMotion",
      "Halloween",
      "interactive map",
    ],
    externalLinks: [
      {
        url: "https://hauntedlegendsmap.vercel.app/",
        label: "See the legends",
        icon: GiPumpkinMask,
      },
      {
        url: "https://github.com/EnzoBorrelli/hauntedlegendsmap",
        label: "Source code",
        icon: FaCodeBranch,
      },
    ],
    img: "/mockups/mockup_haunted.png",
  },
  {
    title: "EMROBOTS school prototype",
    description:
      "A virtual shop prototype for the EMROBOTS school project, featuring a catalog of products. This project was made for learning purposes. Further development should not be expected.",
    tags: ["react.js", "javascript", "firebase", "auth0", "mercadopagoAPI"],
    externalLinks: [
      {
        url: "https://emrobots-virtualshop.netlify.app/",
        label: "visit the page",
        icon: FaExternalLinkAlt,
      },
      {
        url: "https://github.com/EnzoBorrelli/EMR-WebAPP",
        label: "Source code",
        icon: FaCodeBranch,
      },
    ],
    img: "/mockups/nomockup_emrobots.png",
    badge: BADGES.ARCHIVED,
  },
];
