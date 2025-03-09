"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const socialLinks = [
  {
    href: "https://github.com/yourusername",
    icon: FiGithub,
    label: "GitHub",
  },
  {
    href: "https://linkedin.com/in/yourusername",
    icon: FiLinkedin,
    label: "LinkedIn",
  },
  {
    href: "mailto:s4mujtaba555@gmail.com",
    icon: FiMail,
    label: "Email",
  },
];

export default function Hero() {
  return (
    <section className="min-h-[calc(100vh-5rem)] flex items-center justify-center py-20">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-4"
          >
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Syed Mujtaba Abbas
              </h1>
              <p className="max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl">
                Full Stack Developer specializing in building exceptional digital experiences
              </p>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="flex gap-4"
            >
              {socialLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  aria-label={link.label}
                >
                  <link.icon className="h-5 w-5" />
                </Link>
              ))}
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 min-[400px]:items-start"
            >
              <Link
                href="/resume"
                className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
              >
                Download Resume
              </Link>
              <Link
                href="/projects"
                className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 dark:border-gray-800 px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
              >
                View Projects
              </Link>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.2,
              type: "spring",
              stiffness: 100,
            }}
            className="mx-auto lg:mr-0"
          >
            <div className="rounded-full border-2 border-gray-200 dark:border-gray-800 p-2 w-[280px] h-[280px] lg:w-[400px] lg:h-[400px]">
              <div className="relative w-full h-full rounded-full overflow-hidden">
                <Image
                  src="/hero.jpg"
                  alt="Syed Mujtaba Abbas"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}