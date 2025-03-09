import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ClientOnly from "@/components/providers/client-only";
import { blogPosts } from "@/data/blog-posts";
import BlogContent from "./blog-content";

interface PageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const post = blogPosts.find((p) => p.id === params.id);

  if (!post) {
    return {
      title: "Post Not Found | Syed Mujtaba Abbas",
      description: "The requested blog post could not be found.",
    };
  }

  return {
    title: `${post.title} | Syed Mujtaba Abbas`,
    description: post.description,
  };
}

export default function BlogPostPage({ params }: PageProps) {
  const post = blogPosts.find((p) => p.id === params.id);

  if (!post) {
    notFound();
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-20">
      <article className="container mx-auto px-4 py-8 max-w-4xl">
        <ClientOnly>
          <BlogContent post={post} />
        </ClientOnly>
      </article>
    </main>
  );
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: post.id,
  }));
}