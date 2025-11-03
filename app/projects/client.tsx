"use client";
import { useState, useEffect } from "react";
import Header from "@/components/header";
import { LuArrowUpRight } from "react-icons/lu";
import { FaGithub } from "react-icons/fa";
import projects from "@/content/projects.json";

interface Project {
  title: string;
  description: string;
  background: string;
  logo: string;
  demo?: string;
  repo?: string;
  stack?: string[];
  category?: string;
}

export default function ProjectsPage() {
  const [projectList, setProjectList] = useState<Project[]>([]);

  useEffect(() => {
    setProjectList(projects);
  }, []);

  return (
    <div className="md:w-[70%] h-screen overflow-y-scroll p-4 md:p-6 mx-auto cs">
      <Header />

      <h1 className="text-3xl md:text-4xl my-5 md:w-2/3">
        Here are some projects I'm building and maintaining.
      </h1>
      <p className="text-sm dark:text-neutral-300 text-gray-600 md:w-2/3 mb-8">
        Each one started as a random idea that refused to leave my head.
        I like experimenting — you’ll see a mix of tools, aesthetics, and little bits of chaos.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:w-3/3">
        {projectList.map((project, idx) => (
          <div
            key={idx}
            className="relative group rounded-xl overflow-hidden dark:bg-neutral-800 dark:border-neutral-700 bg-gray-50 border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all duration-300"
          >
            {/* Visual Banner */}
            <div className="relative h-40 overflow-hidden">
              <img
                src={project.background}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
              <div className="absolute bottom-3 left-3 flex items-center gap-2">
                <img
                  src={project.logo}
                  alt={project.title}
                  className="w-10 h-10 rounded-md border dark:border-black/30 border-white/30"
                />
                <h2 className="text-white text-lg font-semibold">
                  {project.title}
                </h2>
              </div>
            </div>

            {/* Content */}
            <div className="p-4 flex flex-col gap-2">
              <p className="text-sm dark:text-neutral-200 text-gray-600 line-clamp-3 leading-relaxed">
                {project.description}
              </p>

              {/* Stack tags */}
              {project.stack && (
                <div className="flex flex-wrap gap-1 mt-1">
                  {project.stack.slice(0, 4).map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-[2px] text-[11px] bg-gray-300 rounded-md text-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.stack.length > 4 && (
                    <span className="text-[11px] text-gray-500">
                      +{project.stack.length - 4}
                    </span>
                  )}
                </div>
              )}

              {/* Action bar */}
              <div className="items-center justify-between mt-3">
                <div className="flex gap-3 text-sm dark:text-neutral-300 text-gray-700">
                  {project.repo && (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 hover:text-black transition"
                    >
                      <FaGithub size={14} /> Repository
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 hover:text-blue-600 transition"
                    >
                      <LuArrowUpRight size={14} /> Live Demo
                    </a>
                  )}
                </div>
                {project.category && (
                  <span className="text-[11px] text-gray-400 uppercase tracking-wide">
                    {project.category}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
