"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import Image from "next/image"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "GitOps Platform",
    description: "A GitOps-based CI/CD pipeline with automated deployments using ArgoCD, Helm, and Kustomize.",
    image: "/images/gitops-technologies.png",
    tags: ["ArgoCD", "Helm", "Kubernetes", "GitHub Actions", "Prometheus"],
    github: "https://github.com/SiddhantMunjamkar/GitOpsNavigator",
    live: "#",
    date: "January 2025",
  },
  {
    id: 2,
    title: "Exchange System",
    description:
      "A full-stack exchange system with modular services, real-time market data streaming, and high-frequency trade processing.",
    image: "/images/exchange-system.png",
    tags: ["Node.js", "JavaScript", "Redis", "WebSocket", "Docker"],
    github: "https://github.com/SiddhantMunjamkar/Exchange-platform",
    live: "#",
    date: "January 2025",
  },
  {
    id: 3,
    title: "Paytm Transaction App",
    description:
      "A secure transaction platform with wallet transfers, transaction history, and containerized deployment on Kubernetes.",
    image: "/images/paytm-transaction.png",
    tags: ["TypeScript", "Node.js", "Prisma", "PostgreSQL", "Docker"],
    github: "https://github.com/SiddhantMunjamkar/Paytm_transaction_app",
    live: "#",
    date: "February 2025",
  },
  {
    id: 4,
    title: "AI Automation Suite with n8n",
    description:
      "An intelligent workflow system powered by n8n and OpenAI for automated agent prompt generation and calendar management.",
    image: "/images/ai-automation-suite.png",
    tags: ["n8n", "OpenAI", "Automation", "Google Calendar", "LangChain"],
    github: "https://github.com/SiddhantMunjamkar/Automation-Project",
    live: "#",
    date: "July 2025",
  },
]

function ProjectCard({ project, index }: { project: (typeof projects)[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      viewport={{ once: true }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative"
    >
      <motion.div
        whileHover={{
          rotateX: 5,
          rotateY: 5,
          scale: 1.02,
          z: 50,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 overflow-hidden shadow-lg hover:shadow-2xl dark:shadow-stone-900/50 transition-all duration-500"
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="relative overflow-hidden">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            width={600}
            height={400}
            className="w-full h-64 object-contain object-center transition-transform duration-700 group-hover:scale-110 bg-white dark:bg-stone-800"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            className="absolute inset-0 bg-stone-900/80 dark:bg-stone-950/90 flex items-center justify-center space-x-4"
          >
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
            >
              <Github className="w-5 h-5" />
            </motion.a>
            {/* <motion.a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
            >
              <ExternalLink className="w-5 h-5" />
            </motion.a> */}
          </motion.div>
          {/* <div className="absolute top-4 right-4 bg-stone-900/80 dark:bg-stone-950/90 backdrop-blur-sm px-3 py-1 rounded-full">
            <span className="text-white text-sm font-medium">{project.date}</span>
          </div> */}
        </div>

        <div className="p-8">
          <h3 className="font-serif text-2xl font-semibold mb-3 text-stone-900 dark:text-stone-100">{project.title}</h3>
          <p className="text-stone-600 dark:text-stone-400 mb-4 leading-relaxed">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-medium bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 tracking-wide"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function ProjectShowcase() {
  return (
    <section id="work" className="py-24 bg-stone-50 dark:bg-stone-950 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-5xl md:text-6xl font-light mb-6 text-stone-900 dark:text-stone-100">
            Selected Work
          </h2>
          <div className="w-24 h-px bg-stone-400 dark:bg-stone-600 mx-auto mb-8" />
          <p className="text-xl text-stone-600 dark:text-stone-400 max-w-3xl mx-auto leading-relaxed">
            A curated collection of projects showcasing expertise in automation, infrastructure engineering, and
            full-stack development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
