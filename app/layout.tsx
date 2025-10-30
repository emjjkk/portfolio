import type { Metadata } from "next";
import { Outfit, Geist_Mono, DM_Sans } from "next/font/google";
import "./globals.css";

import Navigation from "@/components/navigation"

const geistSans = Outfit({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Emmanuel Alabi (@emjjkk)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.className} ${geistMono.variable} antialiased w-full h-screen flex bg-white text-black`}>
        <Navigation/>
        { children }
      </body>
    </html>
  );
}
