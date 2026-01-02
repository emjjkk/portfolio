"use client";

import { useState } from "react";
import { LuGithub, LuExternalLink } from "react-icons/lu";
import projectsData from "@/content/projects.json";

interface Project {
  title: string;
  description: string;
  images: string[];
  logo: string;
  repo: string;
  demo: string;
  stack: string[];
  category: string;
}

export default function ProjectsPage() {
  const [selectedFilter, setSelectedFilter] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  const allTags = Array.from(
    new Set(projectsData.flatMap((p: Project) => p.stack))
  ).sort();
  
  const categories = Array.from(
    new Set(projectsData.map((p: Project) => p.category))
  ).sort();
  
  const filteredProjects = selectedFilter === "all" 
    ? projectsData 
    : projectsData.filter((p: Project) => 
        p.stack.includes(selectedFilter) || p.category === selectedFilter
      );

  return (
    <div className="w-full md:w-[75%] h-screen overflow-y-scroll p-3 md:p-6 cs">
      {/* Header */}
      <div className="mb-6">
        <a href="/" className="text-sm text-blue-500 hover:text-blue-600 mb-2 inline-block">
          ← Back to home
        </a>
        <h1 className="text-2xl md:text-4xl my-2">Projects</h1>
        <p className="text-md text-gray-600 dark:text-gray-300 md:w-2/3">
          A collection of projects I've worked on, ranging from web applications to Discord bots and browser extensions.
        </p>
      </div>

      {/* Filter Tags */}
      <div className="mb-6 w-2/3">
        <div className="flex flex-wrap gap-1.5">
          <button
            onClick={() => setSelectedFilter("all")}
            className={`px-3 py-2 text-xs -full transition-colors ${
              selectedFilter === "all"
                ? "bg-blue-500 text-white"
                : "bg-neutral-200 dark:bg-neutral-700 hover:bg-neutral-300 dark:hover:bg-neutral-600"
            }`}
          >
            All
          </button>
          {categories.map((category, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedFilter(category)}
              className={`px-3 py-2 text-xs -full transition-colors ${
                selectedFilter === category
                  ? "bg-blue-500 text-white"
                  : "bg-neutral-200 dark:bg-neutral-700 hover:bg-neutral-300 dark:hover:bg-neutral-600"
              }`}
            >
              {category}
            </button>
          ))}
          {allTags.map((tag, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedFilter(tag)}
              className={`px-3 py-2 text-xs -full transition-colors ${
                selectedFilter === tag
                  ? "bg-blue-500 text-white"
                  : "bg-neutral-200 dark:bg-neutral-700 hover:bg-neutral-300 dark:hover:bg-neutral-600"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="mt-2 mb-4 flex items-center">
        <h2 className="text-lg mb-2 whitespace-nowrap">
          {selectedFilter === "all" ? "All Projects" : `${selectedFilter}`}
        </h2>
        <div className="h-[1.5px] flex-1 ml-4 mb-[4px] bg-neutral-300 dark:bg-neutral-600 -full"></div>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {filteredProjects.map((project: Project, idx: number) => (
          <div
            key={idx}
            className="bg-neutral-50 dark:bg-neutral-800 -lg overflow-hidden hover:shadow-lg transition-all cursor-pointer group"
            onClick={() => setSelectedProject(project)}
          >
            <div className="h-36 bg-neutral-200 dark:bg-neutral-700 overflow-hidden">
              {project.images && project.images.length > 0 ? (
                <img 
                  src={project.images[0]} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-neutral-400 text-xs">
                  No Preview
                </div>
              )}
            </div>
            <div className="p-3">
              <div className="flex items-center gap-2 mb-2">
                <img 
                  src={project.logo} 
                  alt={`${project.title} logo`}
                  className="w-6 h-6 "
                />
                <h3 className="text-base font-semibold">{project.title}</h3>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-3 line-clamp-2">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1 mb-3">
                {project.stack.slice(0, 3).map((tech, i) => (
                  <span
                    key={i}
                    className="px-1.5 py-0.5 text-xs bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 "
                  >
                    {tech}
                  </span>
                ))}
                {project.stack.length > 3 && (
                  <span className="px-1.5 py-0.5 text-xs text-gray-500">
                    +{project.stack.length - 3}
                  </span>
                )}
              </div>
              <div className="flex gap-3 text-xs">
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-1 text-blue-500 hover:text-blue-600"
                  >
                    <LuExternalLink className="text-sm" />
                    Demo
                  </a>
                )}
                {project.repo && (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-1 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100"
                  >
                    <LuGithub className="text-sm" />
                    Code
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="bg-white dark:bg-neutral-800 -lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white dark:bg-neutral-800 border-b border-neutral-200 dark:border-neutral-700 p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img 
                  src={selectedProject.logo} 
                  alt={`${selectedProject.title} logo`}
                  className="w-10 h-10 "
                />
                <h2 className="text-2xl font-bold">{selectedProject.title}</h2>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-2xl hover:text-gray-600 dark:hover:text-gray-300"
              >
                ×
              </button>
            </div>
            
            <div className="p-6">
              {/* Image Gallery */}
              <div className="mb-6 space-y-4">
                {selectedProject.images.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`${selectedProject.title} screenshot ${idx + 1}`}
                    className="w-full -lg"
                  />
                ))}
              </div>

              {/* Description */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">About</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {selectedProject.description}
                </p>
              </div>

              {/* Tech Stack */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.stack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Category */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Category</h3>
                <span className="px-3 py-1 text-sm bg-neutral-200 dark:bg-neutral-700 ">
                  {selectedProject.category}
                </span>
              </div>

              {/* Links */}
              <div className="flex gap-4">
                {selectedProject.demo && (
                  <a
                    href={selectedProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white -lg hover:bg-blue-600 transition-colors"
                  >
                    <LuExternalLink />
                    Live Demo
                  </a>
                )}
                {selectedProject.repo && (
                  <a
                    href={selectedProject.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-neutral-200 dark:bg-neutral-700 -lg hover:bg-neutral-300 dark:hover:bg-neutral-600 transition-colors"
                  >
                    <LuGithub />
                    View Source
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="mt-8 pt-4 border-t border-neutral-300 dark:border-neutral-600">
        <p className="text-xs text-neutral-500 dark:text-neutral-400 text-center">
          © 2025 Emmanuel Alabi
        </p>
      </div>
    </div>
  );
}