"use client";

import { useTheme } from "next-themes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiMoon, FiSun } from "react-icons/fi";
import MobileNav from "./mobile-nav";
import { motion } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();

  return (
    <header className="fixed w-full top-0 z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold font-mono">
            <motion.span
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              M.J_Syed
            </motion.span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative ${
                  pathname === link.href
                    ? "text-blue-600 dark:text-blue-400"
                    : "hover:text-blue-600 dark:hover:text-blue-400"
                }`}
              >
                {link.label}
                {pathname === link.href && (
                  <motion.span
                    layoutId="underline"
                    className="absolute left-0 top-full block h-[2px] w-full bg-blue-600 dark:bg-blue-400"
                  />
                )}
              </Link>
            ))}
          </div>

          <MobileNav />
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <FiSun className="w-5 h-5" />
            ) : (
              <FiMoon className="w-5 h-5" />
            )}
          </button>
        </div>
      </nav>
    </header>
  );
}