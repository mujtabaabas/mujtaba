export interface BlogPost {
  id: string;
  title: string;
  description: string;
  date: string;
  author: {
    name: string;
    avatar: string;
  };
  content: string;
  tags: string[];
  likes: number;
}

export const blogPosts: BlogPost[] = [
  {
    id: "getting-started-nextjs",
    title: "Getting Started with Next.js and TypeScript",
    description: "A comprehensive guide to building modern web applications with Next.js and TypeScript.",
    date: "2024-03-01",
    author: {
      name: "Syed Mujtaba Abbas",
      avatar: "/avatar.jpg",
    },
    content: `
# Getting Started with Next.js and TypeScript

Next.js is a powerful React framework that makes building full-stack web applications a breeze. In this guide, we'll explore how to get started with Next.js and TypeScript.

## Why Next.js?

Next.js provides several benefits out of the box:
- Server-Side Rendering (SSR)
- Static Site Generation (SSG)
- API Routes
- File-based routing
- Built-in optimizations

## Setting Up Your Project

First, create a new Next.js project with TypeScript:

\`\`\`bash
npx create-next-app@latest my-app --typescript
\`\`\`

## Project Structure

A typical Next.js project structure looks like this:

\`\`\`
my-app/
  ├── pages/
  ├── public/
  ├── styles/
  └── components/
\`\`\`

## Building Your First Page

Create a new page in \`pages/index.tsx\`:

\`\`\`tsx
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <div>
      <h1>Welcome to Next.js!</h1>
    </div>
  )
}

export default Home
\`\`\`

## Conclusion

Next.js with TypeScript provides a robust foundation for building modern web applications. Stay tuned for more tutorials!
    `,
    tags: ["Next.js", "TypeScript", "Web Development", "React"],
    likes: 42,
  },
  {
    id: "mastering-tailwind",
    title: "Mastering Tailwind CSS: From Basics to Advanced",
    description: "Learn how to build beautiful, responsive interfaces with Tailwind CSS.",
    date: "2024-02-28",
    author: {
      name: "Syed Mujtaba Abbas",
      avatar: "/avatar.jpg",
    },
    content: `
# Mastering Tailwind CSS

Tailwind CSS is a utility-first CSS framework that lets you build custom designs without leaving your HTML. Let's dive deep into mastering Tailwind CSS.

## Why Tailwind CSS?

- Highly customizable
- No pre-built components
- Responsive design made easy
- Dark mode support
- Optimized production builds

## Getting Started

Install Tailwind CSS in your project:

\`\`\`bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
\`\`\`

## Basic Usage

Here's a simple example of Tailwind's utility classes:

\`\`\`html
<div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
  <div>
    <div class="text-xl font-medium text-black">Tailwind CSS</div>
    <p class="text-gray-500">A utility-first CSS framework</p>
  </div>
</div>
\`\`\`

## Advanced Techniques

### Custom Configurations

Customize your \`tailwind.config.js\`:

\`\`\`js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#1a73e8',
      },
    },
  },
}
\`\`\`

## Conclusion

Tailwind CSS provides a powerful way to build modern interfaces. Practice these concepts to become a Tailwind CSS master!
    `,
    tags: ["CSS", "Tailwind CSS", "Web Development", "Frontend"],
    likes: 38,
  },
];