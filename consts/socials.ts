import {
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaGithub,
  FaXTwitter,
} from "react-icons/fa6";

import type { IconType } from "react-icons";
import { LuMailPlus } from "react-icons/lu";

interface iSocial {
  name: string;
  icon: IconType;
  url: string;
  color: string;
}

export const socials: iSocial[] = [
  {
    name: "MailMe",
    icon: LuMailPlus,
    url: "mailto:enzoborrelli_official@outlook.com",
    color: "bg-gradient-to-tr from-brand-100 via-brand-300 to-brand-100",
  },
  {
    name: "GitHub",
    icon: FaGithub,
    url: "https://github.com/EnzoBorrelli",
    color: "bg-black",
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    url: "https://www.instagram.com/endy_codex/",
    color:
      "bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600",
  },
  {
    name: "Twitter",
    icon: FaXTwitter,
    url: "https://x.com/Endy_Kaishi",
    color: "bg-black",
  },
  {
    name: "Youtube",
    icon: FaYoutube,
    url: "https://www.youtube.com/@EndysCodex",
    color: "bg-red-600",
  },
  {
    name: "Linkedin",
    icon: FaLinkedinIn,
    url: "https://linkedin.com/in/enzoborrelli",
    color: "bg-sky-600",
  },
];
