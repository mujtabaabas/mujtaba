import type { Metadata } from "next";
import Skills from "@/components/about/skills";
import TechJourney from "@/components/about/tech-journey";
import { DownloadButton } from "./download-button";

export const metadata: Metadata = {
  title: "About Me | Syed Mujtaba Abbas",
  description: "Learn about my journey as a Full Stack Developer, my skills, and experiences.",
} as const;

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-20">
      <div className="container mx-auto px-4 py-8">
        <section className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold mb-6">About Me</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Passionate Full Stack Developer with a focus on creating exceptional
            digital experiences using modern web technologies.
          </p>
          <DownloadButton />
        </section>

        <TechJourney />
        <Skills />
      </div>
    </main>
  );
}