import { IconType } from "react-icons";
import { FaReact } from "react-icons/fa6";
import { RiSupabaseLine } from "react-icons/ri";
import { SiFramer, SiTailwindcss} from "react-icons/si";
import { TbBrandTypescript, TbBrandNextjs, TbBrandPrisma } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";

interface Skill  {
    name:string,
    icon: IconType,
    isRemarkable:boolean
}
export const skills : Skill[] = [
  {
    name: "typescript",
    icon: TbBrandTypescript,
    isRemarkable: true,
  },
  {
    name: "react",
    icon: FaReact,
    isRemarkable: true,
  },
  {
    name: "nextjs",
    icon: TbBrandNextjs,
    isRemarkable: true,
  },
  {
    name: "prisma",
    icon: TbBrandPrisma,
    isRemarkable: true,
  },
  {
    name: "supabase",
    icon: RiSupabaseLine,
    isRemarkable: false,
  },
  {
    name: "tailwind",
    icon: SiTailwindcss,
    isRemarkable: false,
  },
  {
    name: "framer",
    icon: SiFramer,
    isRemarkable: false,
  },
  {
    name: "vscode",
    icon: VscVscode,
    isRemarkable: false,
  },
];
