"use client"
import HeroSection from "@/components/hero-section"
import ProjectShowcase from "@/components/project-showcase"
import AboutSection from "@/components/about-section"
import ContactSection from "@/components/contact-section"
import Navigation from "@/components/navigation"
import Credentialsection from "@/components/credentials"

export default function Portfolio() {
  return (
    <div className="bg-stone-50 dark:bg-stone-950 text-stone-900 dark:text-stone-100 transition-colors duration-300">
      <Navigation />
      <main>
        <HeroSection />
        <ProjectShowcase />
        <AboutSection />
        <Credentialsection />
        <ContactSection />
      </main>
      <footer className="border-t border-stone-200 dark:border-stone-800 py-8 bg-stone-50 dark:bg-stone-950 transition-colors duration-300">
        <div className="container mx-auto px-6 text-center text-sm text-stone-600 dark:text-stone-400">
          <p>&copy; {new Date().getFullYear()} Siddhant Munjamkar. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
