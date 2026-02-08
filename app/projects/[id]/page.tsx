"use client";

import { useRouter } from "next/navigation";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Github, ExternalLink, ArrowLeft, Mail, Linkedin, Twitter } from "lucide-react";
import { getProjectById } from "@/lib/projects-data";

interface PageProps {
  params: {
    id: string;
  };
}

export default function ProjectDetailPage({ params }: PageProps) {
  const router = useRouter();
  const project = getProjectById(params.id);

  if (!project) {
    notFound();
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen bg-stone-50 dark:bg-stone-950 text-stone-900 dark:text-stone-100"
    >
      {/* Navigation */}
      <nav className="sticky top-0 z-40 bg-white/50 dark:bg-stone-900/50 backdrop-blur-md border-b border-stone-200/50 dark:border-stone-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={() => router.back()}
            className="inline-flex items-center space-x-2 text-sm font-medium text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Portfolio</span>
          </button>
        </div>
      </nav>

      {/* Hero Section with Background Image */}
      <section className="relative overflow-hidden bg-white dark:bg-stone-900">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            fill
            priority
            quality={85}
            className="object-cover object-center opacity-40 dark:opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/50 dark:from-stone-900 dark:via-stone-900/50 to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-3 py-1 mb-4 sm:mb-6 text-xs sm:text-sm font-medium bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400 rounded-full">
              {project.category}
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light mb-4 sm:mb-6 tracking-tight leading-tight">
              {project.title}
            </h1>
            <p className="text-base sm:text-lg text-stone-700 dark:text-stone-300 leading-relaxed">
              {project.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Project Overview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-stone-900/50 border border-stone-200 dark:border-stone-800 rounded-lg p-6 sm:p-8"
            >
              <h2 className="font-serif text-2xl sm:text-3xl font-semibold mb-6">
                Project Overview
              </h2>
              <p className="text-stone-600 dark:text-stone-400 leading-relaxed whitespace-pre-wrap">
                {project.longDescription || project.description}
              </p>
            </motion.div>

            {/* Project Gallery */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-stone-900/50 border border-stone-200 dark:border-stone-800 rounded-lg p-6 sm:p-8"
            >
              <h2 className="font-serif text-2xl sm:text-3xl font-semibold mb-6">
                Project Gallery
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {project.gallery && project.gallery.length > 0 ? (
                  project.gallery.map((image, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="relative h-48 sm:h-56 rounded-lg overflow-hidden border border-stone-200 dark:border-stone-800 bg-stone-100 dark:bg-stone-800"
                    >
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`${project.title} gallery image ${index + 1}`}
                        fill
                        className="object-contain hover:scale-105 transition-transform duration-500"
                      />
                    </motion.div>
                  ))
                ) : (
                  <div className="col-span-full h-56 flex items-center justify-center bg-stone-100 dark:bg-stone-800 rounded-lg">
                    <p className="text-stone-500">
                      No gallery images available
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Project Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-stone-900/50 border border-stone-200 dark:border-stone-800 rounded-lg p-6"
            >
              <h3 className="font-serif text-lg font-semibold mb-6">
                Project Details
              </h3>
              <div className="space-y-6">
                <div>
                  <p className="text-xs uppercase font-semibold text-stone-500 dark:text-stone-500 tracking-widest mb-2">
                    Client
                  </p>
                  <p className="text-stone-900 dark:text-stone-100 font-medium">
                    Personal Project
                  </p>
                </div>
                <div>
                  <p className="text-xs uppercase font-semibold text-stone-500 dark:text-stone-500 tracking-widest mb-2">
                    Timeline
                  </p>
                  <p className="text-stone-900 dark:text-stone-100 font-medium">
                    {project.date}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Technologies */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-stone-900/50 border border-stone-200 dark:border-stone-800 rounded-lg p-6"
            >
              <h3 className="font-serif text-lg font-semibold mb-4">
                Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 text-xs font-medium rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* View Source Code  and live demo*/}
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 font-medium rounded hover:bg-stone-800 dark:hover:bg-stone-200 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Github className="w-4 h-4" />
              View Source Code
            </motion.a>
            {project.live &&   <motion.a
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 font-medium rounded hover:bg-stone-800 dark:hover:bg-stone-200 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <ExternalLink className="w-4 h-4" />
              View Live Demo
            </motion.a>}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="border-t border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-light mb-4">
            Interested in working together?
          </h2>
          <p className="text-stone-600 dark:text-stone-400 mb-8 max-w-2xl mx-auto text-base sm:text-lg">
            Let&apos;s discuss how I can help with your next project or bring
            your ideas to life.
          </p>
          <div className="w-24 h-px bg-stone-400 dark:bg-stone-600 mx-auto mb-8" />
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            {/* <Link
              href="/#contact"
              className="inline-flex items-center px-8 py-3 border border-stone-900 dark:border-stone-100 text-stone-900 dark:text-stone-100 font-medium hover:bg-stone-900 hover:text-white dark:hover:bg-stone-100 dark:hover:text-stone-900 transition-colors rounded"
            >
              Get in Touch
            </Link> */}

            <div className="flex items-center gap-4">
              <a
                href="mailto:siddhantmunjamkar9316@gmail.com"
                className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400 hover:bg-stone-900 hover:text-white dark:hover:bg-stone-100 dark:hover:text-stone-900 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/siddhant-munjamkar/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400 hover:bg-stone-900 hover:text-white dark:hover:bg-stone-100 dark:hover:text-stone-900 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://x.com/Siddhant69401"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400 hover:bg-stone-900 hover:text-white dark:hover:bg-stone-100 dark:hover:text-stone-900 transition-colors"
                aria-label="LinkedIn"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
}
