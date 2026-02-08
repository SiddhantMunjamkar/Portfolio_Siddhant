"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "GitOps Platform",
    description:
      "A GitOps-based CI/CD pipeline with automated deployments using ArgoCD, Helm, and Kustomize.",
    image: "/images/gitops-technologies.png",
    tags: [
      "ArgoCD",
      "Helm",
      "Kubernetes",
      "GitHub Actions",
      "Prometheus",
      "Grafana",
    ],
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
  {
    id: 5,
    title: "Scalable Backend API with Rate Limiting & Auth",
    description:
      "A production-ready RESTful API with JWT authentication, Google OAuth 2.0 integration, and Redis-based rate limiting using Fixed Window Algorithm. Features IP-based DDoS protection, secure password hashing, and protected routes with horizontal scalability in mind.",
    image: "/images/hld_of_ratelimiter.png",
    tags: [
      "Node.js",
      "Express",
      "TypeScript",
      "PostgreSQL",
      "Prisma ORM",
      "Redis",
      "JWT",
      "Google OAuth 2.0",
      "Rate Limiting",
      "Next.js",
    ],
    github:
      "https://github.com/SiddhantMunjamkar/Rate_limiting_auth_frontend_backend",
    live: "#",
    date: "December 2025",
  },
  {
    id: 6,
    title: "Event-Driven Notification System",
    description:
      "A production-grade, event-driven notification system designed to reliably deliver Email and SMS notifications using Kafka, Redis, and PostgreSQL. Built with fault tolerance, retries, idempotency, and horizontal scalability in mind.",
    image: "/images/notification_design_1.png",
    tags: [
      "Kafka",
      "Event-Driven Architecture",
      "Redis",
      "PostgreSQL",
      "Node.js",
      "Docker",
      "Distributed Systems",
    ],
    github:
      "https://github.com/SiddhantMunjamkar/Event-Driven-Notification-System",
    live: "#",
    date: "July 2025",
  },
  {
    id: 7,
    title: "High-Performance Real-Time Analytics Dashboard",
    description:
      "A Grafana-inspired real-time analytics dashboard built with a custom Canvas rendering engine. Designed to handle high-frequency data streams with worker-based batching, backpressure handling, smooth visualization, and live performance telemetry (FPS, throughput, dropped events) without UI freezes.",
    image: "/images/image_live_dashboard.png",
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "Canvas",
      "Web Workers",
      "Performance Engineering",
      "Backpressure",
      "Real-Time Systems",
    ],
    github: "https://github.com/SiddhantMunjamkar/Live_dashboard",
    live: "#",
    date: "August 2025",
  },
];

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleCardClick = (e: React.MouseEvent) => {
    // Don't navigate if clicking on a link button
    if ((e.target as HTMLElement).closest("a")) {
      return;
    }
    if (isMobile) {
      setIsHovered(!isHovered);
    } else {
      window.scrollTo(0, 0);
      router.push(`/projects/${project.id}`);
    }
  };

  const handleImageClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isMobile) {
      setIsHovered(!isHovered);
    } else {
      window.scrollTo(0, 0);
      router.push(`/projects/${project.id}`);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      viewport={{ once: true }}
      onHoverStart={() => !isMobile && setIsHovered(true)}
      onHoverEnd={() => !isMobile && setIsHovered(false)}
      className="group relative w-full"
    >
      <motion.div
        whileHover={{
          rotateX: 5,
          rotateY: 5,
          scale: 1.02,
          z: 50,
        }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 overflow-hidden shadow-lg hover:shadow-2xl dark:shadow-stone-900/50 transition-all duration-500 w-full h-full flex flex-col"
        style={{ transformStyle: "preserve-3d" }}
      >
        <div
          className="relative overflow-hidden h-40 sm:h-48 md:h-44 lg:h-56 cursor-pointer"
          onClick={handleImageClick}
        >
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            width={600}
            height={400}
            className="w-full h-full object-contain object-center transition-transform duration-700 group-hover:scale-110 bg-white dark:bg-stone-800"
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
              className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors touch-manipulation"
              onClick={(e) => e.stopPropagation()}
            >
              <Github className="w-5 h-5" />
            </motion.a>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors touch-manipulation cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                window.scrollTo(0, 0);
                router.push(`/projects/${project.id}`);
              }}
            >
              <ExternalLink className="w-5 h-5" />
            </motion.button>
          </motion.div>
          {/* <div className="absolute top-4 right-4 bg-stone-900/80 dark:bg-stone-950/90 backdrop-blur-sm px-3 py-1 rounded-full">
            <span className="text-white text-xs sm:text-sm font-medium">
              {project.date}
            </span>
          </div> */}
        </div>

        <div
          className="p-4 sm:p-5 md:p-6 flex flex-col flex-grow cursor-pointer"
          onClick={handleCardClick}
        >
          <h3 className="font-serif text-lg sm:text-xl md:text-xl font-semibold mb-2 sm:mb-3 text-stone-900 dark:text-stone-100 line-clamp-2 hover:text-stone-600 dark:hover:text-stone-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-stone-600 dark:text-stone-400 mb-3 sm:mb-4 leading-relaxed text-xs sm:text-sm md:text-sm line-clamp-2 flex-grow hover:text-stone-700 dark:hover:text-stone-300 transition-colors">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 sm:px-2.5 py-0.5 sm:py-1 text-xs font-medium bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 tracking-wide whitespace-nowrap"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Mobile-only buttons */}
          <div className="flex space-x-3 md:hidden mt-4">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-4 py-2 bg-stone-900 dark:bg-stone-100 text-stone-50 dark:text-stone-900 text-sm font-medium rounded hover:bg-stone-800 dark:hover:bg-stone-200 transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <button
              onClick={() => {
                window.scrollTo(0, 0);
                router.push(`/projects/${project.id}`);
              }}
              className="flex items-center space-x-2 px-4 py-2 border border-stone-900 dark:border-stone-100 text-stone-900 dark:text-stone-100 text-sm font-medium rounded hover:bg-stone-900 hover:text-stone-50 dark:hover:bg-stone-100 dark:hover:text-stone-900 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Details</span>
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function ProjectShowcase() {
  return (
    <section
      id="work"
      className="py-16 sm:py-20 md:py-24 bg-stone-50 dark:bg-stone-950 transition-colors duration-300"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light mb-4 sm:mb-6 text-stone-900 dark:text-stone-100">
            Selected Work
          </h2>
          <div className="w-16 sm:w-24 h-px bg-stone-400 dark:bg-stone-600 mx-auto mb-6 sm:mb-8" />
          <p className="text-lg sm:text-xl text-stone-600 dark:text-stone-400 max-w-3xl mx-auto leading-relaxed px-4">
            A curated collection of projects showcasing expertise in automation,
            infrastructure engineering, and full-stack development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-8 lg:gap-10 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
