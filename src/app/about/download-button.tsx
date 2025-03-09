"use client";

import { FiDownload } from "react-icons/fi";
import { generateResume } from "@/utils/generate-pdf";

export function DownloadButton() {
  return (
    <button
      onClick={generateResume}
      className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
    >
      <FiDownload className="w-5 h-5" />
      Download Resume
    </button>
  );
}