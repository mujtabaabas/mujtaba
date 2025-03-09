"use client";

import { motion } from "framer-motion";

interface ProjectFilterProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function ProjectFilter({
  categories,
  activeCategory,
  onCategoryChange,
}: ProjectFilterProps) {
  return (
    <div className="flex flex-wrap gap-4 justify-center mb-12">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`relative px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            activeCategory === category
              ? "text-white"
              : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
          }`}
        >
          {activeCategory === category && (
            <motion.div
              layoutId="activeCategory"
              className="absolute inset-0 bg-blue-600 dark:bg-blue-500 rounded-full"
              transition={{ type: "spring", duration: 0.6 }}
            />
          )}
          <span className="relative z-10">{category}</span>
        </button>
      ))}
    </div>
  );
}