"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  FaGithub,
  FaBluesky,
  FaInstagram,
  FaDiscord,
  FaWhatsapp,
  FaBars,
  FaXmark,
} from "react-icons/fa6";

function LocalTimeClient({ timeZone = "Africa/Kigali" }: { timeZone?: string }) {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const formatter = new Intl.DateTimeFormat("en-GB", {
        timeZone,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      });
      setTime(formatter.format(now));
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, [timeZone]);

  return <span>{time}</span>;
}

export default function Header() {
  const pathname = usePathname();
  const [activity, setActivity] = useState<{ name?: string; details?: string } | null>(null);
  const [showActivity, setShowActivity] = useState(false);
  const [fade, setFade] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  // 🔹 Fetch activity
  useEffect(() => {
    async function fetchActivity() {
      try {
        const res = await fetch("/api/premid");
        const data = await res.json();
        if (data && data.name) setActivity(data);
        else if (data.active_activity) setActivity(data.active_activity);
      } catch (err) {
        console.error("Failed to fetch activity:", err);
      }
    }
    fetchActivity();
    const refetch = setInterval(fetchActivity, 30000);
    return () => clearInterval(refetch);
  }, []);

  // 🔹 Alternate between time and activity
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setShowActivity((prev) => !prev);
        setFade(true);
      }, 300);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const renderLine = () => {
    if (showActivity && activity?.name) {
      return (
        <span>
          currently on <span className="font-medium">{activity.name}</span>
          {activity.details && (
            <span className="text-slate-400"> — {activity.details}</span>
          )}
        </span>
      );
    } else {
      return (
        <span>
          local time: <LocalTimeClient />
        </span>
      );
    }
  };

  return (
    <>
      <div className="flex items-center justify-between">
        {/* Left section */}
        <div className="flex items-center gap-2">
          <img
            src="https://avatars.githubusercontent.com/u/49512755?v=4"
            alt="profile picture"
            className="w-5 h-5 rounded-full"
          />
          <span className="text-md">Emmanuel Alabi</span>
        </div>

        {/* Right section (desktop only) */}
        <div className="hidden md:flex items-center gap-2">
          <p
            className={`text-md text-slate-400 px-1 transition-opacity duration-500 ${
              fade ? "opacity-100" : "opacity-0"
            }`}
          >
            {renderLine()}
          </p>

          <a href="#">
            <FaGithub className="text-md text-slate-400 hover:text-blue-500" />
          </a>
          <a href="#">
            <FaBluesky className="text-md text-slate-400 hover:text-blue-500" />
          </a>
          <a href="#">
            <FaInstagram className="text-md text-slate-400 hover:text-blue-500" />
          </a>
          <a href="#">
            <FaDiscord className="text-md text-slate-400 hover:text-blue-500" />
          </a>
          <a href="#">
            <FaWhatsapp className="text-md text-slate-400 hover:text-blue-500" />
          </a>
        </div>

        {/* Hamburger (mobile only) */}
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          className="md:hidden text-slate-400 hover:text-blue-500 text-xl"
        >
          {menuOpen ? <FaXmark /> : <FaBars />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden mt-3 p-4 rounded-xl bg-slate-900/80 backdrop-blur-sm border border-slate-700 flex flex-col gap-3 text-slate-300">
          <a href="/" className="hover:text-blue-400">Home</a>
          <a href="/about" className="hover:text-blue-400">About</a>
          <a href="/projects" className="hover:text-blue-400">Projects</a>
          <a href="/goodies" className="hover:text-blue-400">Goodies</a>
          <a href="/contact" className="hover:text-blue-400">Contact</a>

          <div className="flex gap-3 mt-2">
            <a href="#"><FaGithub className="hover:text-blue-400" /></a>
            <a href="#"><FaBluesky className="hover:text-blue-400" /></a>
            <a href="#"><FaInstagram className="hover:text-blue-400" /></a>
            <a href="#"><FaDiscord className="hover:text-blue-400" /></a>
            <a href="#"><FaWhatsapp className="hover:text-blue-400" /></a>
          </div>
        </div>
      )}
    </>
  );
}
