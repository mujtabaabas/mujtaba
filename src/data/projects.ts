export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: string;
  liveUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    id: "tv-app",
    title: "Zindabad Pakistan TV",
    description: "A Next.js-based TV app featuring Pakistani channels with elegant UI and animations.",
    image: "/projects/tv-app.jpg",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    category: "Web App",
    liveUrl: "https://tv.example.com",
    githubUrl: "https://github.com/yourusername/tv-app",
  },
  {
    id: "resume-builder",
    title: "Dynamic Resume Builder",
    description: "Multi-step resume builder with live editing and PDF download functionality.",
    image: "/projects/resume-builder.jpg",
    technologies: ["React", "TypeScript", "jsPDF", "Tailwind CSS"],
    category: "Web App",
    liveUrl: "https://resume.example.com",
    githubUrl: "https://github.com/yourusername/resume-builder",
  },
  {
    id: "ecommerce",
    title: "E-commerce Website",
    description: "Responsive Next.js e-commerce platform with dynamic product listings and cart functionality.",
    image: "/projects/ecommerce.jpg",
    technologies: ["Next.js", "MongoDB", "Tailwind CSS", "Stripe"],
    category: "Full Stack",
    liveUrl: "https://shop.example.com",
    githubUrl: "https://github.com/yourusername/ecommerce",
  },
  {
    id: "school-website",
    title: "Al-Kazim Model School",
    description: "School website with integrated AI chatbot and Google Ads integration.",
    image: "/projects/school.jpg",
    technologies: ["Next.js", "OpenAI API", "Google Ads API", "Tailwind CSS"],
    category: "Full Stack",
    liveUrl: "https://school.example.com",
    githubUrl: "https://github.com/yourusername/school-website",
  },
  {
    id: "dev-gpt",
    title: "M.J Developer GPT",
    description: "AI-powered chatbot specialized in answering developer queries with code examples.",
    image: "/projects/dev-gpt.jpg",
    technologies: ["React", "OpenAI API", "Node.js", "MongoDB"],
    category: "AI",
    liveUrl: "https://devgpt.example.com",
    githubUrl: "https://github.com/yourusername/dev-gpt",
  },
  {
    id: "music-player",
    title: "M.J Chat & Software",
    description: "AI-powered music player and downloader with chat functionality.",
    image: "/projects/music-player.jpg",
    technologies: ["Next.js", "Node.js", "OpenAI API", "FFmpeg"],
    category: "AI",
    liveUrl: "https://music.example.com",
    githubUrl: "https://github.com/yourusername/music-player",
  },
];

export const projectCategories = ["All", "Web App", "Full Stack", "AI"];