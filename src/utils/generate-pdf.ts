import { jsPDF } from "jspdf";

export function generateResume() {
  const doc = new jsPDF();
  
  // Basic Info
  doc.setFontSize(24);
  doc.text("Syed Mujtaba Abbas", 20, 20);
  
  doc.setFontSize(12);
  doc.text("Full Stack Developer", 20, 30);
  doc.text("Pakistan", 20, 35);
  doc.text("s4mujtaba555@gmail.com | +92 346 0630802", 20, 40);
  
  // Professional Summary
  doc.setFontSize(16);
  doc.text("Professional Summary", 20, 55);
  doc.setFontSize(12);
  const summary = "Passionate Full Stack Developer with expertise in Next.js, TypeScript, "+
                 "Tailwind CSS, and Node.js. Experienced in building responsive, "+
                 "interactive, and scalable web applications.";
  doc.text(doc.splitTextToSize(summary, 170), 20, 65);
  
  // Skills
  doc.setFontSize(16);
  doc.text("Technical Skills", 20, 90);
  doc.setFontSize(12);
  const skills = [
    "Frontend: Next.js, React, TypeScript, Tailwind CSS",
    "Backend: Node.js, Express.js, MongoDB",
    "Tools: Git, GitHub, Docker, Vercel",
  ];
  skills.forEach((skill, index) => {
    doc.text(`• ${skill}`, 20, 100 + (index * 7));
  });
  
  // Experience
  doc.setFontSize(16);
  doc.text("Work Experience", 20, 130);
  doc.setFontSize(12);
  doc.text("Full Stack Developer | Freelance (2023 - Present)", 20, 140);
  const responsibilities = [
    "• Developed multiple web applications using Next.js and Tailwind CSS",
    "• Created M.J Chat & Software, an AI-powered music player",
    "• Built interactive web-based code editor supporting multiple languages",
  ];
  responsibilities.forEach((resp, index) => {
    doc.text(resp, 20, 150 + (index * 7));
  });
  
  doc.text("Web Developer Intern | GIAIC Project (2023 - 2024)", 20, 175);
  const internExp = [
    "• Built pixel-perfect, mobile-responsive UIs based on Figma designs",
    "• Integrated jsPDF for generating resumes dynamically",
    "• Worked on AI chatbot implementation",
  ];
  internExp.forEach((exp, index) => {
    doc.text(exp, 20, 185 + (index * 7));
  });
  
  // Education
  doc.setFontSize(16);
  doc.text("Education", 20, 215);
  doc.setFontSize(12);
  doc.text("Bachelor's in Computer Science (Ongoing)", 20, 225);
  
  return doc.save("syed-mujtaba-resume.pdf");
}