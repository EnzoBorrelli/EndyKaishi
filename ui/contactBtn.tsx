import { IoMail } from "react-icons/io5";

export default function ContactBtn() {
  return (
    <div>
      <a
        href="mailto:enzoborrelli_official@outlook.com"
        className="flex items-center gap-1 text-xl font-semibold hover:text-brand-200 hover:scale-110 transition-all duration-100"
      >
        <IoMail />
        Contact Me
      </a>
    </div>
  );
}
