export interface ProjectType {
  title: string;
  description: string;
  tags: string[];
  toPageUrl: string;
  toCodeUrl: string;
  img: string;
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
    toPageUrl: "https://endykaishi.gumroad.com/l/zephystarterkit",
    toCodeUrl: "",
    img: "/mockups/mockup_zephy.png",
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
    toPageUrl: "https://pacman-remixed.vercel.app/",
    toCodeUrl: "https://github.com/EnzoBorrelli/pacman-remixed",
    img: "/mockups/mockup_pacman_remixed.png",
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
    toPageUrl: "https://eestn-5-web-page.vercel.app/",
    toCodeUrl: "https://github.com/EnzoBorrelli/EESTN5-webPage",
    img: "/mockups/mockup_eestn5.png",
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
    toPageUrl: "https://hauntedlegendsmap.vercel.app/",
    toCodeUrl: "https://github.com/EnzoBorrelli/hauntedlegendsmap",
    img: "/mockups/mockup_haunted.png",
  },
  {
    title: "EMROBOTS school prototype",
    description:
      "A virtual shop prototype for the EMROBOTS school project, featuring a catalog of products. This project was made for learning purposes. Further development should not be expected.",
    tags: ["react.js", "javascript", "firebase", "auth0", "mercadopagoAPI"],
    toPageUrl: "https://emrobots-virtualshop.netlify.app/",
    toCodeUrl: "https://github.com/EnzoBorrelli/EMR-WebAPP",
    img: "/mockups/nomockup_emrobots.png",
  },
];
