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
    title: "Zephy Discord Bot",
    description:
      "a multipurpose discord bot made with discordjs and typescript",
    tags: ["discordjs", "typescript", "mongodb", "nodejs","i18next"],
    toPageUrl:
      "https://discord.com/oauth2/authorize?client_id=1290767235337687206&permissions=8&integration_type=0&scope=applications.commands+bot",
    toCodeUrl: "https://github.com/EnzoBorrelli/Zephy-alpha",
    img: "/projects/zephy.png",
  },
  {
    title: "EEST Nº5 web page",
    description:
      "the official web page of the technical school EEST Nº5, Argentina",
    tags: ["nextjs", "typescript", "supabase","prisma","firebase CM"],
    toPageUrl: "https://eestn-5-web-page.vercel.app/",
    toCodeUrl: "https://github.com/EnzoBorrelli/EESTN5-webPage",
    img: "/projects/eestn5.png",
  },
  {
    title: "EMROBOTS ecommerce",
    description:
      "an ecommerce web for the final project of school. EM ROBOTS",
    tags: ["reactjs", "javascript", "firebase", "auth0","mercadopagoAPI"],
    toPageUrl: "https://emrobots-virtualshop.netlify.app/Catalogue",
    toCodeUrl: "https://github.com/EnzoBorrelli/EESTN5-webPage",
    img: "/projects/emrobots.png",
  },
];
