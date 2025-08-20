import type { IconType } from "react-icons";
import { BADGES_ID } from "./badges";
import { FaExternalLinkAlt, FaCodeBranch } from "react-icons/fa";
import { GiPumpkinMask } from "react-icons/gi";
import { RiGameFill } from "react-icons/ri";
import { IoCodeDownload } from "react-icons/io5";

interface iUrl {
  url: string;
  label: string;
  icon: IconType;
}

interface iProject {
  title: string;
  description: string;
  tags: string[];
  urls: iUrl[];
  image: string;
  badge?: BADGES_ID;
}

export const projects: iProject[] = [
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
    urls: [
      {
        url: "https://endykaishi.gumroad.com/l/zephystarterkit",
        label: "Get it on Gumroad",
        icon: FaExternalLinkAlt,
      },
    ],
    image: "/mockups/zephy.png",
    badge: BADGES_ID.FEATURED,
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
    urls: [
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
    image: "/mockups/pacman.png",
    badge: BADGES_ID.NEW,
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
    urls: [
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
    image: "/mockups/eest5.png",
    badge: BADGES_ID.UPDATED,
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
    urls: [
      {
        url: "https://www.npmjs.com/package/create-endy-pixigame?activeTab=readme",
        label: "get the package",
        icon: IoCodeDownload,
      },
    ],
    image: "/mockups/endynpm.png",
    badge: BADGES_ID.NEW,
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
    urls: [
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
    image: "/mockups/haunted.png",
  },

  {
    title: "pixUNO | pixelated UNO",
    description:
      "A pixelated version of the classic UNO card game, featuring a unique art style and engaging gameplay. This project will be discontinued until further notice",
    tags: [
      "remix",
      "Typescript",
      "redux",
      "pixiJS",
      "Howler.js",
      "sprite-based",
      "cross-platform",
    ],
    urls: [
      {
        url: "https://github.com/EnzoBorrelli/pixuno",
        label: "Source code",
        icon: FaCodeBranch,
      },
    ],
    image: "/mockups/pixuno.png",
    badge: BADGES_ID.ARCHIVED,
  },
  {
    title: "EMROBOTS school prototype",
    description:
      "A virtual shop prototype for the EMROBOTS school project, featuring a catalog of products. This project was made for learning purposes. Further development should not be expected.",
    tags: ["react.js", "javascript", "firebase", "auth0", "mercadopagoAPI"],
    urls: [
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
    image: "/mockups/emrobots.png",
    badge: BADGES_ID.ARCHIVED,
  },
];
