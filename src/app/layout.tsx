import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTopButton from "@/components/BackToTopButton"; // Import the new component

const openSans = Open_Sans({ subsets: ["latin"], variable: "--font-open-sans" });

export const metadata: Metadata = {
  title: "MusicMachine - Professional MIDI Files",
  description: "Your source for professional MIDI files for all your VST instruments.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${openSans.variable}`}>
      <body>
        <Header />
        <main className="container mx-auto px-4 py-8 min-h-[calc(100vh-200px)]"> 
          {children}
        </main>
        <Footer />
        <BackToTopButton /> {/* Add the button here */}
      </body>
    </html>
  );
}

