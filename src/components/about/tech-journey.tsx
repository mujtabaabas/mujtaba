"use client";

import { motion } from "framer-motion";
import { FiBookOpen, FiCode, FiStar } from "react-icons/fi";

const journeyItems = [
  {
    year: "2023 - Present",
    title: "Full Stack Developer",
    description: "Freelance development focusing on Next.js and AI applications",
    icon: FiCode,
  },
  {
    year: "2023 - 2024",
    title: "Web Developer Intern",
    description: "GIAIC Project - Building responsive web applications and AI integrations",
    icon: FiStar,
  },
  {
    year: "Present",
    title: "Commerce",
    description: "Enter degree in Commerce (Ongoing)",
    icon: FiBookOpen,
  },
];

export default function TechJourney() {
  return (
    <div className="max-w-3xl mx-auto py-12">
      <h2 className="text-3xl font-bold mb-8">My Journey</h2>
      <div className="space-y-8">
        {journeyItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="flex gap-4"
          >
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 dark:text-blue-400">
                <item.icon className="w-5 h-5" />
              </div>
              {index !== journeyItems.length - 1 && (
                <div className="w-0.5 h-full bg-gray-200 dark:bg-gray-800 my-2" />
              )}
            </div>
            <div className="pb-8">
              <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                {item.year}
              </div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}