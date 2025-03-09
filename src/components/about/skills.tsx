"use client";

import { motion } from "framer-motion";
import {
  SiNextdotjs,
  SiTypescript,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiGit,
  SiDocker,
} from "react-icons/si";

const skills = [
  {
    name: "Frontend",
    level: 90,
    items: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "React", icon: SiReact },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },
  {
    name: "Backend",
    level: 85,
    items: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "MongoDB", icon: SiMongodb },
    ],
  },
  {
    name: "Tools & DevOps",
    level: 80,
    items: [
      { name: "Git", icon: SiGit },
      { name: "Docker", icon: SiDocker },
    ],
  },
];

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  return (
    <div className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium">{name}</span>
        <span className="text-sm text-gray-500">{level}%</span>
      </div>
      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 1, delay, ease: "easeOut" }}
          viewport={{ once: true }}
          className="h-full bg-blue-600 dark:bg-blue-400 rounded-full"
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <div className="max-w-3xl mx-auto py-12">
      <h2 className="text-3xl font-bold mb-8">Skills & Expertise</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          {skills.map((skill, index) => (
            <SkillBar
              key={skill.name}
              name={skill.name}
              level={skill.level}
              delay={index * 0.2}
            />
          ))}
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-6">Technologies</h3>
          <div className="grid grid-cols-2 gap-6">
            {skills.map((category) => (
              <div key={category.name}>
                <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-4">
                  {category.name}
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  {category.items.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex flex-col items-center gap-2 p-4 rounded-lg bg-gray-50 dark:bg-gray-800/50"
                    >
                      <item.icon className="w-8 h-8 text-gray-700 dark:text-gray-300" />
                      <span className="text-sm">{item.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}