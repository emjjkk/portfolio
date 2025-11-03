import Script from "next/script";
import type { Metadata } from "next";
import { Outfit, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navigation from "@/components/navigation";
import DarkMode from "@/components/dark-mode";

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
      <head>
        {/* Umami Analytics Script */}
        <Script
          src="https://cloud.umami.is/script.js"
          data-website-id="5a665f32-69be-40cf-abea-7923b603a548"
          strategy="afterInteractive"
        />
      </head>
      <body
        className={`${geistSans.className} ${geistMono.variable} antialiased w-full h-screen flex bg-white text-black dark:bg-neutral-950 dark:text-neutral-100`}
      >
        <DarkMode />
        <Navigation />
        {children}
      </body>
    </html>
  );
}
