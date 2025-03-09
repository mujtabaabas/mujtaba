import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import Navbar from "@/components/nav/navbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Syed Mujtaba Abbas | Full Stack Developer",
  description: "Full Stack Developer specializing in Next.js, TypeScript, and Node.js. View my portfolio, projects, and blog.",
  metadataBase: new URL('https://mujtaba.vercel.app'),
  keywords: ["Full Stack Developer", "Next.js", "TypeScript", "React", "Node.js", "Portfolio"],
  authors: [{ name: "Syed Mujtaba Abbas", url: "https://github.com/mujtababas" }],
  creator: "Syed Mujtaba Abbas"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-50`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
