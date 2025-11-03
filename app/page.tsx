"use client";

import { useState, useEffect } from "react";
import Header from "@/components/header";
import projects from "@/content/projects.json";
import blogPosts from "@/content/blog.json";
import { LuArrowUpRight, LuLoaderCircle } from "react-icons/lu";
import SubscribeBox from "@/components/subscribe-box";

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
              const response = await fetch(`/p/${post.slug}.md`);
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
      <main className="w-full md:w-[70%] h-screen flex items-center justify-center">
        <LuLoaderCircle className="text-3xl animate-spin text-neutral-500 dark:text-neutral-400" />
      </main>
    );
  }

  return (
    <div className="w-full md:w-[70%] h-screen overflow-y-scroll p-3 md:p-6 cs">
      <Header />
      <h1 className="text-3xl md:text-4xl my-5 w-full md:w-3/4 mt-5 md:mt-6">
        I'm Emmanuel, a software developer currently specializing in
        full-stack web and app development.
      </h1>
      <p className="text-md md:w-2/3 mb-8 md:mb-8">
        I'm a college student and software developer. I'm familiar with Javascript- (NextJS, Astro, Remix, etc) and Python (Flask, Django) based frameworks for web development. I can also build  mobile apps with React Native and other things like discord bots and chrome extensions.
      </p>

      {/* Blog Section */}
      <div className="md:flex gap-10">
        <div className="md:w-2/3 mb-8">
          <div className="mt-2 mb-6 flex items-center">
            <h1 className="text-xl mb-2 whitespace-nowrap">Latest blog posts</h1>
            <div className="h-[1.5px] flex-1 ml-4 mb-[4px] bg-neutral-300 dark:bg-neutral-600 rounded-full"></div>
          </div>
          <div className="flex flex-col gap-6">
            {posts.slice(0, visiblePosts).map((post, idx) => (
              <a href={`/p/${post.slug}`} key={idx} className="block">
                <div className="flex gap-4 group mb-1 transition-colors">
                  <div className="flex flex-col justify-center ">
                    <h3 className="text-lg font-medium mb-2 hover:text-blue-500">
                      {post.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-2 line-clamp-2">
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

        <div className="md:w-1/3 mt-5">
          <div className="sticky top-0 space-y-4">
            <div className="bg-blue-50 dark:bg-neutral-700 dark:text-neutral-100 rounded-lg p-5">
              <h3 className="text-lg font-semibold mb-3">Subscribe, maybe?</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                No spam - just the occasional interesting thing.
              </p>
              <SubscribeBox />
            </div>
            <div className="bg-neutral-100 dark:bg-neutral-700 rounded-lg p-5 flex items-center justify-center h-32">
              ad.
            </div>
            <span className="text-sm text-right text-neutral-500 dark:text-neutral-400">
              © 2025 Emmanuel Alabi
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
