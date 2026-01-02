"use client";

import { LuMail, LuGithub, LuLinkedin, LuTwitter } from "react-icons/lu";

export default function AboutPage() {
  return (
    <div className="w-full md:w-[72%] h-screen overflow-y-scroll p-3 md:p-6 cs">
      {/* Header */}
      <div className="mb-6">
        <a href="/" className="text-sm text-blue-500 hover:text-blue-600 mb-2 inline-block">
          ← Back to home
        </a>
        <h1 className="text-2xl md:text-3xl my-2">About</h1>
      </div>

      <div className="md:flex gap-8">
        {/* Main Content */}
        <div className="md:w-2/3 mb-8">
          {/* Bio */}
          <section className="mb-8">
            <p className="text-gray-600 dark:text-gray-300 mb-3">
              Hey there! I'm Emmanuel, a college student and software developer based in Kigali, Rwanda. I specialize in full-stack web and mobile development.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-3">
              I work with JavaScript frameworks like Next.js, Astro, and Remix, as well as Python frameworks like Flask and Django. I also build mobile apps with React Native and dabble in Discord bots and Chrome extensions.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              When I'm not coding, I'm exploring new technologies, contributing to open-source, or writing about what I'm learning on my blog.
            </p>
          </section>

          {/* Skills */}
          <section className="mb-8">
            <h2 className="text-lg font-semibold mb-3">What I work with</h2>
            <div className="flex flex-wrap gap-2">
              {["Next.js", "React", "TypeScript", "Python", "Django", "Flask", "React Native", "Tailwind CSS", "PostgreSQL", "MongoDB", "Git"].map((skill, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 text-sm bg-neutral-100 dark:bg-neutral-800 "
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>

          {/* Currently */}
          <section className="mb-8">
            <h2 className="text-lg font-semibold mb-3">Currently</h2>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>📚 Studying Computer Science</li>
              <li>🚀 Building web applications</li>
              <li>✍️ Writing technical blog posts</li>
              <li>🌱 Learning new frameworks and tools</li>
            </ul>
          </section>
        </div>

        {/* Sidebar */}
        <div className="md:w-1/3">
          <div className="sticky top-0 space-y-4">
            {/* Photo */}
            <div className="w-full aspect-square bg-[url('/i.jpeg')] bg-cover bg-center flex items-center justify-center text-neutral-400">
              <span className="text-sm">Photo</span>
            </div>

            {/* Contact */}
            <div className="bg-blue-50 dark:bg-neutral-800 p-4 -lg">
              <h3 className="text-base font-semibold mb-3">Get in touch</h3>
              <div className="space-y-2.5">
                <a
                  href="mailto:hi@emjjkk.tech"
                  className="flex items-center gap-2.5 text-sm hover:text-blue-500 transition-colors"
                >
                  <LuMail className="text-base" />
                  <span>Email</span>
                </a>
                <a
                  href="https://github.com/emjjkk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-sm hover:text-blue-500 transition-colors"
                >
                  <LuGithub className="text-base" />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://linkedin.com/in/emjjkk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-sm hover:text-blue-500 transition-colors"
                >
                  <LuLinkedin className="text-base" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://twitter.com/e_mjjkk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-sm hover:text-blue-500 transition-colors"
                >
                  <LuTwitter className="text-base" />
                  <span>Twitter</span>
                </a>
              </div>
            </div>

            <span className="text-sm text-neutral-500 dark:text-neutral-400 block text-right">
              © 2025 Emmanuel Alabi
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}           