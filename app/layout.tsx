import type { Metadata } from "next";
import "./globals.css";

import { Inter } from "next/font/google";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Endy Kaishi®",
  description:
    "Endy is a web developer specializing in Next.js, Discord.js, and TypeScript. With experience in creating dynamic web applications, custom Discord bots, and UI libraries, I build seamless, responsive user experiences. Explore my portfolio to see projects that showcase my expertise in modern web development and backend integrations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={` ${inter.className} size-full overflow-x-hidden bg-brand-500 flex-col`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
