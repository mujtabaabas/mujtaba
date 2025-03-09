import type { Metadata } from "next";
import ContactForm from "@/components/contact/contact-form";
import SocialLinks from "@/components/contact/social-links";

export const metadata: Metadata = {
  title: "Contact | Syed Mujtaba Abbas",
  description: "Get in touch with me for collaboration or opportunities.",
} as const;

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-20">
      <div className="container mx-auto px-4 py-8">
        <section className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold mb-6">Get in Touch</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </section>

        <div className="max-w-5xl mx-auto">
          <div className="grid gap-16 md:grid-cols-[1fr_auto] items-start">
            <div>
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-semibold mb-6 text-center">
                  Send a Message
                </h2>
                <ContactForm />
              </div>
            </div>

            <div className="md:sticky md:top-24">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-semibold mb-6 text-center">
                  Connect with Me
                </h2>
                <SocialLinks />
              </div>

              <div className="mt-8 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
                <h3 className="font-semibold mb-2">Location</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Based in Pakistan
                  <br />
                  Available for remote work
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}