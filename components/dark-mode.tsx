"use client";

import { useEffect } from "react";

export default function DarkMode() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const mq = window.matchMedia("(prefers-color-scheme: dark)");

    const apply = (m: MediaQueryList | MediaQueryListEvent) => {
      const prefersDark = "matches" in m ? m.matches : (m as MediaQueryList).matches;
      if (prefersDark) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    };

    // Initial set
    apply(mq);

    // Listen for changes
    const listener = (e: MediaQueryListEvent) => apply(e);
    if (mq.addEventListener) {
      mq.addEventListener("change", listener);
      return () => mq.removeEventListener("change", listener);
    } else {
      // fallback for older browsers
      // @ts-ignore
      mq.addListener(listener);
      return () => {
        // @ts-ignore
        mq.removeListener(listener);
      };
    }
  }, []);

  return null;
}
