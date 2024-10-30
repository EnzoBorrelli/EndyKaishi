import { IconType } from "react-icons";
import { FaReact } from "react-icons/fa6";
import { RiSupabaseLine } from "react-icons/ri";
import { SiFramer, SiTailwindcss } from "react-icons/si";
import {
  TbBrandTypescript,
  TbBrandNextjs,
  TbBrandPrisma,
} from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";

interface Skill {
  name: string;
  icon: IconType;
}
export const skills: Skill[] = [
  {
    name: "typescript",
    icon: TbBrandTypescript,
  },
  {
    name: "react",
    icon: FaReact,
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
    icon: RiSupabaseLine,
  },
  {
    name: "tailwind",
    icon: SiTailwindcss,
  },
  {
    name: "framer",
    icon: SiFramer,
  },
  {
    name: "vscode",
    icon: VscVscode,
  },
];
