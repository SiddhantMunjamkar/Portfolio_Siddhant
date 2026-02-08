"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import Link from "next/link"
import { ThemeToggle } from "./theme-toggle"

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    function handleScroll() {
      setScrolled(typeof window !== "undefined" && window.scrollY > 50);
    }
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
      handleScroll();
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-stone-50/95 dark:bg-stone-900/95 backdrop-blur-sm border-b border-stone-200 dark:border-stone-800"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="font-serif text-xl font-bold cursor-pointer text-stone-900 dark:text-stone-100"
            onClick={() => scrollToSection("hero")}
          >
            SM
          </motion.div>
          <div className="flex items-center space-x-6">
            <div className="hidden md:flex space-x-8">
              {["Work", "About","Credentials", "Contact"].map((item) => (
                <motion.button
                  key={item}
                  whileHover={{ y: -2 }}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-sm font-medium tracking-wide text-stone-900 dark:text-stone-100 hover:text-stone-600 dark:hover:text-stone-400 transition-colors"
                >
                  {item}
                </motion.button>
              ))}
              <motion.div whileHover={{ y: -2 }}>
                <Link
                  href="/resume"
                  className="text-sm font-medium tracking-wide text-stone-900 dark:text-stone-100 hover:text-stone-600 dark:hover:text-stone-400 transition-colors"
                >
                  Resume
                </Link>
              </motion.div>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </motion.nav>
  )
}
