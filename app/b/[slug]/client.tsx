"use client";

import { useEffect, useState } from "react";
import rehypeRaw from "rehype-raw";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { LuLoaderCircle } from "react-icons/lu";
import blogPosts from "@/content/blog.json";
import Header from "@/components/header";
import SubscribeBox from "@/components/subscribe-box";

interface BlogPost {
  slug: string;
  title: string;
  image: string;
  excerpt: string;
  date: string;
  readTime: string;
}

interface ClientBlogPageProps {
  slug: string;
}

export default function ClientBlogPage({ slug }: ClientBlogPageProps) {
  const [postContent, setPostContent] = useState<string>("");
  const [postMeta, setPostMeta] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadPost = async () => {
      setLoading(true);
      const meta = (blogPosts as BlogPost[]).find((p) => p.slug === slug);
      setPostMeta(meta || null);

      if (meta) {
        try {
          const response = await fetch(`/b/${slug}.md`);
          if (!response.ok) throw new Error("Failed to fetch markdown file");
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
      <main className="w-full md:w-[70%] h-screen flex items-center justify-center">
        <LuLoaderCircle className="text-3xl animate-spin text-slate-500" />
      </main>
    );

  if (!postMeta) return <div className="p-6">Post not found.</div>;

  return (
    <div className="md:w-[70%] h-screen overflow-y-scroll p-4 md:p-6 cs">
      <Header />

      {/* Post Header */}
      <div className="mb-6">
        <h1 className="md:w-2/3 text-3xl md:text-4xl mt-5 font-bold mb-5">
          {postMeta.title}
        </h1>
        <div className="md:w-2/3 mb-5 flex items-center gap-3 text-sm text-gray-500">
          <span>{postMeta.date}</span>
          <span>•</span>
          <span>{postMeta.readTime}</span>
        </div>
        {postMeta.image && (
          <img
            src={postMeta.image}
            alt={postMeta.title}
            className="md:w-2/3 h-auto object-cover rounded-md mt-4"
          />
        )}
      </div>

      <div className="md:flex gap-6">
        {/* Markdown Content */}
        <div className="md:w-2/3 mb-4">
          <div className="prose max-w-none blog-content cs">
            <ReactMarkdown
              rehypePlugins={[rehypeRaw as any]}
              components={{
                code({
                  inline,
                  className,
                  children,
                  ...props
                }: {
                  inline?: boolean;
                  className?: string;
                  children?: React.ReactNode;
                }) {
                  const match = /language-(\w+)/.exec(className ?? "");
                  return !inline && match ? (
                    <SyntaxHighlighter
                      style={materialDark}
                      language={match[1]}
                      PreTag="div"
                      className="text-xs codeblocku cs"
                      {...props}
                    >
                      {String(children).replace(/\n$/, "")}
                    </SyntaxHighlighter>
                  ) : (
                    <code className={className} {...props}>
                      {children}
                    </code>
                  );
                },
              }}
            >
              {postContent}
            </ReactMarkdown>
          </div>
        </div>

        {/* Sidebar */}
        <div className="md:w-1/3">
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
