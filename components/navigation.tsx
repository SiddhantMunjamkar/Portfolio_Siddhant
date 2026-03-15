"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import Link from "next/link"
import { ThemeToggle } from "./theme-toggle"

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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
    setMobileMenuOpen(false)
  }

  const handleNavClick = (item: string) => {
    scrollToSection(item.toLowerCase())
  }

  const navItems = ["Work", "About", "Credentials", "Contact"]

  return (
    <>
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
                {navItems.map((item) => (
                  <motion.button
                    key={item}
                    whileHover={{ y: -2 }}
                    onClick={() => handleNavClick(item)}
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

              {/* Mobile Menu Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden flex flex-col space-y-1.5 relative z-50"
                aria-label="Toggle menu"
              >
                <motion.span
                  animate={mobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                  className="block w-6 h-0.5 bg-stone-900 dark:bg-stone-100 transition-colors"
                />
                <motion.span
                  animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                  className="block w-6 h-0.5 bg-stone-900 dark:bg-stone-100 transition-colors"
                />
                <motion.span
                  animate={mobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                  className="block w-6 h-0.5 bg-stone-900 dark:bg-stone-100 transition-colors"
                />
              </motion.button>

              <ThemeToggle />
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-stone-900/50 dark:bg-stone-900/70 z-40 md:hidden"
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              exit={{ x: -300 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 left-0 h-screen w-64 bg-stone-50/70 dark:bg-stone-900/70 backdrop-blur-md border-r border-stone-200 dark:border-stone-800 z-40 md:hidden overflow-y-auto pt-20"
            >
              <div className="flex flex-col space-y-2 px-6">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => handleNavClick(item)}
                    className="text-left py-3 px-4 text-base font-medium text-stone-900 dark:text-stone-100 hover:bg-stone-200 dark:hover:bg-stone-800 rounded-lg transition-colors"
                  >
                    {item}
                  </motion.button>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navItems.length * 0.1 }}
                >
                  <Link
                    href="/resume"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-3 px-4 text-base font-medium text-stone-900 dark:text-stone-100 hover:bg-stone-200 dark:hover:bg-stone-800 rounded-lg transition-colors"
                  >
                    Resume
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
