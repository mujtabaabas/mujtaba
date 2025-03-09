"use client"

import { FiBriefcase, FiBook, FiAward } from "react-icons/fi";

export default function ResumeStaticContent() {
  return (
    <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
      <div className="space-y-12">
        {/* Header */}
        <header className="text-center">
          <h2 className="text-3xl font-bold mb-2">Syed Mujtaba Abbas</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">
            Full Stack Developer
          </p>
          <div className="text-gray-600 dark:text-gray-300">
            <p>Pakistan</p>
            <p>s4mujtaba555@gmail.com | +92 346 0630802</p>
          </div>
        </header>

        {/* Professional Summary */}
        <section>
          <h3 className="text-xl font-semibold mb-4">Professional Summary</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Passionate Full Stack Developer with expertise in Next.js, TypeScript,
            Tailwind CSS, and Node.js. Experienced in building responsive,
            interactive, and scalable web applications.
          </p>
        </section>

        {/* Experience */}
        <section>
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <FiBriefcase className="w-5 h-5" />
            Work Experience
          </h3>
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold">Full Stack Developer | Freelance</h4>
              <p className="text-gray-500 dark:text-gray-400">2023 - Present</p>
              <ul className="mt-2 list-disc list-inside text-gray-600 dark:text-gray-300">
                <li>Developed multiple web applications using Next.js and Tailwind CSS</li>
                <li>Created M.J Chat & Software, an AI-powered music player</li>
                <li>Built interactive web-based code editor</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">Web Developer Intern | GIAIC Project</h4>
              <p className="text-gray-500 dark:text-gray-400">2023 - 2024</p>
              <ul className="mt-2 list-disc list-inside text-gray-600 dark:text-gray-300">
                <li>Built pixel-perfect, mobile-responsive UIs</li>
                <li>Integrated dynamic PDF generation</li>
                <li>Worked on AI chatbot implementation</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Education */}
        <section>
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <FiBook className="w-5 h-5" />
            Education
          </h3>
          <div>
            <h4 className="font-semibold">Bachelor's in Computer Science</h4>
            <p className="text-gray-500 dark:text-gray-400">Ongoing</p>
          </div>
        </section>

        {/* Skills */}
        <section>
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <FiAward className="w-5 h-5" />
            Technical Skills
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold mb-2">Frontend</h4>
              <p className="text-gray-600 dark:text-gray-300">
                HTML, CSS, JavaScript, Next.js, React.js, TypeScript, Tailwind CSS,
                Framer Motion
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Backend</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Node.js, Express.js, MongoDB, Firebase, Sanity
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Dev Tools</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Git, GitHub, Docker, Postman, Vercel
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Other</h4>
              <p className="text-gray-600 dark:text-gray-300">
                jsPDF, WebSockets, API Integration, AI Chatbots (OpenAI API)
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}