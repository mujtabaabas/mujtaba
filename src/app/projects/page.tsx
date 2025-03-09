import type { Metadata } from "next";
import ProjectList from "@/components/projects/project-list";
import { projects, projectCategories } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects | Syed Mujtaba Abbas",
  description: "A showcase of my latest web development and AI projects.",
} as const;

export default function ProjectsPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-20">
      <div className="container mx-auto px-4 py-8">
        <section className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold mb-6">Projects</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            A collection of my latest web development and AI projects.
          </p>
        </section>

        <ProjectList projects={projects} categories={projectCategories} />
      </div>
    </main>
  );
}