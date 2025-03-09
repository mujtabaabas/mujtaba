"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "./project-card";
import ProjectFilter from "./project-filter";
import { Project } from "@/data/projects";
import ClientOnly from "@/components/providers/client-only";

interface ProjectListProps {
  projects: Project[];
  categories: string[];
}

export default function ProjectList({ projects, categories }: ProjectListProps) {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = projects.filter(
    (project) => activeCategory === "All" || project.category === activeCategory
  );

  return (
    <ClientOnly>
      <div>
        <ProjectFilter
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.1,
                }}
              >
                <ProjectCard {...project} index={index} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-gray-500 dark:text-gray-400 mt-8"
          >
            No projects found in this category.
          </motion.p>
        )}
      </div>
    </ClientOnly>
  );
}