import type { IconType } from "react-icons";
import { SiRedux, SiTailwindcss,SiRemix,SiReact,SiSupabase } from "react-icons/si";
import {
  TbBrandTypescript,
  TbBrandNextjs,
  TbBrandPrisma,
} from "react-icons/tb";

interface iSkill{
    name: string;
    icon: IconType
}

export const skills: iSkill[] = [
  {
    name: "typescript",
    icon: TbBrandTypescript,
  },
  {
    name: "react",
    icon: SiReact,
  },
  {
    name: "nextjs",
    icon: TbBrandNextjs,
  },
  {
    name: "prisma",
    icon: TbBrandPrisma,
  },
  {
    name: "supabase",
    icon: SiSupabase,
  },
  {
    name: "tailwind",
    icon: SiTailwindcss,
  },
  {
    name: "remix",
    icon: SiRemix,
  },
  {
    name: "redux",
    icon: SiRedux,
  },
];