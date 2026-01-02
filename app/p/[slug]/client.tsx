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
  const [postContent, setPostContent] = useState("");
  const [originalContent, setOriginalContent] = useState("");
  const [postMeta, setPostMeta] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedLang, setSelectedLang] = useState("French");
  const [translating, setTranslating] = useState(false);

  useEffect(() => {
    const loadPost = async () => {
      setLoading(true);
      const meta = blogPosts.find((p) => p.slug === slug) || null;
      setPostMeta(meta);

      if (meta) {
        try {
          const res = await fetch(`/p/${slug}.md`);
          if (!res.ok) throw new Error("Failed to fetch markdown");
          const text = await res.text();
          setPostContent(text);
          setOriginalContent(text);
        } catch {
          const fallback = "Failed to load post content.";
          setPostContent(fallback);
          setOriginalContent(fallback);
        }
      }
      setLoading(false);
    };
    loadPost();
  }, [slug]);

  const handleTranslate = async () => {
    if (!postContent) return;
    setTranslating(true);

    try {
      const res = await fetch("/api/translate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: originalContent, targetLang: selectedLang })
      });

      const data = await res.json();
      const translation = data.translation?.trim();

      if (!translation) {
        alert("Translation failed or returned empty content.");
      } else {
        setPostContent(translation);
      }
    } catch (err) {
      console.error(err);
      alert("Translation failed.");
    }

    setTranslating(false);
  };

  if (loading)
    return (
      <main className="w-full md:w-[75%] h-screen flex items-center justify-center">
        <LuLoaderCircle className="text-3xl animate-spin text-slate-500" />
      </main>
    );

  if (!postMeta) return <div className="p-6">Post not found.</div>;

  return (
    <div className="md:w-[72%] h-screen overflow-y-scroll p-4 md:p-6 cs">

      <div className="mb-3 md:w-2/3">
        <div className="mb-6">
          <a href="/" className="text-sm text-blue-500 hover:text-blue-600 mb-2 inline-block">
            ← Back to home
          </a>
          <h1 className="text-2xl md:text-4xl my-2">{postMeta.title}</h1>
        </div>
        <div className="md:w-2/3 flex items-center gap-3 text-sm text-gray-500">
          <span>{postMeta.date}</span>
          <span>•</span>
          <span>{postMeta.readTime}</span>
        </div>

        <div className="mt-4 flex items-center gap-3">
          <select
            className="border  px-2 py-1 text-sm dark:bg-neutral-800 dark:border-neutral-600"
            value={selectedLang}
            onChange={(e) => setSelectedLang(e.target.value)}
          >
            <option value="French">French</option>
            <option value="Spanish">Spanish</option>
            <option value="Japanese">Japanese</option>
            <option value="Arabic">Arabic</option>
            <option value="Swahili">Swahili</option>
          </select>

          <button
            onClick={handleTranslate}
            disabled={translating}
            className="px-3 py-1 text-sm bg-blue-600 text-white  hover:bg-blue-700 transition"
          >
            {translating ? "Translating..." : "Translate"}
          </button>

          {postContent !== originalContent && (
            <button
              onClick={() => setPostContent(originalContent)}
              className="px-3 py-1 text-sm bg-neutral-300 dark:bg-neutral-600  hover:bg-neutral-400"
            >
              Reset
            </button>
          )}
        </div>
      </div>

      <div className="md:flex gap-6">
        <div className="md:w-2/3 mb-4">
          <div className="prose max-w-none blog-content cs">
            {postContent ? (
              <ReactMarkdown
                rehypePlugins={[rehypeRaw as any]}
                components={{
                  code({ inline, className, children, ...props }: any) {
                    const match = /language-(\w+)/.exec(className ?? "");
                    return !inline && match ? (
                      <SyntaxHighlighter
                        style={materialDark as any}
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
                  }
                }}
              >
                {postContent}
              </ReactMarkdown>
            ) : (
              <div>Failed to load content.</div>
            )}
          </div>
        </div>

        <div className="md:w-1/3 mt-5">
          <div className="sticky top-0 space-y-4">
            <div className="bg-blue-50 dark:bg-neutral-700 dark:text-neutral-100 -lg p-3">
              <h3 className="text-lg font-semibold mb-3">Subscribe, maybe?</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                No spam - just the occasional interesting thing.
              </p>
              <SubscribeBox />
            </div>

            <div className="bg-neutral-100 dark:bg-neutral-700 -lg p-5 flex items-center justify-center h-32">
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
