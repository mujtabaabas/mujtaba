"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiSend, FiCheck } from "react-icons/fi";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = new FormData(e.currentTarget);
    form.append("access_key", "dc2a1db6-011b-498f-a67f-4a67c2ac7f6b"); // Replace with your actual key

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Object.fromEntries(form)),
    });

    const result = await response.json();
    if (result.success) {
      console.log(result);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setIsSubmitted(false), 3000);
    }

    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onSubmit={handleSubmit}
      className="space-y-6 max-w-xl mx-auto"
    >
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 outline-none"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 outline-none"
        />
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium mb-2">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          required
          value={formData.subject}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 outline-none"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 outline-none"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-white transition-colors ${
          isSubmitting
            ? "bg-gray-400 cursor-not-allowed"
            : isSubmitted
            ? "bg-green-600"
            : "bg-blue-600 hover:bg-blue-700"
        }`}
      >
        {isSubmitting ? (
          "Sending..."
        ) : isSubmitted ? (
          <>
            <FiCheck className="w-5 h-5" />
            Sent Successfully
          </>
        ) : (
          <>
            <FiSend className="w-5 h-5" />
            Send Message
          </>
        )}
      </button>
    </motion.form>
  );
}
