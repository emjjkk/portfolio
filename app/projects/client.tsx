"use client";
import { useState, useEffect } from "react";
import Header from "@/components/header";
import { LuArrowUpRight } from "react-icons/lu";
import { FaGithub } from "react-icons/fa";
import projects from "@/content/projects.json";
import { div } from "framer-motion/client";

interface Project {
  title: string;
  description: string;
  images?: string[];
  logo: string;
  demo?: string;
  repo?: string;
  stack?: string[];
  category?: string;
}

export default function ProjectsPage() {
  const [projectList, setProjectList] = useState<Project[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "Web", "Mobile", "Scripts", "Integration", "Blockchain"];

  useEffect(() => {
    setProjectList(projects);
  }, []);

  const filteredProjects = selectedCategory === "All" 
    ? projectList 
    : projectList.filter(project => project.category === selectedCategory);

  return (
    <div className="md:w-[70%] h-screen overflow-y-scroll p-4 md:p-6 mx-auto cs">
      <Header />

      <h1 className="text-3xl md:text-4xl my-5 md:w-2/3">
        Projects
      </h1>
      <p className="text-sm dark:text-neutral-300 text-gray-600 md:w-2/3 mb-5">
        Here are some projects I'm working on or maintaining. Feel free to check out the code repositories and live demos!
      </p>
      
      <div className="flex items-center gap-2 mb-6 flex-wrap">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-3 py-1 text-sm transition-colors ${
              selectedCategory === category
                ? "bg-neutral-700 dark:bg-neutral-300 text-white dark:text-black"
                : "bg-neutral-200 dark:bg-neutral-700 text-black dark:text-white hover:bg-neutral-300 dark:hover:bg-neutral-600"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="md:w-2/3">
        {filteredProjects.map((project, idx) => (
          <div key={idx} className="flex flex-col">
            {/* Images at the top */}
            {project.images && project.images.length > 0 && (
              <div className="flex gap-2 mb-3 overflow-x-auto hide-scroll">
                {project.images.map((image, imgIdx) => (
                  <img
                    key={imgIdx}
                    src={image}
                    alt={`${project.title} screenshot ${imgIdx + 1}`}
                    className="h-32 border border-neutral-500 object-cover flex-shrink-0 border-[0.5px]"
                  />
                ))}
              </div>
            )}

            {/* Logo, title, description, and links */}
            <div className="flex gap-3">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="text-lg font-medium">{project.title}</h3>
                  <span className="text-sm text-neutral-500 dark:text-neutral-400 uppercase">{project.category}</span>
                </div>
                <p className="text-sm dark:text-neutral-400 text-gray-600 mb-3">
                  {project.description}
                </p>
                
                {/* Stack tags */}
                {project.stack && project.stack.length > 0 && (
                  <div className="flex gap-2 flex-wrap mb-3">
                    {project.stack.map((tech, techIdx) => (
                      <span
                        key={techIdx}
                        className="text-xs px-2 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                {/* Links */}
                <div className="flex gap-3">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm hover:underline"
                    >
                      Demo <LuArrowUpRight className="w-4 h-4" />
                    </a>
                  )}
                  {project.repo && (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm hover:underline"
                    >
                      <FaGithub className="w-4 h-4" /> Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}