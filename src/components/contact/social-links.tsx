"use client";

import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiPhone } from "react-icons/fi";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/mujtababas",
    icon: FiGithub,
    color: "hover:text-gray-900 dark:hover:text-gray-100",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/syed-mujtaba-602093330/",
    icon: FiLinkedin,
    color: "hover:text-blue-600 dark:hover:text-blue-400",
  },
  {
    name: "Email",
    href: "mailto:s4mujtaba555@gmail.com",
    icon: FiMail,
    color: "hover:text-red-500 dark:hover:text-red-400",
  },
  {
    name: "Phone",
    href: "tel:+92-3460630802",
    icon: FiPhone,
    color: "hover:text-green-500 dark:hover:text-green-400",
  },
];

export default function SocialLinks() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-wrap justify-center gap-6"
    >
      {socialLinks.map((link, index) => (
        <motion.a
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.3,
            delay: index * 0.1,
            type: "spring",
            stiffness: 300,
          }}
          className={`flex items-center gap-2 p-4 rounded-lg bg-gray-100 dark:bg-gray-800 transition-colors ${link.color}`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <link.icon className="w-6 h-6" />
          <span className="font-medium">{link.name}</span>
        </motion.a>
      ))}
    </motion.div>
  );
}