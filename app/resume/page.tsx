"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import {
  Download,
  ZoomIn,
  ZoomOut,
  ChevronLeft,
  ChevronRight,
  ArrowLeft,
} from "lucide-react";
import { motion } from "framer-motion";
import { ThemeToggle } from "@/components/theme-toggle";

export default function ResumePage() {
  const [scale, setScale] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const handleZoomIn = () => setScale((prev) => Math.min(prev + 0.1, 2));
  const handleZoomOut = () => setScale((prev) => Math.max(prev - 0.1, 0.5));
  const handlePreviousPage = () =>
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  const handleNextPage = () =>
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Full_stack_developer.pdf";
    link.download = "Siddhant_Munjamkar_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-stone-50 dark:bg-stone-950 text-stone-900 dark:text-stone-100 transition-colors duration-300">
      {/* Navigation Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-stone-50/95 dark:bg-stone-900/95 backdrop-blur-sm border-b border-stone-200 dark:border-stone-800"
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center max-w-7xl mx-auto">
            <Link
              href="/"
              className="inline-flex items-center space-x-2 text-sm font-medium text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Portfolio</span>
            </Link>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="font-serif text-lg font-light text-stone-900 dark:text-stone-100 items-center"
            >
              Resume
            </motion.div>
            <ThemeToggle />
          </div>
        </div>
      </motion.header>

      {/* Main Content */}
      <div className="pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Title Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 text-center"
          >
            <h1 className="font-serif text-4xl md:text-5xl font-light mb-2 text-stone-900 dark:text-stone-100">
              Siddhant Munjamkar
            </h1>
            <p className="text-stone-600 dark:text-stone-400 text-sm tracking-wide">
               Software Engineer Full-Stack & Platform Systems
            </p>
          </motion.div>

          {/* Controls Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8"
          >
            {/* Download Button */}
            <button
              onClick={handleDownload}
              className="inline-flex items-center space-x-2 px-6 py-3 border border-stone-900 dark:border-stone-100 text-stone-900 dark:text-stone-100 font-medium hover:bg-stone-900 hover:text-stone-50 dark:hover:bg-stone-100 dark:hover:text-stone-900 transition-colors rounded"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF</span>
            </button>

            {/* Controls Bar */}
            <div className="flex items-center gap-1 bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded p-2">
              {/* Zoom Controls */}
              <button
                onClick={handleZoomOut}
                className="p-2 text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-colors"
                title="Zoom out"
              >
                <ZoomOut className="w-4 h-4" />
              </button>
              <span className="text-xs text-stone-600 dark:text-stone-400 px-2 min-w-12 text-center">
                {Math.round(scale * 100)}%
              </span>
              <button
                onClick={handleZoomIn}
                className="p-2 text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-colors"
                title="Zoom in"
              >
                <ZoomIn className="w-4 h-4" />
              </button>

              <div className="w-px h-6 bg-stone-200 dark:bg-stone-800 mx-1" />

              {/* Page Navigation */}
              <button
                onClick={handlePreviousPage}
                disabled={currentPage === 1}
                className="p-2 text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                title="Previous page"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="text-xs text-stone-600 dark:text-stone-400 px-2 min-w-16 text-center">
                {currentPage}/{totalPages}
              </span>
              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className="p-2 text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                title="Next page"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

          {/* PDF Viewer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 rounded-lg overflow-hidden shadow-lg"
          >
            <div
              className="w-full bg-white dark:bg-stone-900"
              style={{ height: "750px" }}
            >
              <iframe
                ref={iframeRef}
                src="/Full_stack_developer.pdf#page=1"
                className="w-full h-full border-none"
                style={{
                  transform: `scale(${scale})`,
                  transformOrigin: "top center",
                  transition: "transform 0.2s ease",
                }}
              />
            </div>
          </motion.div>

          {/* Footer Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 text-center text-sm text-stone-600 dark:text-stone-400"
          >
            <p>Last updated: January 2025</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
