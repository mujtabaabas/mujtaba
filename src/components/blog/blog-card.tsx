"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FiCalendar, FiHeart, FiTag } from "react-icons/fi";
import type { BlogPost } from "@/data/blog-posts";

interface BlogCardProps {
  post: BlogPost;
  index: number;
}

export default function BlogCard({ post, index }: BlogCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
    >
      <Link href={`/blog/${post.id}`}>
        <div className="p-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="relative w-10 h-10 rounded-full overflow-hidden">
              <Image
                src={post.author.avatar}
                alt={post.author.name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="font-medium text-gray-900 dark:text-gray-100">
                {post.author.name}
              </h3>
              <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                <FiCalendar className="w-4 h-4" />
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </time>
              </div>
            </div>
          </div>

          <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
            {post.title}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            {post.description}
          </p>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <FiHeart className="w-4 h-4 text-red-500" />
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {post.likes} likes
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1 px-2 py-1 text-xs rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
                >
                  <FiTag className="w-3 h-3" />
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}