"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { FiCalendar, FiHeart, FiMessageSquare } from "react-icons/fi";
import type { BlogPost } from "@/data/blog-posts";

interface Comment {
  id: number;
  author: string;
  content: string;
  date: string;
}

interface BlogContentProps {
  post: BlogPost;
}

export default function BlogContent({ post }: BlogContentProps) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState("");
  const [likes, setLikes] = useState(post.likes);

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    const comment: Comment = {
      id: Date.now(),
      author: "Guest User",
      content: newComment,
      date: new Date().toISOString(),
    };

    setComments((prev) => [...prev, comment]);
    setNewComment("");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center gap-4 mb-8">
        <div className="relative w-12 h-12 rounded-full overflow-hidden">
          <Image
            src={post.author.avatar}
            alt={post.author.name}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h3 className="font-medium">{post.author.name}</h3>
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

      <h1 className="text-4xl font-bold mb-6">{post.title}</h1>
      
      <div className="prose dark:prose-invert max-w-none mb-12">
        {post.content.split("\n").map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>

      <div className="flex items-center gap-8 mb-12">
        <button
          onClick={() => setLikes(prev => prev + 1)}
          className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-400"
        >
          <FiHeart className={`w-6 h-6 ${likes > post.likes ? 'fill-red-500 text-red-500' : ''}`} />
          <span>{likes} likes</span>
        </button>
        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
          <FiMessageSquare className="w-6 h-6" />
          <span>{comments.length} comments</span>
        </div>
      </div>

      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Comments</h2>
        
        <form onSubmit={handleAddComment} className="mb-8">
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Add a comment..."
            className="w-full p-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 outline-none"
            rows={3}
          />
          <button
            type="submit"
            className="mt-2 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Post Comment
          </button>
        </form>

        <div className="space-y-6">
          {comments.map((comment) => (
            <div
              key={comment.id}
              className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-4"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium">{comment.author}</span>
                <time className="text-sm text-gray-500 dark:text-gray-400">
                  {new Date(comment.date).toLocaleDateString()}
                </time>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                {comment.content}
              </p>
            </div>
          ))}
        </div>
      </section>
    </motion.div>
  );
}