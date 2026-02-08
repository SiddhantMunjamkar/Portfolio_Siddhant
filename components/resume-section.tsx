"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  Download,
  ZoomIn,
  ZoomOut,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function ResumeSection() {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [scale, setScale] = useState(1);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const handleZoomIn = () => setScale((prev) => Math.min(prev + 0.1, 2));
  const handleZoomOut = () => setScale((prev) => Math.max(prev - 0.1, 0.5));

  const handlePreviousPage = () =>
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  const handleNextPage = () =>
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Siddhant_Munjamkar_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-stone-950 via-stone-900 to-stone-950 py-16 sm:py-24">
      {/* Background accent lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-green-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-green-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-light text-stone-100 mb-4 tracking-tight">
            Resume
          </h1>
          <div className="inline-block bg-stone-900/50 border border-stone-700/50 rounded px-4 py-2 font-mono text-sm text-green-400">
            <span className="text-green-500">$ </span>
            cat resume.pdf
          </div>
        </motion.div>

        {/* Controls and Download Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8"
        >
          {/* Download Button */}
          <button
            onClick={handleDownload}
            className="group relative inline-flex items-center gap-2 px-6 py-3 border-2 border-green-500/50 rounded text-green-400 font-mono text-sm hover:bg-green-500/10 hover:border-green-500 transition-all duration-300"
          >
            <Download className="w-4 h-4" />
            <span>$ download_resume</span>
            <div className="absolute inset-0 rounded opacity-0 group-hover:opacity-100 bg-green-500/5 transition-opacity duration-300 -z-10" />
          </button>

          {/* Zoom and Navigation Controls */}
          <div className="flex items-center gap-2 bg-stone-900/50 border border-stone-700/50 rounded p-2">
            <button
              onClick={handleZoomOut}
              className="p-2 text-stone-400 hover:text-green-400 hover:bg-stone-800/50 rounded transition-all duration-300"
              title="Zoom out"
            >
              <ZoomOut className="w-4 h-4" />
            </button>
            <span className="text-stone-400 font-mono text-xs mx-2 min-w-12 text-center">
              {Math.round(scale * 100)}%
            </span>
            <button
              onClick={handleZoomIn}
              className="p-2 text-stone-400 hover:text-green-400 hover:bg-stone-800/50 rounded transition-all duration-300"
              title="Zoom in"
            >
              <ZoomIn className="w-4 h-4" />
            </button>

            <div className="w-px h-6 bg-stone-700/50 mx-2" />

            <button
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
              className="p-2 text-stone-400 disabled:opacity-50 disabled:cursor-not-allowed hover:text-green-400 hover:bg-stone-800/50 rounded transition-all duration-300"
              title="Previous page"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="text-stone-400 font-mono text-xs mx-2 min-w-16 text-center">
              {currentPage} / {totalPages}
            </span>
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className="p-2 text-stone-400 disabled:opacity-50 disabled:cursor-not-allowed hover:text-green-400 hover:bg-stone-800/50 rounded transition-all duration-300"
              title="Next page"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>

        {/* PDF Viewer Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative rounded-lg overflow-hidden border border-stone-700/50 bg-stone-900/30 shadow-2xl backdrop-blur-sm"
        >
          {/* PDF Iframe */}
          <div
            className="w-full bg-stone-950 relative"
            style={{
              height: "700px",
              overflow: "hidden",
            }}
          >
            <iframe
              ref={iframeRef}
              src="/resume.pdf#page=1"
              className="w-full h-full border-none"
              style={{
                transform: `scale(${scale})`,
                transformOrigin: "top center",
                transition: "transform 0.2s ease",
              }}
            />
          </div>

          {/* Fallback message for browsers that don't support PDF */}
          <div className="absolute inset-0 flex items-center justify-center bg-stone-950/80 pointer-events-none hidden">
            <div className="text-center">
              <p className="text-stone-400 font-mono mb-4">
                PDF viewer not supported. Please download the resume.
              </p>
              <button
                onClick={handleDownload}
                className="px-4 py-2 bg-green-500/20 border border-green-500 text-green-400 rounded font-mono text-sm hover:bg-green-500/30 transition-all"
              >
                Download Resume
              </button>
            </div>
          </div>
        </motion.div>

        {/* Terminal-style footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <p className="font-mono text-sm text-stone-500">
            <span className="text-green-500">$</span> resume_loaded
            <span className="text-green-500 animate-pulse ml-1">▊</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
