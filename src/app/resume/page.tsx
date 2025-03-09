import type { Metadata } from "next";
import ResumeContent from "./resume-content";

export const metadata: Metadata = {
  title: "Resume | Syed Mujtaba Abbas",
  description: "View my professional experience, education, and skills.",
} as const;

export default function ResumePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-20">
      <div className="container mx-auto px-4 py-8">
        <ResumeContent />
      </div>
    </main>
  );
}