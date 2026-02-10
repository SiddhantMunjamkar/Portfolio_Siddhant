"use client";

import type React from "react";

import { motion } from "framer-motion";
import { useState } from "react";
import { Github, Linkedin, Mail, Send, Twitter } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { apiFetch } from "@/lib/api/api";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  async function handleSendMessage() {
    const { name, email, message } = formData;

    // Validation
    if (!name.trim()) {
      toast({
        title: "Name is required",
        description: "Please enter your name",
        variant: "destructive",
      });
      return;
    }

    if (!email.trim()) {
      toast({
        title: "Email is required",
        description: "Please enter your email address",
        variant: "destructive",
      });
      return;
    }

    if (!message.trim()) {
      toast({
        title: "Message is required",
        description: "Please enter your message",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      await apiFetch("/api/v1/message/send-message", {
        method: "POST",
        body: JSON.stringify({
          name,
          email,
          body: message,
        }),
      });

      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
        variant: "success",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Error sending message:", error);
      toast({
        title: "Failed to send message",
        description:
          error instanceof Error
            ? error.message
            : "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSendMessage();
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/SiddhantMunjamkar",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/siddhant-munjamkar/",
      label: "LinkedIn",
    },
    { icon: Twitter, href: "https://x.com/Siddhant69401", label: "Twitter" },
    {
      icon: Mail,
      href: "mailto:siddhantmunjamkar9316@gmail.com",
      label: "Email",
    },
  ];

  return (
    <section
      id="contact"
      className="py-24 bg-stone-900 dark:bg-stone-950 text-stone-50 transition-colors duration-300 relative overflow-hidden"
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 dark:from-stone-950 dark:via-stone-900 dark:to-stone-950" />

      {/* Floating orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 dark:bg-blue-400/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -150, 0],
            y: [0, 100, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 dark:bg-purple-400/5 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-5xl md:text-6xl font-light mb-6">
            Let's Create Together
          </h2>
          <div className="w-24 h-px bg-stone-400 dark:bg-stone-600 mx-auto mb-8" />
          <p className="text-xl text-stone-300 dark:text-stone-400 max-w-3xl mx-auto leading-relaxed">
            Have a project in mind? I'd love to hear about it and explore how we
            can bring your vision to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="font-serif text-3xl font-semibold mb-6">
                Get in Touch
              </h3>
              <p className="text-stone-300 dark:text-stone-400 text-lg leading-relaxed mb-8">
                Whether you're looking to build something new, improve an
                existing project, or just want to chat about the latest in web
                technology, I'm always excited to connect with fellow creators
                and innovators.
              </p>
            </div>

            <div className="flex space-x-6">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-4 border border-stone-700 dark:border-stone-800 hover:border-stone-500 dark:hover:border-stone-600 hover:bg-stone-800 dark:hover:bg-stone-900 transition-all duration-300 group backdrop-blur-sm"
                  aria-label={label}
                >
                  <Icon className="w-6 h-6 text-stone-400 group-hover:text-stone-200 transition-colors" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("name")}
                  onBlur={() => setFocusedField(null)}
                  required
                  className="w-full px-0 py-4 bg-transparent border-0 border-b border-stone-700 dark:border-stone-800 focus:border-stone-400 dark:focus:border-stone-500 focus:outline-none text-stone-50 placeholder-transparent transition-colors"
                  placeholder="Your Name"
                />
                <motion.label
                  animate={{
                    y: focusedField === "name" || formData.name ? -25 : 0,
                    scale: focusedField === "name" || formData.name ? 0.85 : 1,
                    color: focusedField === "name" ? "#a8a29e" : "#78716c",
                  }}
                  className="absolute left-0 top-4 pointer-events-none origin-left transition-all"
                >
                  Your Name
                </motion.label>
              </div>

              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("email")}
                  onBlur={() => setFocusedField(null)}
                  required
                  className="w-full px-0 py-4 bg-transparent border-0 border-b border-stone-700 dark:border-stone-800 focus:border-stone-400 dark:focus:border-stone-500 focus:outline-none text-stone-50 placeholder-transparent transition-colors"
                  placeholder="Your Email"
                />
                <motion.label
                  animate={{
                    y: focusedField === "email" || formData.email ? -25 : 0,
                    scale:
                      focusedField === "email" || formData.email ? 0.85 : 1,
                    color: focusedField === "email" ? "#a8a29e" : "#78716c",
                  }}
                  className="absolute left-0 top-4 pointer-events-none origin-left transition-all"
                >
                  Your Email
                </motion.label>
              </div>

              <div className="relative">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => setFocusedField(null)}
                  required
                  rows={4}
                  className="w-full px-0 py-4 bg-transparent border-0 border-b border-stone-700 dark:border-stone-800 focus:border-stone-400 dark:focus:border-stone-500 focus:outline-none text-stone-50 placeholder-transparent resize-none transition-colors"
                  placeholder="Your Message"
                />
                <motion.label
                  animate={{
                    y: focusedField === "message" || formData.message ? -25 : 0,
                    scale:
                      focusedField === "message" || formData.message ? 0.85 : 1,
                    color: focusedField === "message" ? "#a8a29e" : "#78716c",
                  }}
                  className="absolute left-0 top-4 pointer-events-none origin-left transition-all"
                >
                  Your Message
                </motion.label>
              </div>

              <motion.button
                type="submit"
                disabled={isLoading}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center space-x-3 py-4 px-8 border border-stone-400 dark:border-stone-500 text-stone-50 font-medium tracking-wide hover:bg-stone-50 hover:text-stone-900 dark:hover:bg-stone-100 dark:hover:text-stone-900 transition-all duration-300 group backdrop-blur-sm disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span>{isLoading ? "Sending..." : "Send Message"}</span>
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
