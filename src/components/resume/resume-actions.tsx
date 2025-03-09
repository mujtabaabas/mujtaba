"use client";

import { FiDownload } from "react-icons/fi";
import { generateResume } from "@/utils/generate-pdf";
import ClientOnly from "@/components/providers/client-only";

export default function ResumeActions() {
  return (
    <ClientOnly>
      <section className="max-w-4xl mx-auto text-center mb-8">
        <h1 className="text-4xl font-bold mb-6">Resume</h1>
        <button
          onClick={generateResume}
          className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <FiDownload className="w-5 h-5" />
          Download PDF Version
        </button>
      </section>
    </ClientOnly>
  );
}