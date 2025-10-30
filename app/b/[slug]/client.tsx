"use client";

import { useEffect, useState } from "react";
import Header from "@/components/header";
import ReactMarkdown from "react-markdown";
import { LuLoaderCircle } from "react-icons/lu";
import blogPosts from "@/content/blog.json";

interface BlogPost {
  slug: string;
  title: string;
  image: string;
  excerpt: string;
  date: string;
  readTime: string;
}

export default function ClientBlogPage({ slug }: { slug: string }) {
  const [postContent, setPostContent] = useState<string>("");
  const [postMeta, setPostMeta] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPost = async () => {
      setLoading(true);
      const meta = (blogPosts as BlogPost[]).find((p) => p.slug === slug);
      setPostMeta(meta || null);

      if (meta) {
        try {
          const response = await fetch(`/b/${slug}.md`);
          const markdown = await response.text();
          setPostContent(markdown);
        } catch (err) {
          setPostContent("Failed to load post content.");
        }
      }
      setLoading(false);
    };
    loadPost();
  }, [slug]);

  if (loading)
    return (
      <main className="w-[70%] h-screen flex items-center justify-center">
        <LuLoaderCircle className="text-3xl animate-spin text-slate-500" />
      </main>
    );

  if (!postMeta) return <div className="p-6">Post not found.</div>;

  return (
    <div className="md:w-[70%] h-screen overflow-y-scroll p-4 md:p-6 cs">
      <Header />

      {/* Post Header */}
      <div className="mb-6">
        <h1 className="text-3xl md:text-4xl mt-5 font-bold mb-2">
          {postMeta.title}
        </h1>
        <div className="flex items-center gap-3 text-sm text-gray-500">
          <span>{postMeta.date}</span>
          <span>•</span>
          <span>{postMeta.readTime}</span>
        </div>
        {postMeta.image && (
          <img
            src={postMeta.image}
            alt={postMeta.title}
            className="w-full h-[400px] object-cover rounded-md mt-4"
          />
        )}
      </div>

      <div className="md:flex gap-6">
        <div className="md:w-2/3 mb-4">
          {/* Post Content */}
          <div className="prose max-w-none blog-content">
            <ReactMarkdown>{postContent}</ReactMarkdown>
          </div>
        </div>

        {/* Sidebar */}
        <div className="md:w-1/3">
          <div className="sticky top-0 space-y-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="text-lg font-semibold mb-3">Subscribe, maybe?</h3>
              <p className="text-sm text-gray-600 mb-4">
                I won’t spam — just the occasional interesting thing.
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

            <span className="text-sm text-right text-slate-500 block">
              Creation is a form of rebellion <br />© 2025 Emmanuel Alabi
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
