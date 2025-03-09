import type { Metadata } from "next";
import BlogCard from "@/components/blog/blog-card";
import ClientOnly from "@/components/providers/client-only";
import { blogPosts } from "@/data/blog-posts";

export const metadata: Metadata = {
  title: "Blog | Syed Mujtaba Abbas",
  description: "Articles about web development, programming, and technology.",
} as const;

export default function BlogPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-20">
      <div className="container mx-auto px-4 py-8">
        <section className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold mb-6">Blog</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Thoughts and tutorials about web development and technology.
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <ClientOnly>
            {blogPosts.map((post, index) => (
              <BlogCard key={post.id} post={post} index={index} />
            ))}
          </ClientOnly>
        </div>

        
        {blogPosts.length === 0 && (
          <p className="text-center text-gray-500 dark:text-gray-400">
            No blog posts found.
          </p>
        )}
      </div>
    </main>
  );
}