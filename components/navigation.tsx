"use client";

import { LuHouse, LuUserRound, LuFolder, LuCarrot, LuSend } from "react-icons/lu";
import { usePathname } from "next/navigation";
import { useState } from "react";
import type { IconType } from "react-icons"; 

interface NavLink {
  href: string;
  icon: IconType;
  label: string;
}

export default function Navigation() {
  const pathname = usePathname();
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const links: NavLink[] = [
    { href: "/", icon: LuHouse, label: "Home" },
    { href: "/about", icon: LuUserRound, label: "About" },
    { href: "/projects", icon: LuFolder, label: "Projects" },
    { href: "/goodies", icon: LuCarrot, label: "Goodies" },
    { href: "/contact", icon: LuSend, label: "Contact" },
  ];

  return (
    <div className="hidden w-[30%] h-full p-6 md:flex items-center justify-end border-r border-slate-300 dark:border-slate-700">
      <div className="flex flex-col items-end gap-4">
        {links.map((link) => {
          const Icon = link.icon;
          const isActive = pathname === link.href;

          return (
            <div
              key={link.href}
              className="relative flex items-center gap-2"
              onMouseEnter={() => setHoveredLink(link.href)}
              onMouseLeave={() => setHoveredLink(null)}
            >
              {isActive && <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />}

              {!isActive && hoveredLink === link.href && (
                <span className="absolute right-full mr-2 text-sm text-slate-600 whitespace-nowrap">
                  {link.label}
                </span>
              )}

              <a href={link.href}>
                <Icon
                  className={`text-xl transition-colors ${
                    isActive ? "text-blue-500" : "text-slate-500 hover:text-blue-400"
                  }`}
                />
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
