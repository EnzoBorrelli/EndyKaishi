import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Endy Kaishi®" },
    {
      name: "description",
      content: "Welcome to Endy Kaishi's personal website",
    },
  ];
}

export default function Home() {
  return (
    <main className="w-full h-screen flex items-center justify-center">
      <h1>hi</h1>
    </main>
  );
}
