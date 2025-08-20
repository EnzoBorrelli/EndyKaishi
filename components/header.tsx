import ContactBtn from "ui/contactBtn";
import Logo from "ui/logo";

export default function Header() {
  return (
    <header className="fixed z-40 flex items-center justify-between h-20 px-4 py-4 w-dvw md:px-8 backdrop-blur ">
      <div className="flex items-center select-none text-text-primary">
        <Logo size={60} />
        <h1 className="mt-1 text-xl">Endy Kaishi®</h1>
      </div>
      <ContactBtn />
    </header>
  );
}
