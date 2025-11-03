import { Metadata } from "next";
import blogPosts from "@/content/blog.json";
import Client from "./client";

interface BlogPost {
  slug: string;
  title: string;
  image: string;
  excerpt: string;
  date: string;
  readTime: string;
}

export async function generateMetadata(
  props: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await props.params; // ✅ Unwrap Promise

  const post = (blogPosts as BlogPost[]).find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Post Not Found | Emmanuel Alabi (@emjjkk)",
      description: "This blog post could not be found.",
    };
  }

  return {
    title: `${post.title} | Emmanuel Alabi (@emjjkk) `,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export default async function BlogPage(
  props: { params: Promise<{ slug: string }> }
) {
  const { slug } = await props.params; // ✅ Same unwrapping here
  return <Client slug={slug} />;
}
