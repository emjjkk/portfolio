"use client";

import { useState, useEffect } from "react";
import Header from "@/components/header";
import projects from "@/content/projects.json";
import blogPosts from "@/content/blog.json";
import { LuArrowUpRight, LuLoaderCircle } from "react-icons/lu";

interface BlogPost {
  slug: string;
  title: string;
  image: string;
  excerpt: string;
  date: string;
  readTime: string;
  preview?: string;
}

export default function HomePage() {
  const latestProjects = projects.slice(0, 3);
  const [visiblePosts, setVisiblePosts] = useState<number>(8);
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const postsWithContent = await Promise.all(
          blogPosts.map(async (post: BlogPost) => {
            try {
              const response = await fetch(`/b/${post.slug}.md`);
              const markdown = await response.text();
              const preview =
                markdown
                  .substring(0, 150)
                  .replace(/[#*\[\]]/g, "")
                  .trim() + "...";
              return { ...post, preview };
            } catch {
              return {
                ...post,
                preview: post.excerpt || "No preview available...",
              };
            }
          })
        );
        setPosts(postsWithContent);
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, []);

  const loadMore = () => setVisiblePosts((prev) => prev + 4);

  // ✅ Show spinner while preloading posts
  if (loading) {
    return (
      <main className="w-[70%] h-screen flex items-center justify-center">
        <LuLoaderCircle className="text-3xl animate-spin text-slate-500" />
      </main>
    );
  }

  return (
    <div className="w-full md:w-[70%] h-screen overflow-y-scroll p-3 md:p-6 cs">
      <Header />
      <h1 className="text-3xl md:text-4xl my-5 w-full md:w-3/4">
        Hey there 👋 I'm Emmanuel, a software developer currently specializing in
        fullstack web and app development.
      </h1>

      {/* Horizontal Scroll Projects */}
      <div className="flex items-center w-full mt-6">
        <h1 className="text-xl mb-2 whitespace-nowrap">Recent projects</h1>
      </div>

      <div className="md:flex items-end justify-between mb-5">
        <div className="md:w-2/3 mb-4 md:mb-0">
          <p className="text-sm">
            These are some of the most recent projects I've been building or
            maintaining in my free time. Since I'm a big fan of open-source,
            most of my projects are public on Github.
          </p>
        </div>
        <a href="#">
          <button className="px-4 py-2 text-sm bg-blue-500 rounded-lg text-white">
            See all projects
          </button>
        </a>
      </div>

      <div className="hide-scroll flex gap-4 overflow-x-auto pb-4 mb-5">
        {latestProjects.map((project, idx) => (
          <div
            key={idx}
            className="relative flex-shrink-0 w-[300px] h-[180px] md:w-[520px] md:h-[280px] rounded-md overflow-hidden bg-cover bg-center"
            style={{ backgroundImage: `url(${project.background})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
            <div className="absolute bottom-0 left-0 w-full p-4 flex items-end gap-3 text-white">
              <img
                src={project.logo}
                alt={project.title}
                width={62}
                height={62}
                className="rounded-lg object-cover border border-white/20"
              />
              <div className="flex flex-col justify-end">
                <h2 className="text-lg font-semibold">{project.title}</h2>
                <p className="text-sm text-gray-200 line-clamp-2">
                  {project.description}
                </p>
              </div>
              <div className="h-full flex flex-col items-center justify-center text-3xl">
                <a href={project.repo}>
                  <LuArrowUpRight />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Blog Section */}
      <div className="mt-5">
        <h1 className="text-xl mb-2 whitespace-nowrap">Blog posts</h1>
        <div className="md:w-2/3">
          <p className="text-sm">
            I occasionally write about my project build processes and other
            things related to software engineering — my posts are available over
            on Medium too.
          </p>
        </div>
      </div>

      <div className="md:flex gap-6 mt-6">
        <div className="md:w-2/3 mb-4">
          <div className="flex flex-col gap-6">
            {posts.slice(0, visiblePosts).map((post, idx) => (
              <a href={`/b/${post.slug}`} key={idx} className="block">
                <div className="flex gap-4 group mb-2 transition-colors">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-32 h-24 md:w-48 md:h-32 object-cover rounded-md flex-shrink-0"
                  />
                  <div className="flex flex-col justify-center">
                    <h3 className="text-lg font-semibold mb-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-2 line-clamp-2">
                      {post.preview}
                    </p>
                    <div className="flex items-center gap-3 text-xs text-gray-500">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {visiblePosts < posts.length && (
            <div className="flex justify-center mt-6">
              <button
                onClick={loadMore}
                className="px-6 py-2 text-sm bg-blue-500 rounded-lg text-white hover:bg-blue-600 transition-colors"
              >
                Load More
              </button>
            </div>
          )}
        </div>

        <div className="md:w-1/3">
          <div className="sticky top-0 space-y-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="text-lg font-semibold mb-3">Subscribe, maybe?</h3>
              <p className="text-sm text-gray-600 mb-4">
                I won't spam, but I'll drop you an email every once in a while
                with things you might find interesting
              </p>
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="w-full px-4 py-2 text-sm bg-blue-500 rounded-md text-white hover:bg-blue-600 transition-colors">
                Subscribe
              </button>
            </div>
            <div className="bg-slate-100 rounded-lg p-5 flex items-center justify-center h-32">
              ad.
            </div>
            <span className="text-sm text-right text-slate-500">
              Creation is a form of rebellion <br />© 2025 Emmanuel Alabi
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
