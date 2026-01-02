"use client";

import { LuMail, LuGithub, LuLinkedin, LuTwitter, LuMessageSquare, LuExternalLink } from "react-icons/lu";

export default function ContactPage() {
  const contactMethods = [
    {
      icon: LuMail,
      title: "Email",
      description: "Best for work inquiries",
      link: "mailto:hi@emjjkk.tech",
      display: "hi@emjjkk.tech",
      color: "bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400"
    },
    {
      icon: LuGithub,
      title: "GitHub",
      description: "Check out my code",
      link: "https://github.com/emjjkk",
      display: "@emjjkk",
      color: "bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-300"
    },
    {
      icon: LuLinkedin,
      title: "LinkedIn",
      description: "Professional connections",
      link: "https://linkedin.com/in/emjjkk",
      display: "Emmanuel Alabi",
      color: "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
    },
    {
      icon: LuTwitter,
      title: "Twitter",
      description: "Thoughts and updates",
      link: "https://twitter.com/e_mjjkk",
      display: "@e_mjjkk",
      color: "bg-sky-50 dark:bg-sky-900/20 text-sky-600 dark:text-sky-400"
    },
    {
      icon: LuMessageSquare,
      title: "Discord",
      description: "Quick chats",
      link: "#",
      display: "e.mjjkk",
      color: "bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400"
    }
  ];

  return (
    <div className="w-full md:w-[72%] h-screen overflow-y-scroll p-3 md:p-6 cs">
      {/* Header */}
      <div className="mb-6">
        <a href="/" className="text-sm text-blue-500 hover:text-blue-600 mb-2 inline-block">
          ← Back to home
        </a>
        <h1 className="text-2xl md:text-3xl my-2">Get in Touch</h1>
        <p className="text-md text-gray-600 dark:text-gray-300 md:w-2/3">
          Have a project in mind, want to collaborate, or just want to say hi? Feel free to reach out through any of these channels.
        </p>
      </div>

      {/* Contact Cards */}
      <div className="grid md:grid-cols-2 gap-4 mb-8">
        {contactMethods.map((method, idx) => (
          <a
            key={idx}
            href={method.link}
            target={method.link.startsWith('http') ? "_blank" : undefined}
            rel={method.link.startsWith('http') ? "noopener noreferrer" : undefined}
            className="group block"
          >
            <div className={`${method.color} p-4 -lg hover:shadow-md transition-all`}>
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <method.icon className="text-2xl" />
                  <div>
                    <h3 className="font-semibold">{method.title}</h3>
                    <p className="text-md opacity-75">{method.description}</p>
                  </div>
                </div>
                <LuExternalLink className="text-sm opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <p className="text-sm font-mono">{method.display}</p>
            </div>
          </a>
        ))}
      </div>

      {/* Quick Info */}
      <div className="bg-neutral-50 dark:bg-neutral-800 p-4 -lg mb-8">
        <h2 className="text-base font-semibold mb-3">Response Time</h2>
        <p className="text-md text-gray-600 dark:text-gray-300 mb-2">
          I typically respond to emails within 24-48 hours. For quicker responses, try reaching out on Discord or Twitter.
        </p>
        <p className="text-md text-gray-600 dark:text-gray-300">
          <strong>Location:</strong> Kigali, Rwanda (CAT, UTC+2)
        </p>
      </div>

      {/* Footer */}
      <div className="mt-8 pt-4 border-t border-neutral-300 dark:border-neutral-600">
        <p className="text-xs text-neutral-500 dark:text-neutral-400 text-center">
          © 2025 Emmanuel Alabi
        </p>
      </div>
    </div>
  );
}